export const slicePhoneNumber = (number: string) => {
  const spaceIndex = number?.indexOf(" ");

  return spaceIndex !== -1
    ? {
        prefix: number?.slice(0, spaceIndex),
        realNumber: number?.slice(spaceIndex + 1).trim()
      }
    : null;
};
