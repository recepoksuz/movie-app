"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'


export const Providers = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        {children}
    </ThemeProvider>

  )
}
