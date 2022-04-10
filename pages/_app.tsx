import { useEffect } from "react"
import { AppProps } from "next/app"
import Head from "next/head"
import { GlobalStyle } from "GlobalStyle"
import { CssBaseline } from "@mui/material"
import { StylesProvider } from "@mui/styles"

import createEmotionCache from "createEmotionCache"
import { CacheProvider, EmotionCache } from "@emotion/react"

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  fallback: { [key: string]: any }
}

import { Layout } from "views/common/Layout"
import { AppThemeProvider } from "providers/AppThemeProvider"

const CustomApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>DaoSurv</title>
      </Head>
      <GlobalStyle />
      <StylesProvider injectFirst>
        <AppThemeProvider>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppThemeProvider>
      </StylesProvider>
    </CacheProvider>
  )
}

export default CustomApp
