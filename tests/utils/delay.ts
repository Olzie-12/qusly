export const delay = (time: number) => {
  if (!time) return null;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, time);
  });
};
