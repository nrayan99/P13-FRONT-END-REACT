import Header from "../components/Header";
import Footer from "../components/Footer";

function DefaultLayout({ children } : { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
