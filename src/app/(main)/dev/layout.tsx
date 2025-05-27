export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
  // return (
  //   <div className="container flex-1 grid grid-cols-[200px_1fr] mt-20">
  //     <div className="">
  //       <SidebarMenu />
  //     </div>
  //     <div className=" p-4">{children}</div>
  //   </div>
  // );
}
