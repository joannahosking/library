"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { House, BookOpenText, BookMarked, BookCheck } from "lucide-react";

const SidebarNavItem = ({
  url,
  icon,
  text,
}: {
  url: string;
  icon: React.ReactNode;
  text: string;
}) => {
  const pathname = usePathname();

  if (pathname === url) {
    return (
      <li>
        <span className="current-page">
          {icon} {text}
        </span>
      </li>
    );
  }

  return (
    <li>
      <Link href={url}>
        {icon} {text}
      </Link>
    </li>
  );
};

const SidebarNav = () => {
  return (
    <nav className="dashboard-navigation">
      <ul>
        <SidebarNavItem
          url="/dashboard"
          icon={<House size={16} />}
          text="Dashboard"
        />
        <SidebarNavItem
          url="/dashboard/reading"
          icon={<BookOpenText size={16} />}
          text="Currently reading"
        />
        <SidebarNavItem
          url="/dashboard/read"
          icon={<BookCheck size={16} />}
          text="Read"
        />
        <SidebarNavItem
          url="/dashboard/want-to-read"
          icon={<BookMarked size={16} />}
          text="Want to read"
        />
      </ul>
    </nav>
  );
};

export default SidebarNav;