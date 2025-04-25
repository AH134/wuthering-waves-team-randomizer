import type { Attribute, Gender, Rarity, Weapon } from "../types/types";

export const MAX_RANDOMIZED_CHARACTERS = 9;

export const weaponNames: Weapon[] = [
    "broadblade",
    "gauntlet",
    "sword",
    "pistol",
    "rectifier",
];

export const attributeNames: Attribute[] = [
    "fusion",
    "glacio",
    "aero",
    "electro",
    "spectro",
    "havoc",
];

export const rarity: Rarity[] = [4, 5];

export const genders: Gender[] = ["male", "female"];
