import * as forge from 'forge'
import { v1 as uuidv1 } from 'uuid'

import { base64Encode } from './common'

export const signJwt = (payload: string, secret: string, restTokenAttributes?: object) => {
  const privateKey = forge.pki.privateKeyFromPem(secret)
  const privateKeyDER = forge.pki.pemToDer(secret)
  const kidHash = forge.md.sha256.create()

  kidHash.update(privateKeyDER.data , 'raw')

  const header = {
    alg: 'RS256',
    kid: base64Encode(kidHash.digest().data),
  }

  const token = {
    nbf: Math.floor(Date.now() / 1000) - 30,
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    jti: uuidv1(),
    iat: Math.floor(Date.now() / 1000) - 30,
    data: payload,
    ...restTokenAttributes,
  }

  const md = forge.md.sha256.create()
  const encodedHeader = base64Encode(JSON.stringify(header))
  const encodedToken = base64Encode(JSON.stringify(token))
  md.update(`${encodedHeader}.${encodedToken}`, 'raw')
		
  const signature = privateKey.sign(md, 'RSASSA-PKCS1-V1_5')
		
  return `${encodedHeader}.${encodedToken}.${base64Encode(signature)}`
}
