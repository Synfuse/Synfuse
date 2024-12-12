import React from 'react'

import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logoimg from '../../assets/logo.jpg'

import { Outlet, NavLink } from 'react-router-dom';
import FooterComponent from '../footer.component/index';

function NavList() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
            <a href="#">
              Home
            </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
            <a href="#whysynfuse">
              Why SynFuse?
            </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
            <a href="#">
              About Us
            </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
            <a href="#">
              product
            </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
            <a href="#">
              Team
            </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a href="#">Contact Us</a>
        </Typography>
      </ul>
    );
  }

const NavBarComponent = () => {

    const [openNav, setOpenNav] = React.useState(false);
 
    const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false);
   
    React.useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
   
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);

  return (
    <>
        <div className="mx-auto max-w-screen-xl px-6 py-3">
            <div className="flex items-center justify-between text-blue-gray-900 ">
                <Typography
                as="a"
                href="/"
                variant="h6"
                className="mr-4 cursor-pointer py-1.5 flex justify-between items-center gap-x-4"
                >
                <img 
                    src={logoimg} 
                    alt="Logo" 
                    className="h-10 w-10 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                />

                SynFuse
                </Typography>
                <div className="hidden lg:block">
                <NavList />
                </div>
                <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
                >
                {openNav ? (
                    <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                ) : (
                    <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </div>
        <div>
            <Outlet />
        </div>
        <FooterComponent />
    </>
  )
}

export default NavBarComponent