import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/assets/logo.svg'
import { FaCartPlus, FaSearch } from "react-icons/fa";

const Navbar = () => {
    const navLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contacts",
            path: "/contacts"
        },
    ]
    return (
        <div className="bg-base-100 ">
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content space-y-3 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks.map((item, index) => <Link className='font-bold hover:text-primary text-base' href={item.path} key={index} >{item.title}</Link>)
                            }
                        </ul>
                    </div>
                    <Link href={'/'}>
                        <Image src={logo} height={60} width={60} alt='logo' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6">
                        {
                            navLinks.map((item, index) => <Link className='font-bold items-center hover:text-primary text-base' href={item.path} key={index} >{item.title}</Link>)
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex space-x-3 items-center text-xl">
                        <FaCartPlus />
                        <FaSearch />
                        <button className="btn bg-white hover:bg-primary text-primary  btn-primary px-6 hover:text-white">Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
