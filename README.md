# Web Crypto: encrypt/decrypt

Exemplo de utilização.

## Chaves

Primeiro, criamos o par de chaves (privada/pública).\
A chave pública será utilizada na aplicação frontend para criptografar a mensagem.

```bash
deno run gen-key.js
```

O comando acima criará as chaves pública e privada na pasta `keys`.

A chave pública `keys/publicKey.json` deve ser importada no [REPL](https://svelte.dev/repl/9eba449663044c67bc7223ef99f04974) para criptografar a mensagem no formato `JWE`.

---

Para que o backend leia a mensagem, copie o `JWE (eyJhbGci...VQUkA)` gerado no [REPL](https://svelte.dev/repl/9eba449663044c67bc7223ef99f04974), cole no arquivo `read.js` ou `read.py`, salve e execute:

```bash
deno run read.js
```

ou, via Python:

```bash
pip install -r requirements.txt
python read.py
```

Você também pode executar o script de demonstração com:

```bash
deno demo.ts -m "maravilha"
```
