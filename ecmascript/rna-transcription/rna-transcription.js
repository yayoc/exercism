export default class Transcriptor {
  toRna(dna) {
    const mapping = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U',
    };
    return Array.from(dna).reduce((acc, c) => {
      if (!mapping.hasOwnProperty(c)) throw new Error('Invalid input DNA.');
      return acc += mapping[c];
    }, '');
  }
}
