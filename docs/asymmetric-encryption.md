# Asymmetric encryption

## What is Asymmetric encryption?
Imagine a scenario where you want to mail a confidential document to your friend and prevent the postman from stealing it. You must lock it, but how can your friend unlock it? Do you want to mail a key to him after he receives the locked document? But then, how do you keep the key safe? Someone proposed an ingenious solution: after your friend receives it, he can use his own lock to secure it again and mail it back to you. After you receive it, you unlock your lock with your key and mail it to him again. Finally, he uses his key to unlock his lock and then he can read it.

But in the cyber world, the lock and key are the same thing. So we need asymmetric encryption. There is a key pair consisting of a public key and a private key. Use the public key to encrypt and the private key to decrypt.

## Algorithms
### RSA
#### Steps
- Generation
   1. Pick 2 very large prime numbers randomly as $p$ and $q$. 
   2. Multiply them to get $n$.
  3. Calculate Euler function $\phi(n)$
     - $\phi(n) = (p-1)(q-1)$
  4. Select an exponent $e$ for encryption
     - $1<e<\phi(n)$ 
     - $e$ and $\phi(n)$ are coprime.
  5. Calculate an exponent $d$ for decryption
     - $d \cdot e \equiv 1 \pmod{\phi(n)} \Rightarrow d = e^{-1} \mod \phi(n)$ 
  6. Generated
     - Public Key $(n,e)$
     - Private Key $(n,d)$
- Encryption & Decryption
  1. Encryption
     - Message $m$ must be $<n$
     - Cipher $c=m^e \mod n$
  2. Decryption
     - Cipher $c$
     - Message $m=c^d \mod n$

<Comments/>