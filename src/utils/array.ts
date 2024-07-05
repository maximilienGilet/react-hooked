/**
 * Splits an array into chunks of a given size.
 * @param {T[]} arr The array to split.
 * @param {number} size The size of each chunk.
 * @returns {T[][]} An array of chunks.
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
    arr.slice(i * size, i * size + size),
  );
}
