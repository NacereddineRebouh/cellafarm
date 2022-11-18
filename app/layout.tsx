import Header from "../Components/Header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="relative bg-[#f3f3f3] h-screen overflow-y-scroll scroll-smooth overflow-x-hidden">
        {/* Background circle */}
        <div className="absolute rounded-full h-[550px] w-[550px] bg-orange-200/80 blur-sm -top-28 -left-28 -z-10  animate-pulseLong" />
        <div className="absolute rounded-full h-[400px] w-[400px] bg-emerald-200/80 blur-sm top-[850px] left-[87%] -z-10  animate-pulseC" />
        {/* Header */}
        <section
          id="header"
          className="fixed w-screen top-0 max-w-[2200px] z-30 backdrop-blur-[1px]"
        >
          <Header />
        </section>
        <section>{children}</section>
      </body>
    </html>
  );
}
