# Leviathan & PoW

## **What is *Leviathan*?**

*Leviathan* is a work by Thomas Hobbes that uses the Biblical sea monster **Leviathan** as a metaphor for a sovereign authority with immense, unchallengeable power. In Hobbes’s political theory, humans in the **state of nature** live in a “war of every person against every person,” where life is insecure and chaotic. To escape this, individuals **collectively give up some of their freedoms and establish a sovereign authority (the Leviathan) to maintain peace and social order**. The Leviathan thus symbolizes a political power that enforces rules and ensures security.

Hobbes assumes that **anarchy—without any governing authority—ultimately leads people to create a government through a social contract**.

## **What is PoW (Proof‑of‑Work) Mining and Mining Pool?**

### **Proof‑of‑Work (PoW) Mining**

#### **Definition**

Proof of Work (PoW) is a consensus mechanism in blockchain systems. It requires miners to perform computational work to solve cryptographic puzzles in order to validate transactions and propose new blocks. PoW was originally designed (e.g., in Hashcash) to prove that computational effort has been expended, preventing abuses like spam or denial‑of‑service attacks.

In cryptocurrencies like Bitcoin, miners compete to find a hash value that satisfies the network’s difficulty target. The first miner to find such a hash gets to add a block to the blockchain and collect the associated reward.

#### **How It Works**

1. Miners bundle pending transactions into a candidate block.
2. They repeatedly compute the cryptographic hash of the block header, adjusting a parameter called a nonce.
3. Their goal is to find a hash less than the network’s current target value.
4. The first miner to find such a hash broadcasts the valid block to the network and earns block rewards and fees.

This process is commonly called *mining*.

### **Mining Pools**

#### **Why Mining Pools Appear**

As PoW difficulty increases, the chance for an individual miner to find a block becomes extremely low. To reduce income uncertainty, miners form **mining pools**, where they combine their computing power and share rewards proportionally based on contributed effort.

In a pool:

* The pool operator creates block templates (candidate blocks) for the entire group.
* Each miner contributes hashing power to work on parts of the search space and submits “shares,” which are partial proofs that show they’re contributing work.
* When the pool finds a valid solution, the reward is shared among miners based on their submitted shares.

This makes payouts more predictable and smoother than solo mining, where rewards can be very rare. 

#### **Result: Some Control Moves to the Pool**

In pooled mining:

* The pool decides the candidate block’s content (which transactions are included).
* Miners mainly provide computational work and contribute shares.
* The pool operator manages task assignment, accounting, and reward distribution.

Because mining pools can control a large fraction of total hash power, there is an ongoing concern that **if a pool ever controlled more than 50 % of the network’s computing power, it could attempt to censor transactions or manipulate block production**—a theoretical “51 % attack.”

## **Analogy**

You wrote:

> “Mining pools in Proof‑of‑Work systems can be seen as a kind of ‘technical Leviathan’ that emerges from competition among miners to stabilize rewards and reduce uncertainty.”

This is a **good metaphor**: just as Hobbes’s Leviathan emerges from the chaos of anarchy to enforce order, mining pools emerge from the chaotic competition of independent miners to provide more predictable rewards and coordinated effort.

You also included:

> “PoW tends to create its own Leviathan.”

This reflects a common observation in blockchain economics: **PoW incentivizes the formation of mining pools, which centralizes some operational authority even though the protocol itself is decentralized by design.** 

<Comments/>