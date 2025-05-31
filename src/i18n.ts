export const locales = ['en', 'pt'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'en'

export async function getMessages(locale: Locale) {
  try {
    return (await import(`../messages/${locale}.json`)).default
  } catch {
    return (await import(`../messages/${defaultLocale}.json`)).default
  }
} 