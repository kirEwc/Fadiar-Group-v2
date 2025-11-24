"use client";
import Menu from "@/component/menu/menu";
import Serchbar from "@/component/searchBar/searchBar";
import UserDropdown from "@/component/userDropdown/userDropdown";
import { TablerShoppingCart } from "@/icons/icons";
import Image from "next/image";
import "@fontsource/just-me-again-down-here";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isCart4 = pathname === "/cart4";

  return (
    <div className="relative w-full bg-white z-50">
      <div className={`pt-4 flex justify-between px-4 md:justify-between md:px-25 items-start ${isCart4 ? "2xl:px-20" : "2xl:px-28"}`}>
        <div className="hidden md:block">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="h-10 w-32"
            priority 
          />
        </div>

        <div className="hidden md:block">
          <Serchbar />
        </div>

        <div className=" md:hidden">
          <Menu />
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart1">
            <TablerShoppingCart className="cursor-pointer" />
          </Link>
          <UserDropdown />
        </div>
      </div>

      <div className="hidden md:block">
        <Menu />
      </div>

      <div className="md:hidden px-4 mt-4 pb-4">
        <Serchbar />
      </div>
    </div>
  );
}
