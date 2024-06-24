# Web Crypto: encrypt/decrypt

Exemplo de como utilizar.

## Chaves

Primeiro criamos o par de chaves (`private/public`).  
A chave pública será utilizado na aplicação frontend para criptografar a mensagem.

```
deno run gen-key.js
```

O comando acima irá criar as chaves pública e privada na pasta `keys`.

A chave pública `keys/publicKey.json` tem que ser importado no [REPL](https://svelte.dev/repl/9eba449663044c67bc7223ef99f04974?version=4.2.18) para criptografar a mensagem no formato `JWE`.

---

Para o backend ler a mensagem, copie o `JWE (eyJhbGci...VQUkA)` gerado no [REPL](https://svelte.dev/repl/9eba449663044c67bc7223ef99f04974?version=4.2.18), cole no arquivo `read.js` ou `read.py`, salve e rode:

```
deno run read.js
```

ou via python

```
pip install -r requirements.txt
python read.py
```

## Team

[<img src="https://avatars.githubusercontent.com/u/130963?s=390" alt="Lagden" width="90">](https://gitlab.textecnologia.io/lagden) 


## Copyright

[TEx Tecnologia](https://www.textecnologia.com.br/)
