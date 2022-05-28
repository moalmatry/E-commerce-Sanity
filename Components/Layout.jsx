import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <div className="layout">
      <Head>
        <title>Mo Store</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
