# <div align = center>Sieve of Eratosthenes </div>

## What the hack it is?

 The sieve of Eratosthenes is one of the most efficient ways to find all primes smaller than n when n is smaller than 10 million.

## Pre-Requisites

> Basic knowledge of Prime numbers.

## Explanation

<img src="https://iq.opengenus.org/content/images/2018/06/Sieve_of_Eratosthenes_animation.gif" width=500px alt="represent"></img>


## Pseudo code

```
find primes up to N
For all numbers a : from 2 to sqrt(n)
     IF a is unmarked THEN
         a is prime
         For all multiples of a (a < n)
             mark multiples of as composite
All unmarked nummbers are prime!
```
## Example

```

 2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
 
 The first number in the list is 2; 
 Cross out every 2nd number in the list after 2 by counting up from 2 in increments of 2
 
 2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
 
 The first number in the list after 2 is 3; 
 Cross out every 3rd number in the list after 3 by counting up from 3 in increments of 3
 
 2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20
 
 The first number in the list after 3 is 5; 
 Cross out every 5th number in the list after 5 by counting up from 5 in increments of 5
 
 2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20

All numbers not crossed out are prime numbers. 
We went upto 5 as the celing of square root of 20 is 5.

Prime numbers from 2 to 20 are: 

2  3     5     7          11    13          17    19   
```
## External content

[Understand in 10 min Video](https://www.youtube.com/watch?v=eKp56OLhoQs)

---