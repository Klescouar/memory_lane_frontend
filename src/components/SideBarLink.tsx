"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SideBarLinkProps {
  href: string;
  text: string;
  icon: string;
}

export const SideBarLink = ({ href, text, icon }: SideBarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      className={`flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200 ${
        isActive ? "bg-gray-800 !text-gray-200" : ""
      }`}
      href={href}
    >
      <Image
        src={`/icons/${icon}.svg`}
        alt="Brain"
        width={20}
        height={38}
        priority
      />

      <span className="mx-4 font-medium">{text}</span>
    </Link>
  );
};
