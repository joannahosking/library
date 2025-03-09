import { auth } from "@/auth";
import NotAuthenticated from "@/components/ui/NotAuthenticated";
import Header from "@/components/ui/Header";
import "./global.css";

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  if (!session) return <NotAuthenticated />;

  return (
    <div id="container">
      <Header />
      <main>{children}</main>
    </div>
  );
}