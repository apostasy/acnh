export function intArraysEqual(a: number[], b: number[]) {
  if (a === b) {
    return true;
  }
  if (a == null || b == null) {
    return false;
  }
  if (a.length !== b.length) {
    return false;
  }

  const aClone = a.slice(0);
  const bClone = b.slice(0);
  aClone.sort(intArraySort);
  bClone.sort(intArraySort);

  for (let i = 0; i < a.length; ++i) {
    if (aClone[i] !== bClone[i]) {
      return false;
    }
  }
  return true;
}

function intArraySort(a: number, b: number) {
  return a - b;
}
