import { parseJwt } from './parse'
import { signJwt } from './sign'

describe('Sign valid JWT', () => {
  let pem: string

  beforeAll(() => {
    pem = '-----BEGIN PRIVATE KEY-----' +
      'MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCjknN/LTKuPvXU' +
      'bvLvyAwIs7I189CC+JErIOWwYzE1zRRLn7zNbG+UQJFqVorWm/84OqX/iC9HYudo' +
      'r4qFfT67Fynfs5/OMzbqp7ECX24oKF1G919bUHY8KrJY4CUJhgo4FOda3PuzbmEd' +
      '/POB6OcQ2vyJg1SsGY5REfheIaZ+AHVlTaze6HvejNJWE29iVIBxd0a4cWy9T4xt' +
      'DS5+Z9juoN+l8QvPjFaYenPzWgOqyw5Fsgkulv++M4A/htPX3iFWQNV1Mix9Y/aS' +
      'jbi8ft5+rlt6+llVT87fSgdeT9ZCmceIjwtZW+Zk6dlknXRoTI5q6PZfAFVDKhFN' +
      'RKdbSP03AgMBAAECggEAE2aCVlopAausAocqPzBN5RZTE70YRQBwT1o2g+Yv5v6s' +
      '4o9OmFq9HStPU/pxuySDb8rc92LSoLflVHBFkLGbKBuGNucaFB3U7J35C5v/97lZ' +
      '3tnmMHFppJc30fy7x9ZjDeXEzu0Y2V5FHIZs50KVbVVb0H+IImVhkNH90ERTd+wr' +
      'dbQ2lVg+lv86depJ5YhKs7iDbFnztx+OAdHrAo6qEff1gODv+9JK172pBmZsb+j6' +
      'l/8FSWJN57FfV61QuaKWezS3ASvxDWsOlI7QLuQwOzg4J4LioBsdE+Q3uHhkx6oF' +
      'f/hyYkexsnAl933C/VETK/9tjQf6nBHa29i1nq9k+QKBgQDM/EXj8UR7CJ9cINY4' +
      'QLuMDT4qPgIPjVccWJsv/roL43SYZ1NSs7FcfnRWQgCEtAClMXY8E6Q0zMiRRTu0' +
      'eQkHJabC0R8HZbF3AKj7zMwTj9X6qm4mondXsqJ0k+YqDlEz2fHXbABHAodL1nlu' +
      'wC52I+Nk+ZmLTBsVd1SFgnM8kwKBgQDMR7YheIf6Z8zwuDpbM09fCHXe5SnWSP3m' +
      'kN/WGvnTelvi1SUv8cn1+9bc17yJEF35M4i6Fracox+LlGfDJ8neKDJ0MlqKH7Jd' +
      '244YiXUaMWQbZcXLx052vwF/Vi7gVnFxdqCM7Nx/AV1vTN+Z7OH5JuQOM+qazR4a' +
      'YDYaSsFHTQKBgDtv7ugQXlX6gxLYpqT7CCas9FiVUE2oIxkiDCWXi+TEmFtUopF5' +
      'bzUtqZgVXUcdVo6P0APNgjCZLJMK6ywCaH69CSS2NHQVpaam91jD4mzNqTMc1gG3' +
      '3Dj+oCKDfBq3ug355SkctNviPM7dqqpVaWNyNo5h3YbJk5Te3BA2aimnAoGAEdqy' +
      'sHo4aEpqPx/a+d2iMkwrATBGV9RJXL2M0snIzBMFtO2sMmSPolBAl0zDzbcAf6dh' +
      'a+JQU6BuQWTXLNdtbV1WC5HbF/dtP4bRBJP/CCsI9NwQTZ893GMVXmvJ7RGhGKml' +
      'nquVGgSkhfXSFUH+/ifIBvXCq4UB/IwsLmAaRIECgYAeX/Lc1r2TWySP0ny+Ra+H' +
      'fUUh3gRV/FFEnVfTiyIcP3UL4ikPOCXrDaIE8QOPs5hUzzen5Vo2NG66LyzgH2HG' +
      'NAsWO4FEfeuh1jOn9Nz+FIvcATdB2GFYT7qRb44gNq9yWj7Dx9BFByLXht4XM1cH' +
      'n3lLUx3lpr32I+zijs25AQ==' +
      '-----END PRIVATE KEY-----'
  })

  test('should sign token', () => {
    expect(parseJwt(signJwt('Hello, world!', pem)).data).toBe('Hello, world!')
  })
})
