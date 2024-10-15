
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {/* <MainComp/> */}
        {/* <h2 className="text-center">Child NavBar</h2> */}
        {children}
    </div>
  );
}
