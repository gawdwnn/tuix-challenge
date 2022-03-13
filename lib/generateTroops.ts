function randombetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generate(max: number, count = 3) {
  if (max <= 0) {
    throw new Error("value must be greater than zero");
  }
  let r = [];
  let currentSum = 0;
  for (let i = 0; i < count - 1; i++) {
    r[i] = randombetween(1, max - (count - i - 1) - currentSum);
    currentSum += r[i];
  }
  r[count - 1] = max - currentSum;
  return r;
}
