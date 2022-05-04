// n should be a integer
export function isPrime(n: number) {
  if (n <= 3) {
    return n > 1;
  }
  // prime factory: 2,3
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  // max prime length is 9: (2,3,)5,7,11,13,17,19,23
  for (let i = 5; i * i < n; i++) {
    // should not be divisible by prime factors
    if (n % i == 0 || n % (i + 1) == 0) {
      return false;
    }
  }
  return true;
}
