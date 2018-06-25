//classic towers of hanoi problem
//move from first tower to last using stacks

/*
Move x-1 discs from peg A to peg B, using peg C as the aux peg.
Move the x'th disc from peg A to peg C (no aux peg needed, cause you're only moving one disc).
Move the x-1 discs from peg B to peg C, using peg A as the aux peg.

towerRecursion(depth, start, dest, aux) 
//in between each step, you're moving n to dest
towerRecursion(5, A, C, B)    ->    towerRecursion(5, C, B, A)
towerRecursion(4, A, B, C)    ->    towerRecursion(4, B, C, A)
towerRecurions(3, A, C, B)    ->    towerRecursion(3, C, B, A)
towerRecuriosn(2, A. B. C)    ->    towerRecursion(2, B, C, A)
towerRecursion(1, A, C. B)    ->    towerRecursion(1, C, B, A)
*/


