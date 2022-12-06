import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import {Routes, Route, BrowserRouter, Outlet} from 'react-router-dom'
import {Customers} from "./components/Customers"
import {Home} from "./components/Home"

const clienteConsulta = new QueryClient()

function App() {
  return (
  <QueryClientProvider client={clienteConsulta}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path="customers" element={<Customers/>}></ Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  ) 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
