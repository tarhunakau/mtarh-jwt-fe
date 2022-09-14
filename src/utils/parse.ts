import { base64Decode } from './common'

export const parseJwt = (token: string) => {
  const base64Url = token.split('.')[1]

  if (!base64Url) {
    throw new Error('JWT token is invalid')
  }

  const uriComponent = base64Decode(base64Url)
    .split('')
    .map((c: string) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
    .join('')

  const jsonPayload = decodeURIComponent(uriComponent)

  return JSON.parse(jsonPayload)
}
