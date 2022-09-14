# Getting started
Base utils for working with JWT on frontend side.

## Installation
Install with npm:
```
npm install @mtarh/jwt-fe
```
or with yarn:
```
yarn add @mtarh/jwt-fe
```

## Examples
### Parse JWT
```
import { parseJwt } from '@mtarh/jwt-fe'

parseJwt(token)
```

### Sign data with JWT
```
import { signJwt } from '@mtarh/jwt-fe'

const payload = 'Any string data to be moved in data section'
const pem = 'PEM Certificate' // Privacy Enhanced Mail Certificate
const restData = {} // optional

signJwt(payload, pem, restData)
```