import * as jose from 'https://deno.land/x/jose@v5.4.1/index.ts'
import private_jwk from './keys/privateKey.json' with { type: 'json' }

export async function decrypt(jwe: string): Promise<string | undefined> {
	try {
		const privateKey = await jose.importJWK(private_jwk)
		const {
			plaintext,
			// protectedHeader,
		} = await jose.compactDecrypt(jwe, privateKey)

		// console.log(protectedHeader)
		return new TextDecoder().decode(plaintext)
	} catch (error) {
		console.error('Failed to decrypt JWE:', error)
	}
}
