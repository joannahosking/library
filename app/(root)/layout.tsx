import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Link href="/shelf">Go to shelf</Link>
      <main>{children}</main>
    </>
  );
}
