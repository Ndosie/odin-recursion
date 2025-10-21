# Odin Recursion
This project implements three functions two for creating and returning fibonacci numbers using loop and recursion algorithms. The other one sorts items using Merge sorts algorithm.

## Fibonacc Numbers
Is the list of numbers where the last number is the sum of the previous two numbers. i.e 0, 1, 1, 2, 3, 5, 8, 13...

## Merge Sort Algorithm
Is the step by step procedure where a list is sorted by dividing the list recursively into a single item and merge them back into a sorted list.
1. Given a list `[105, 79, 100, 110]`
2. Through recursion the function divides the list into a single item which is considered sorted ie. `[ 105 ], [ 79 ], [ 100 ] and [ 110 ]`.
3. The items are merged back while sorting ie. `[ 79, 105 ] and [ 100, 110 ]` 
4. The merging continues until its fully merged i.e `[ 79, 100, 105, 110 ]`.