import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createRouter } from '@tanstack/react-router'

import {
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { ThemeProvider } from './components/theme-provider'

// Create a new router instance
const router = createRouter({ routeTree })
const queryClient = new QueryClient()

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
    </ThemeProvider>
    
  </React.StrictMode>,
)


