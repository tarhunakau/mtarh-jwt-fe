import { parseJwt } from './parse'

describe('Parse valid JWT', () => {
  let token: string

  beforeAll(() => {
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  })

  test('should be parsed', () => {
    expect(parseJwt(token))
      .toStrictEqual({
        iat: 1516239022,
        name: 'John Doe',
        sub: '1234567890',
      })
  })

  test('should throw error if not valid', () => {
    expect(() => parseJwt('')).toThrow('JWT token is invalid')
    expect(() => parseJwt('abc.def')).toThrow('URI malformed')
  })
})
