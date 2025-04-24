export type Weapon =
    | "broadblade"
    | "gauntlet"
    | "sword"
    | "pistol"
    | "rectifier";

export type Rarity = 4 | 5;

export type Attribute =
    | "fusion"
    | "glacio"
    | "aero"
    | "electro"
    | "spectro"
    | "havoc";

export type Gender = "male" | "female";

export type Character = {
    id: number;
    slug: string;
    displayName: string;
    weapon: Weapon;
    rarity: Rarity;
    attribute: Attribute[];
    gender: Gender[];
    selected: boolean;
};
