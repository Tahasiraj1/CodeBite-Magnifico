import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";



const links = [
    {name: 'Products', href: '#'},
    {name: 'Solutions', href: '#'},
    {name: 'Services', href: '#'},
    {name: 'Help Center', href: '#'},
    {name: 'Pricing', href: '#'},
]

const MobileNav = () => {
  return (
    <>
      {/* Movile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="lg:hidden cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="bg-white font-satoshi bg-opacity-30 backdrop-blur-md pl-4">
          <SheetHeader>
            <SheetTitle className="text-white">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-4 text-white">
            {links.map((link, index) => (
              <Link href={link.href} key={index}>
                <h2>{link.name}</h2>
              </Link>
            ))}
          </div>
          <SheetFooter className="flex-row items-center justify-between">
            <Link href="/login">
              <button className="bg-white text-black w-[150px] py-4 shadow-none rounded-md hover:bg-white/80">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-blue-600 text-white w-[150px] py-4 rounded-md flex justify-center text-center gap-2 shadow-none hover:bg-blue-500">
                Sign Up <FaArrowRight />
              </button>
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;