import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";



const Login = () => {

  const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });


  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === 'signup') {
      setSignupInput({ ...signupInput, [name]: value })
    } else {
      setLoginInput({ ...loginInput, [name]: value })
    }
  }


  const handleRegistration = (type) => {
    const inputData = type === "login" ? loginInput : signupInput
    console.log(inputData)
  }


  return (

    <div className="flex items-center justify-center w-full py-20">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="signup">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Signup</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>


          {/* SIGNUP */}
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Signup to get started.</CardDescription>
              </CardHeader>

              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    name="name"
                    value={signupInput.name}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    id="name"
                    placeholder="John Doe" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={signupInput.email}
                    placeholder="john@example.com"
                    onChange={(e) => changeInputHandler(e, "signup")}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    value={signupInput.password}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    type="password" />
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full" onClick={() => handleRegistration("signup")}>Signup</Button>
              </CardFooter>
            </Card>
          </TabsContent>



          {/* LOGIN */}
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Enter your credentials to login.
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    name="email"
                    value={loginInput.email}
                    onChange={(e) => changeInputHandler(e, "login")}
                    id="login-email"
                    type="email" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    name="password"
                    value={loginInput.password}
                    onChange={(e) => changeInputHandler(e, "login")}
                    id="login-password"
                    type="password" />
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full" onClick={() => handleRegistration("login")}>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
};

export default Login;
