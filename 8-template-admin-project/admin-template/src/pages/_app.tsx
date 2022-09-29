import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import {AppProvider} from '../data/context/ApiContext'
import {AuthProvider} from '../data/context/AuthContext'

function MyApp({ Component, pageProps }) {
  return(
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  ) 
}

export default MyApp
