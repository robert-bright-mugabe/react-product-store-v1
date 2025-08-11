import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ClerkProvider } from '@clerk/clerk-react'

const clerkPubKey = "pk_test_Y3V0ZS1kb2UtNTQuY2xlcmsuYWNjb3VudHMuZGV2JA"; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <App />
  </ClerkProvider>
)
