import * as jose from 'https://deno.land/x/jose@v5.4.1/index.ts'

import publicKeyJson from './keys/publicKey.json' with { type: 'json' }
const publicKey = await jose.importJWK(publicKeyJson)

export function encrypt(data: string): Promise<string> {
	return new jose.CompactEncrypt(new TextEncoder().encode(data))
		.setProtectedHeader({
			alg: 'RSA-OAEP-256',
			enc: 'A256GCM',
		})
		.encrypt(publicKey)
}
