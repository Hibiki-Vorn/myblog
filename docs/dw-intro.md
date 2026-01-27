# Are there many illegal things on the dark web?
![Tor](./img/tor.png)

## Introduction

What's this in your mind?


A black market for illicit transactions, a breeding ground for criminal activities, or a hub for extremist content and terrorism?

This article takes you to explore the real dark web.

## Tor
### What it is
- Initially, the NRL (Naval Research Laboratory) proposed the concept of "onion routing." It is a method to encrypt data with keys and decrypt it as the data passes through each node using its own key.
- In 1998, the NRL published the first prototype of Tor for the American government, military, and research organizations for secure communications.
- In 2002, Roger Dingledine, Nick Mathewson, and other researchers were developing the Tor project and then published the first version of Tor in 2004.
- In 2006, the non-profit organization Tor Project was established.
### How it works

Every domain of a Tor dark website must have 56 characters with the suffix `.onion`. It is different from the normal internet, as the domain is not registered by DNS. When you want to establish a new Tor dark website, Tor will generate a new key pair using the Ed25519 algorithm. It adds a prefix and version information to the public key, then hashes the data with SHA-256 and encodes it with Base32, resulting in a 56-character `.onion` address. Each `.onion` address looks like a list of random characters, not readable words, but we can generate a `.onion` address that begins with readable words using a "Vanity Onion Generator." Its principle is to loop and generate addresses until it meets the requirement, so if you do not have enough computing power, it will be very slow. Every `.onion` domain is saved in the directory authority servers to provide to clients who want to visit Tor dark websites. These directory authority servers are controlled by the Tor Project and are public, so if these are blocked by censorship, some people cannot use Tor. To counter this, Tor's anti-censorship team created something called a "bridge" to allow those people to access the Tor network.


![Web tunnel bridge](./img/webtunnel.png)
<div style="text-align:center;color:grey">Web tunnel bridge</div>


Ordinary people can access the Tor dark web using **Tor Browser**; it is very convenient to use right out of the box.


![Tor Browser](./img/torbrowser.png)
<div style="text-align:center;color:grey">Tor Browser</div>


To access the surface web through a Tor connection, you go through 3 Tor nodes: the first is the guard node, the second is the middle node, and the third is the exit node. To access the Tor dark web, you go through 6 Tor nodes, not directly. Both you and the website each have 3 nodes. This circuit has no exit node; instead, it uses a rendezvous point. Every node encrypts the circuit using TLS 1.3 certificates with the Ed25519 algorithm and exchanges TLS keys when the circuit begins. First, you send a request encrypted by the first node's public key to exchange keys with the first node. Second, you send a request encrypted by the second node's public key to exchange keys with the second node, and this is also encrypted by the first node's key. Third, you get the key of the third node in the same way. The data is encrypted sequentially from the last key to the first key, and then each node decrypts it with its key as it passes through, until the last node, which knows which site you want to visit. It will visit the site for you and return the result by the same route.


![Tor Nodes](./img/tor-nodes.png)
<div style="text-align:center;color:grey">Tor Nodes</div>

## The truth
At this point, you're clever enough to have realized that this process must be too slow, so it is not suitable for watching live streams or downloading large files. It is also not suitable for most ordinary people, so the dark web constitutes merely 7% of the entire internet. There are few crimes on the dark web except for fraud, and the dark web is not a lawless zone.

## The end
This is my first article about the dark web. Thank you for reading. Actually, the dark web is not for the exclusive use of criminals. The value of technology lies in the user's intent.

<Comments/>