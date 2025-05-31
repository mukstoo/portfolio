"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Locale, defaultLocale, getMessages } from '@/i18n'

type Messages = Record<string, string | Record<string, string | Record<string, string>>>

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  messages: Messages
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [messages, setMessages] = useState<Messages>({})

  useEffect(() => {
    // Load messages for the current locale
    getMessages(locale).then((msgs) => setMessages(msgs as Messages))
  }, [locale])

  useEffect(() => {
    // Check for saved locale in localStorage
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && ['en', 'pt'].includes(savedLocale)) {
      setLocale(savedLocale)
    }
  }, [])

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = messages
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, messages, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 