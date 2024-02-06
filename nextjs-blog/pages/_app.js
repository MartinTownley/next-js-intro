import "../styles/global.css";

// Component represents the current page component that needs to be rendered.
// pageProps are the initial props that are pre-populated based on the data returned from the pages 'getInitialProps' function.
export default function App({ Component, pageProps }) {
  console.log("hello from _app");
  return <Component {...pageProps} />;
}
