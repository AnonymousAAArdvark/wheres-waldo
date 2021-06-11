import { ILevels } from "../types/level-types";
import level_1_img from "../assets/levels/level_1.webp";
import level_2_img from "../assets/levels/level_2.webp";
import level_3_img from "../assets/levels/level_3.webp";
import level_4_img from "../assets/levels/level_4.webp";
import level_5_img from "../assets/levels/level_5.webp";
import level_6_img from "../assets/levels/level_6.webp";
import waldo from "../assets/characters/waldo.webp";
import odlaw from "../assets/characters/odlaw.webp";
import wizard from "../assets/characters/wizard.webp";
import wenda from "../assets/characters/wenda.webp";

class Level {
  image: string;
  name: string;
  characters: string[];
  charImages: string[];
  constructor(characters: Array<string>, charImages: Array<string>, image: string, name: string) {
    this.name = name;
    this.image = image;
    this.characters = characters;
    this.charImages = charImages;
  }
}

const level_1 = new Level(
  ["waldo", "odlaw"],
  [waldo, odlaw],
  level_1_img,
  "Level 1"
);

const level_2 = new Level(
  ["waldo"],
  [waldo],
  level_2_img,
  "Level 2"
);

const level_3 = new Level(
  ["waldo", "odlaw", "wizard"],
  [waldo, odlaw, wizard],
  level_3_img,
  "Level 3");

const level_4 = new Level(
  ["waldo"],
  [waldo],
  level_4_img,
  "Level 4"
);

const level_5 = new Level(
  ["waldo", "odlaw", "wenda", "wizard"],
  [waldo, odlaw, wenda, wizard],
  level_5_img,
  "Level 5"
);

const level_6 = new Level(
  ["waldo", "odlaw", "wenda", "wizard"],
  [waldo, odlaw, wenda, wizard],
  level_6_img,
  "Level 6"
);

export const levels: { [key: string]: ILevels } = {
  level_1,
  level_2,
  level_3,
  level_4,
  level_5,
  level_6,
};