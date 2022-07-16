export const shuffleArray = (array) => {
  for (let i = 0; i < array?.length; i++) {
    let random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
  return array;
};
