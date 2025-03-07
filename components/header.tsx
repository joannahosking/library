import SignIn from "./sign-in";
import SignOut from "./sign-out";
import { auth } from "@/auth";
import Link from "next/link";

const Header = async () => {
  const session = await auth();

  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      {session && session?.user ? (
        <>
          <Link href={`/profile`}>{session?.user?.name}</Link>
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
    </header>
  );
};

export default Header;
