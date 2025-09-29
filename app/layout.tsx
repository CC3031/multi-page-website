import "./globals.css";
import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <header className="flex flex-col items-center justify-center bg-black">
          <div className=" w-50">
          <img src="https://wallpaperaccess.com/full/2680447.jpg" alt="Brand of Sacrifice Image"/>
          </div>
          <nav>
            <ul className="flex flex-row">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/dashboard/about">About Me</Link></li>
              <li><Link href="/dashboard/resume">Resume</Link></li>
            </ul>
          </nav>
        </header>
        <main className="overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
