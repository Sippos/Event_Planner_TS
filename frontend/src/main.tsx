import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import EventDetails from './components/EventDetails'
import CreateEventPage from './components/CreateEventPage'
import ProtectedRoute from './components/ProtectedRoute'
import Footer from './components/Footer'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error ("Das Root-Element mit der ID 'root' wurde nicht gefunden.")
}

createRoot(rootElement).render(
  <StrictMode>
      <BrowserRouter>
        <Navbar />
        <div className="flex pt-16">
          <main className="flex-1 w-full p-margin-mobile md:p-margin-desktop min-h-[calc(100vh-64px)]">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/events/:id" element={<EventDetails />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/create-event" element={<CreateEventPage />} />
                </Route>
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
  </StrictMode>,
)
