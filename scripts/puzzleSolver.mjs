const MAX = {
  easy: 60,
  medium: 110,
  hard: 160,
};

export const solvePuzzle = (
  tiles,
  solution,
  difficulty,
  symbols = null,
  process = []
) => {
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
            if (tiles_copy[i] + tiles_copy[j] <= MAX[difficulty]) {
              new_tiles = [...tiles, tiles_copy[i] + tiles_copy[j]];
              new_tiles[i] = null;
              new_tiles[j] = null;
              new_tiles = new_tiles.filter((element) => element !== null);
              new_process = [
                ...process,
                {
                  tile1: tiles_copy[i],
                  symbol: "+",
                  tile2: tiles_copy[j],
                  tiles: new_tiles,
                },
              ];
              new_symbols = symbols;
              new_symbols["+"] = symbols["+"] - 1;
              solvePuzzle(new_tiles, solution, new_symbols, new_process);
            } else {
              continue;
            }
          } else if (symbols["-"] > 0) {
            if (tiles_copy[i] - tiles_copy[j] >= 0) {
              new_tiles = [...tiles, tiles_copy[i] - tiles_copy[j]];
              new_tiles[i] = null;
              new_tiles[j] = null;
              new_tiles = new_tiles.filter((element) => element !== null);
              new_process = [
                ...process,
                {
                  tile1: tiles_copy[i],
                  symbol: "-",
                  tile2: tiles_copy[j],
                  tiles: new_tiles,
                },
              ];
              new_symbols = symbols;
              new_symbols["-"] = symbols["-"] - 1;
              solvePuzzle(new_tiles, solution, new_symbols, new_process);
            } else {
              continue;
            }
          } else if (symbols["*"] > 0) {
            if (tiles_copy[i] * tiles_copy[j] <= MAX[difficulty]) {
              new_tiles = [...tiles, tiles_copy[i] - tiles_copy[j]];
              new_tiles[i] = null;
              new_tiles[j] = null;
              new_tiles = new_tiles.filter((element) => element !== null);
              new_process = [
                ...process,
                {
                  tile1: tiles_copy[i],
                  symbol: "*",
                  tile2: tiles_copy[j],
                  tiles: new_tiles,
                },
              ];
              new_symbols = symbols;
              new_symbols["*"] = symbols["*"] - 1;
              solvePuzzle(new_tiles, solution, new_symbols, new_process);
            } else {
              continue;
            }
          } else if (symbols["/"] > 0) {
            if (tiles_copy[i] % tiles_copy[j] === 0) {
              new_tiles = [...tiles, tiles_copy[i] - tiles_copy[j]];
              new_tiles[i] = null;
              new_tiles[j] = null;
              new_tiles = new_tiles.filter((element) => element !== null);
              new_process = [
                ...process,
                {
                  tile1: tiles_copy[i],
                  symbol: "/",
                  tile2: tiles_copy[j],
                  tiles: new_tiles,
                },
              ];
              new_symbols = symbols;
              new_symbols["/"] = symbols["/"] - 1;
              solvePuzzle(new_tiles, solution, new_symbols, new_process);
            } else {
              continue;
            }
          }
        }
      }
    }
  }
};

solvePuzzle(tiles=[9,6,9,3], solution=24, difficulty='easy', (symbols = {''}), (process = []));