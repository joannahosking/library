import Header from "@/components/ui/header";
import './global.css';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div id="container">
        <Header />
        <main>
            {children}
        </main>
    </div>
  );
}
