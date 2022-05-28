import { Layout } from "../Components";
import { Toaster } from "react-hot-toast";
import { StateContext } from "../Context/state-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
