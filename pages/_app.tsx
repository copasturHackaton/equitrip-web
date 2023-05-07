import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalContextProvider } from '@/context/queryContext';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <> 
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <GlobalContextProvider>
          <Component {...pageProps} />
        </GlobalContextProvider>
      </QueryClientProvider>
    </>
  )
  
}
