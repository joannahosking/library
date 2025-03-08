import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Link href="/dashboard">Go to dashboard</Link>
      <main>{children}</main>
    </>
  );
}
