export const solvePuzzle = (tiles, solution, symbols = null, process = []) => {
  if (tiles.length === 1 && tiles[0] === solution) {
    return process;
  }

  for (let i = 0; i < tiles.length; i++) {
    for (let j = 0; i < tiles.length; j++) {
      if (i !== j) {
        let tiles_copy = tiles.slice(0, tiles.length);
        tiles.splice(i, 1);
        tiles.splice(j, 1);
        if (symbols !== null) {
          if (symbols["+"] > 0) {
            new_process = [
              ...process,
              {
                tile1: tiles_copy[i],
                symbol: "+",
                tile2: tiles_copy[j],
                tiles: [...tiles, tiles_copy[i] + tiles_copy[j]],
              },
            ];
            new_symbols = symbols;
            new_symbols["+"] = symbols["+"] - 1;
            solvePuzzle(
              [...tiles, tiles_copy[i] + tiles_copy[j]],
              solution,
              new_symbols,
              new_process
            );
          }
        }
      }
    }
  }
};
