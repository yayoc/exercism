export default class Hamming {
  compute(a, b) {
    if (a.length !== b.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    const splitString = s => s.split('');
    const arrA = splitString(a);
    const arrB = splitString(b);

    return arrA.reduce((acc, v, i) => {
      if (v !== arrB[i]) acc += 1;
      return acc;
    }, 0);
  }
}
