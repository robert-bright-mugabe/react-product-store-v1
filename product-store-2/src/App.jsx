import { useState } from 'react'
import { SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react'
import Products from './components/Products'
import './App.css'
import logo from "./assets/logo.png"

function App() {
  // State for mobile menu and Clerk modals
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)

  return (
    // Main background with gold and black gradient
    <div className="min-h-screen w-full absolute bg-gradient-to-br from-black via-zinc-900 to-yellow-600">
      {/* Header / Navigation Bar */}
      <header className="flex justify-between items-center py-6 px-8
      md:px-18 bg-black drop-shadow-md border-b border-yellow-500">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <a href="#">
            <img src={logo} alt="ChronoLux Logo" className="w-24 md:w-32 hover:scale-105 transition-all py-2" />
          </a>
          {/* You can add the brand name here if desired */}
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-12 sm:gap-8
        font-semibold text-base">
          <li className="p-3 hover:bg-yellow-500 hover:text-black text-yellow-400 rounded-full transition-all cursor-pointer" onClick={() => setShowSignUp(true)}>Sign Up</li>
          <li className="p-3 hover:bg-yellow-500 hover:text-black text-yellow-400 rounded-full transition-all cursor-pointer" onClick={() => setShowSignIn(true)}>Log In</li>
          <li className="p-3 hover:bg-yellow-500 hover:text-black text-yellow-400 rounded-full transition-all cursor-pointer">Products</li>
        </ul>

        {/* Desktop Search Bar */}
        <div className="relative hidden md:flex items-center gap-3">
          <i className="bx bx-search absolute left-3 text-2xl text-yellow-400"></i>
          <input
            type="text"
            placeholder="Search watches..."
            className="py-2 pl-10 rounded-xl border-2 border-yellow-400 bg-black text-yellow-200 placeholder-yellow-300 focus:bg-zinc-900 focus:outline-yellow-500"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <i
    className="bx bx-menu block text-5xl cursor-pointer text-yellow-400 hover:text-yellow-300 transition-colors"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    aria-label="Open menu"
  ></i>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`absolute md:hidden top-24 left-0 w-full bg-black/90 border-t border-yellow-500 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
          <li className="list-none w-full text-center p-4 hover:bg-yellow-500 hover:text-black text-yellow-400 transition-all cursor-pointer" onClick={() => setShowSignUp(true)}>
            Sign Up
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-yellow-500 hover:text-black text-yellow-400 transition-all cursor-pointer" onClick={() => setShowSignIn(true)}>
            Login
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-yellow-500 hover:text-black text-yellow-400 transition-all cursor-pointer">
            Product
          </li>
        </div>
      </header>

      {/* Clerk Sign Up Modal */}
      {showSignUp && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <SignUp afterSignUpUrl="/" />
            <button className="mt-2 text-blue-500" onClick={() => setShowSignUp(false)}>Close</button>
          </div>
        </div>
      )}
      {/* Clerk Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <SignIn afterSignInUrl="/" />
            <button className="mt-2 text-blue-500" onClick={() => setShowSignIn(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Show Products only when signed in */}
      <SignedIn>
        <Products />
      </SignedIn>
      {/* Show Sign In form when signed out */}
      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <SignIn />
        </div>
      </SignedOut>

      {/* Footer */}
      <footer className="w-full mt-12 py-6 bg-black text-center text-yellow-400 border-t border-yellow-600">
  <p className="text-sm font-serif tracking-widest">
    &copy; {new Date().getFullYear()} ChronoLux. All rights reserved.
  </p>
</footer>
    </div>
  )
}

export default App
