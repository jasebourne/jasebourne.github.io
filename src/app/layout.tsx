import '../styles/globals.css'
import React from 'react'

export const metadata = { title: 'Survivor.io Tools', description: 'Damage calculators and utilities' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang='en'><body><div className='min-h-screen'>{children}</div></body></html>)
}