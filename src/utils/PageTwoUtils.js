export const createFibonacciSequence = (length) => {
  const fibonacciSequence = [];

  for (let i = 0; i <= length; i++) {
    if (i === 0) {
      fibonacciSequence.push({ xIndex: i, fibValue: i });
    } else if (i === 1) {
      fibonacciSequence.push({ xIndex: i, fibValue: i });
    } else {
      fibonacciSequence.push({
        xIndex: i,
        fibValue:
          fibonacciSequence[i - 2].fibValue + fibonacciSequence[i - 1].fibValue,
      });
    }
  }

  return fibonacciSequence;
};
