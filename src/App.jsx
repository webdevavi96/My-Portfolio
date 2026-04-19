import { useEffect, useState } from 'react'
import { Navbar, Footer, Loader } from './components/Components'
import { Home, About, Projects, Contact } from './pages/Pages'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-indigo-950 to-blue-900 text-white">

      <Navbar />

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
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
