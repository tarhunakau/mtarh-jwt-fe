export const base64Encode = (value: string) => {
  return btoa(value)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

export const base64Decode = (value: string) => {
  return atob(value.replace(/-/g, '+').replace(/_/g, '/'))
}
