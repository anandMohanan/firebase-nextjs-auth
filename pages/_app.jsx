/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { authProvider } from "../utils/context/authProvider";

function MyApp({ Component, pageProps }) {
  return (
    <authProvider>
      <Component {...pageProps} />)
    </authProvider>
  );
}

export default MyApp;
