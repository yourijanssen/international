"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {useTranslation} from "next-i18next";

const links = [
  {
    nameKey: "home",
    path: "/",
  },
  {
    nameKey: "services",
    path: "/services",
  },
  {
    nameKey: "resume",
    path: "/resume",
  },
  {
    nameKey: "work",
    path: "/work",
  },
  {
    nameKey: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const { t:tCommon } = useTranslation('common');

  const pathname = usePathname();
  return (
    <nav className="flex gap-8 text-text-light dark:text-text-dark">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {tCommon(link.nameKey)}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
