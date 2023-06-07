import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
//i can use Chakra in all app
ReactDOM.createRoot(document.getElementById('root')).render(
<ChakraProvider><App /></ChakraProvider>
 ,
)
