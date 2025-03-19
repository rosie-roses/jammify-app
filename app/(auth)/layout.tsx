import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen items-center justify-center">
      <main className="flex-grow">{children}</main>
    </div>
  );
}
