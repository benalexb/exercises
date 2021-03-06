import React from 'react'
import '../src/styles/globals.css'

// eslint-disable-next-line react/prop-types
function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
