import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col h-screen">
      <main className="container mx-auto max-w-7xl flex-grow">{children}</main>
    </div>
  );
}
