import React from 'react';

const Comentarios = () => {
    return (
        <div>
            <h1>Spiral</h1>
            <h4>Write a function named printMatrix, that takes an array of integers representing a 2d
                square matrix and the number of elements on each side as parameters. This function
                should start at the upper left hand corner of the matrix and print each element in a
                counterclockwise spiral.
                Example: The 3x3 matrix:
            </h4>
            <h3>|1 8 7|</h3>
            <h3>|2 9 6|</h3>
            <h3>|3 4 5|</h3>
            <h4>Is represented by the array m, and the size n:</h4>
            <h3>m = [1, 8, 7, 2, 9, 6, 3, 4, 5]</h3>
            <h3>n=3</h3>
            <h3>1 2 3 4 5 6 7 8 9</h3>
            <h4>Valid values for the elements of m and n are:</h4>
            <h3>{`0 <= a ∈ m <= 2^31-1`}</h3>
            <h3>{`1 <= n <= 2^15  `}</h3>
        </div>
    )
}

export default Comentarios 