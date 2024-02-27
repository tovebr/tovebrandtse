export const upperCasedFirstChar = (word: string) => {
  return word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
};

export const upperCasedSentence = (sentence: string) => {
  return sentence
    .split(' ')
    .map((word) => upperCasedFirstChar(word))
    .join(' ');
};
