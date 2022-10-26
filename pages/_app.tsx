import 'app/styles/style.scss'
import { GlobalTheme } from '@carbon/react'
import React from 'react'
import { AppProps } from 'next/app'

function ConfigGenerator({ Component, pageProps }: AppProps) {
  return (
    <GlobalTheme theme="g100">
      <Component {...pageProps} />
    </GlobalTheme>
  )
}

export default ConfigGenerator