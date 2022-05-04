import { isPrime } from "../src/prime";

describe("Prime", () => {
  test("3 is prime number", () => {
    expect(isPrime(3)).toBe(true);
  });
});
