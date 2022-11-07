import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='shadow-2xl '>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">

                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Item 1</Link></li>
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2">
                                    <li><Link>Submenu 1</Link></li>
                                    <li><Link>Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li><Link>Item 3</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl ml-2">LUNCH ZONE</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link>Home</Link></li>
                        <li tabIndex={0}>
                            <Link>
                                Services
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link>Menu</Link></li>
                                <li><Link>Food Details</Link></li>
                                <li><Link>Reviews</Link></li>
                            </ul>
                        </li>
                        <li><Link>About Me</Link></li>
                        <li><Link>Make Order</Link></li>

                        <li><Link>Blog</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end  gap-4">
                    <Link className="btn">Login</Link>
                    <Link className="btn">Register</Link>
                    <Link className="btn">LogOut</Link>


                </div>
            </div>
        </div>
    );
};

export default Header;