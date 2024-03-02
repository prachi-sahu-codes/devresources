"use client";
import React from "react";
import PrimaryBtn from "../primaryBtn";
import Image from "next/image";
import logo_sign from "@/assets/logo_sign.svg";
import { menu } from "@/data/commonData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavbar from "../mobileNavbar";

const Navbar = () => {
  let pathname = usePathname();
  const parts = "/" + pathname.split("/")[1];

  return (
    <header className="fixed w-full z-20 bg-neutral-base text-white px-[15px] lg:px-[75px] xl:px-[80px]">
      <nav className="max-w-[1400px] m-auto flex justify-between sm:items-center">
        <div className="flex sm:gap-[10px] items-center sm:py-2">
          <div className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] m-2 sm:m-0 lg:w-[40px] lg:h-[40px] xl:w-[48px] xl:h-[48px]">
            <Link href="/conferences">
              <Image src={logo_sign} alt="logo sign" />
            </Link>
          </div>
          <h1 className="text-[19px] lg:text-[24px] xl:text-[28px]">
            <a href="/conferences" className="text-whites-op-500">
              Dev<span className="font-bold text-white">Resources</span>
            </a>
          </h1>
        </div>
        <div className="hidden lg:flex gap-[10px] lg:gap-[20px] xl:gap-[32px] items-center py-[7px] sm:py-0">
          <ul className="hidden sm:flex gap-[10px] lg:gap-[20px] xl:gap-[32px]">
            {menu?.map((item) => {
              const isActive =
                parts === item.url
                  ? "border-b-4 gradient-border-bottom font-[700]"
                  : "text-neutral-200 font-[400]";

              return (
                <Link
                  key={item.text}
                  className={`inline-block h-[80px] text-[14px] xl:text-[16px] leading-[60px] lg:leading-[80px] no-underline hover:text-white ${isActive}`}
                  href={item.url}
                >
                  {item.text}
                </Link>
              );
            })}
          </ul>
          <PrimaryBtn text="Submit New" />
        </div>
        <MobileNavbar menu={menu} pathname={parts} />
      </nav>
    </header>
  );
};

export default Navbar;
