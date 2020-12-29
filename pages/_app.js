import '../styles/globals.scss'
import '../styles/_colors.scss';
import '../styles/_responsive.scss';

import withApollo from '../lib/apollo';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withApollo({
  ssr: false,
})(MyApp);
