'use client'

import React, { type ReactNode, createContext, useContext, useState } from "react"

// Example: simple global state (can remove if you don’t need any context yet)
type AppContextType = {
  message: string
  setMessage: (msg: string) => void
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("Hello from Context!")

  return (
    <AppContext.Provider value={{ message, setMessage }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error("useAppContext must be used within AppProvider")
  return ctx
}

