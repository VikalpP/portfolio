export const isBrowser = typeof window !== 'undefined'

export function openInNewTab(path: string) {
  window.open(path, '_blank')
}
