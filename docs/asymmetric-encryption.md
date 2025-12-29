# Asymmetric encryption

## What is Asymmetric encryption?
Imagine a senary that you want to mail a confidential document to your friend and avoid the postman steal it so you must lock it but how your friend unlock it. Do you want to mail a key to him after he received locked document? But than how do you keep the key safe? Somebody proposed an awesome way. He said after your friend received it, he can use his own key lock it again and mail it back to you and after you received it, you unlock your lock by your key and mail to him again. Finally he use his key to unlock his lock and then he can read it.

But in the cyber world. The lock and key are a same thing. So we need asymmetric encryption. There is a key pair consisting of a public key and a private key. Use public key to encrypt and use private key to decrypt.

## Algorithms
### RSA
#### Steps
- Generation
  1. Pick 2 very big prime number randomly as $p$ and $q$. 
  2. Product them as $n$.
  3. Calculate Euler function $\phi(n)$
     - $\phi(n) = (p-1)(q-1)$
  4. Select a exponentiation $e$ for encryption
     - $1<e<\phi(n)$ 
     - $e$ and $\phi(n)$ are coprime.
  5. Calculate a exponentiation $e$ for decryption
     - $d \cdot e \equiv 1 \pmod{\phi(n)} \Rightarrow d = e^{-1} \mod \phi(n)$ 
  6. Generated
     - Public Key$(n,e)$
     - Private Key$(n,d)$
- Encryption & Decryption
  1. Encryption
     - Message $m$ must $<n$
     - Cipher $c=m^e \mod n$
  2. Decryption
     - Cipher $c$
     - Message $m=c^d \mod n$

<Comments/>