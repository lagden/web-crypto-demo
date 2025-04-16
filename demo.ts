import { parseArgs } from 'jsr:@std/cli/parse-args'
import { encrypt } from './encrypt.ts'
import { decrypt } from './decrypt.ts'

const args = parseArgs(Deno.args)

const data = args?.m ?? 'Apenas um show'

const encryptedData = await encrypt(data)
console.log('Encrypted data:', encryptedData)
console.log('---')

const decryptedData = await decrypt(encryptedData)
console.log('Decrypted data:', decryptedData)
