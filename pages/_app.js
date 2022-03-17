import { Provider as MainProvider } from "../contexts/Main";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
}

export default MyApp;
