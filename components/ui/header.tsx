import SidebarNav from "./SidebarNav";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import BookSearch from "@/components/search/BookSearch";
import { auth } from "@/auth";
import Link from "next/link";
import { UserPen } from "lucide-react";

const Header = async () => {
  const session = await auth();

  return (
    <>
      <aside className="dashboard-sidebar">
        <figure>
          <img src="/next.svg" alt="logo placeholder" />
        </figure>
        <SidebarNav />
        <section className="quick-access">
          <h2>Currently reading</h2>
          <p>Some book card with progress bar</p>
        </section>
      </aside>
      <nav className="dashboard-top-nav">
        <BookSearch />
        {session && session?.user ? (
          <>
            <button
              popoverTarget="user-menu-popover"
              className="user-menu-toggle"
            >
              <img
                src={session?.user?.image as string}
                alt={session?.user?.name as string}
                className="user-avatar"
              />
            </button>
            <div id="user-menu-popover" popover="auto">
              <ul>
                <li>
                  <Link href="/profile">
                    <UserPen size={16} /> Profile
                  </Link>
                </li>
                <li>
                  <SignOut />
                </li>
              </ul>
            </div>
          </>
        ) : (
          <SignIn />
        )}
      </nav>
    </>
  );
};

export default Header;
