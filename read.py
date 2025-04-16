import json
from authlib.jose import JsonWebEncryption
from authlib.jose.errors import JoseError

def decrypt_jwe(jwe_token, jwk_file):
    with open(jwk_file) as f:
        private_jwk = json.load(f)

    # If 'key_ops' is not required, ensure this is removed if it causes compatibility issues
    private_jwk.pop('key_ops', None)

    jwe_cryptor = JsonWebEncryption()

    try:
        decrypted_payload = jwe_cryptor.deserialize_compact(jwe_token, private_jwk)
        return decrypted_payload['payload'].decode('utf-8')
    except JoseError as e:
        print("Failed to decrypt JWE:", e)

# Example usage
jwe = 'eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIn0.Z2CAMaH_FnXhlBN76naa-Pu17_M7wrqilQJVTqkbDnDk5hKxaPdYFBbUVb2rgY2yfVxU8Bou8dLqZjHm03WFGQslPUotSgAyq4TbUdbiZjzjHB8QSQFRiko1t7f18jWpVnOdiYzhk2jkLKzvywRbQ2y5Y27f35a6olR0TBuHlNUUnx5GujAu4b6_zT0Ru9p6jdh3lZw1SS97rzy5ouTvcJxLGvuQBRP6PxWbNbOU9NJkcGz65v_oob0AQe6svn7K_yQIsAGHRCI-sPIZQ1ZWj23ydvq7VyCrhmJXIcrvLU7zT1o-OD0P4Lhzewf5NuR0ZS3z551Uk7BFCA85QJB1OXLq6Ruuef6QUGvRKFKuRtiunKlGAbZLO5jg-9bHmeSi5qy6tTF8xLFqVbqth1Tbs92rS8WktDswVl9OzmY3KccrNitKKxD5D5sDqok9wZ7AX_stJFG2iQ8z_XbPIs036m-qjF0pBUa0fzdXwUQ_z82BtoX4MjVsBstP7qkXgvx8vokht9VK0m1m76zoXRtOVLkTdoHJXYqd7wtYTJHBaYrsQz3xpQVD3LOWIoCdJs_R3DR5VkcwMIs2sDEEHkk6xEMMI8QmNbrANWnAqFlYKm9OTIupcDDbbEzzXsjVj7KIX22K8P5GjKW0SJQNzh9t0g2TAcDNZIVWtpVyss6sqBo.AYtH87yesZxDlNsO.Y5kplKSjGKiKg4CHSVH7gFO7Hc8zTkSDtDyIHZrBzVsQaNbDmj38eWgT32MAbH-yIeKPmBr9hIrv9UL45b7gqhZtKIYV2ebrjtlWNYdV_wmKsJ1NAB_Cmqy61gsjhK9HC-rVivBQEDZa3gGhzbeMyXwD7eiGdJkmCiPISqlCfr_29g47ftljGZduv5f47iZwYEbORDbb2X77tzvWJsrBrEcFkJYjesqk_vf-0Mb4KDp3bUq2yAPfXOPokWbmfycLPden7uUO2d484-NaRZLwkeem0grX.SuFG3SkE9fLzv1kYgtuWJw'
data = decrypt_jwe(jwe, './keys/privateKey.json')
print("Decrypted payload:", data)
