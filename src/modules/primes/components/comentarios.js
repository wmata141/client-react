import React from 'react';

const Comentarios = () => {
    return (
        <div>
            <h1>Primes</h1>
            <h4>
                Write a function named printNPrimes, that takes an int representing the
                amount of prime numbers to print. For example: printNPrimers with the
                parameter 5 will print:
            </h4>
            <h4>2 3 5 7 11</h4>
            <h4>
                ● Propose how would you refactor your implementation to work when
                receiving a long parameter with value MAX_LONG: 2^63 - 1. You don’t have to
                implement it.                
            </h4>            
            <h2>const n = Math.pow(a, b); a^b</h2>
            <h4>Using two input to add the values "a" and "b" only to calculate "n" whole of rest is the same</h4>
        </div>
    )
}

export default Comentarios 