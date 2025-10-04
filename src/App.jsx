import { useEffect, useState } from 'react'
import { Navbar, Footer, Loader } from './components/Components'
import { Home, About, Projects, Contact } from './pages/Pages'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar />
      <main className='h-auto w-full bg-black text-white'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function App() {

  const [loading, setLoading] = useState(true)

  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'contact', element: <Contact /> },
    ]
  }])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />


  return <RouterProvider router={router} />
}

export default App
