import { store } from "@/Redux/Store"
import { Provider } from "react-redux"

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
   const getLayout = Component.getLayout || ((page) => page)
 
  return <Provider store={store}>
   { getLayout(<Component {...pageProps} />)}
  </Provider>
  
  
}