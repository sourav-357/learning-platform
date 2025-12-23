
import React, { use } from 'react'
import { GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Navbar = () => {


    // if the person is a existing user or not 
    const user = true;


    return (

        <div className='bg-gray-900 py-3 z-50 w-full fixed top-0'>
            <div className='max-w-7xl mx-auto flex justify-between'>

                {/* logo Section */}
                <div className='flex gap-3'>
                    <GraduationCap className='text-gray-300 w-10 h-10' />
                    <h1 className='text-gray-300 text-3xl font-bold'>Logo</h1>
                </div>


                {/* Menu Section */}
                <div>
                    <ul className='flex gap-7 text-xl font-semibold text-white'>
                        <li>Home</li>
                        <li>Courses</li>

                        {/* if user exist or not exist */}
                        {
                            (!user) ? (
                                <div className='flex gap-3'>
                                    <Button className="bg-blue-500 hover:bg-blue-600">Login</Button>
                                    <Button className="bg-gray-600 hover:bg-gray-700">SignUp</Button>
                                </div>
                            ) : (
                                <div className='flex items-center gap-7'>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Button className="bg-blue-500 hover:bg-blue-600">Logout</Button>
                                </div>
                            )
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar