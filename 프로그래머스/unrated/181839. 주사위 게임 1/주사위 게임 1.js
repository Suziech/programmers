const solution =(a,b) => 
(a%2 && b%2) ? a**2 + b**2
: (a+b)%2 ? 2*(a+b)
: !(a%2) && !(b%2) ? Math.abs(a-b) : null