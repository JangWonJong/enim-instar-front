import '../styles/globals.css'
import {Layout} from './common'
import { PropTypes } from 'prop-types'
import {wrapper} from '../redux/store.ts'
 
function MyApp({ Component, pageProps }) {
  
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
  MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.any.isRequired
  }
}

export default wrapper.withRedux(MyApp)
