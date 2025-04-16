const { subtle } = crypto

function generateKeys(hash = 'SHA-256') {
	return subtle.generateKey(
		{
			name: 'RSA-OAEP',
			modulusLength: 4096,
			publicExponent: new Uint8Array([1, 0, 1]),
			hash,
		},
		true,
		['encrypt', 'decrypt'],
	)
}

function exportKey(keys, type = 'publicKey', format = 'jwk') {
	return subtle.exportKey(format, keys?.[type])
}

const keys = await generateKeys()
const privateKey = await exportKey(keys, 'privateKey')
const publicKey = await exportKey(keys, 'publicKey')

await Deno.writeTextFile('./keys/privateKey.json', JSON.stringify(privateKey, undefined, '  '))
await Deno.writeTextFile('./keys/publicKey.json', JSON.stringify(publicKey, undefined, '  '))

console.log(JSON.stringify({ privateKey, publicKey }))
