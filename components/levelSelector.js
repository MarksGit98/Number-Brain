import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { easyPuzzles } from "./puzzles/easyPuzzles";
import { mediumPuzzles } from "./puzzles/mediumPuzzles";
import { hardPuzzles } from "./puzzles/hardPuzzles";
import { difficultySelector, levelSelector } from "./selectors/stateSelectors";

export const LevelSelector = () => {
  const dispatch = useDispatch();
  const difficulty = useSelector(difficultySelector);
  const currentLevel = useSelector(levelSelector);
  const selectedPuzzles;
  difficulty === "easy" ? selectedPuzzles = easyPuzzles :
  difficulty === "medium" ? selectedPuzzles = mediumPuzzles :
  difficulty === "hard" ? selectedPuzzles = hardPuzzles : null
 
  return (
    {Object.keys(selectedPuzzles).map((level) =>  <TouchableWithoutFeedback
            onPress={() =>
              dispatch({ type: SELECT_LEVEL, payload: level })
            }
          >
            <Text
              style={[
                styles.smallWhiteText,
                currentLevel === level
                  ? styles.difficultyOption
                  : null,
              ]}
            >
              {difficulty}
            </Text>
          </TouchableWithoutFeedback>)
  )
};
