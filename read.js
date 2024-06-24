import * as jose from 'https://deno.land/x/jose@v5.4.1/index.ts'
import private_jwk from './keys/privateKey.json' with { type: 'json' }

async function decryptJWE(jwe) {
	try {
		const privateKey = await jose.importJWK(private_jwk)
		const {
			plaintext,
			// protectedHeader,
		} = await jose.compactDecrypt(jwe, privateKey)

		// console.log(protectedHeader)
		return new TextDecoder().decode(plaintext)
	} catch (error) {
		console.error('Failed to decrypt JWE:', error);
	}
}

const jwe = 'eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIn0.sguLZCnlUVcZFsjwrczOjJ3KMV8y05o_IpDiTutyycSZf__S5JSXaasA9QWhO6kwAuTs4SlLyA0A5nJG_fJ55xXbhxByrzEszhK6UyixyvMUEo-PGBLjySDoWNZVRN1bG0K88M5AMV2OeBhKGhRkN4TWwtFEkNWz37r3r7YEHX3yNYZ6GbB43xeySp1V3p0u_kCfPXrBqdCSUslEy3lN-4IlqxGa-qiHw9Lxq3Y5mfC8Hm7pfQIt-3tTT-p-JRDzgI8bhiXoCF4hdILn3WJayPEGlX81b9MvG5Jo7EZPfayVxsae6aj1keH6l5UPxeW0ylD8f5L35nm2a7RBZPRG2_cGcY1zOJIox8F-lhJxzHcCnVy1ZskwaNSKhws5kTqq-k5MP7QI1dlf5znK-w3e9pmGCekCa9RHfAYW5DTXGbB_pD3TmacwVRrz0-_FoKreDtevkbk56D_tkae6u36dH7fvY7K93m_1_nc3OgPCiCHKNIESPk0rODE_yBUv8eUg0Ni-oQ8BIKus4Uo3NbwZxBEnTixdiu2jsKPEmcOX5ZVHv9uGRCk9Ok1YykFvPxOEmbtR_t0uJ4L_wIf5Ysybkch90lV87dLH8l-0-eqmBKtcinhiP97pZ7mI50zOBAiouDVSJ29-M28Jo3JlUg4BnPvzF3t1F6BBaQNAQghjJ58.rNdxdIT47pcoIHmG.VCNnuSoSz6SjYl1VSXE9ZQHb7EpnHCYkjwm8wA-EXG2mKq_vTaAAA3CBz6lUUerbsDJ-k76TV_tLaMwhBUEdcDBCJbyfL0MR8kAkDvf75VCJUo7iLwvDk9GNnyswrTUAM2g_IxlMbuPDPQ.88q0RtL7M1srvtXwaTxCLA';
const data = await decryptJWE(jwe)
console.log('Decrypted payload:', data)
