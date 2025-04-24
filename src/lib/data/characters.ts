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
    id: string;
    displayName: string;
    weapon: Weapon;
    rarity: Rarity;
    attribute: Attribute[];
    gender: Gender[];
};

export const characters: Character[] = [
    {
        id: "aalto",
        displayName: "Aalto",
        weapon: "pistol",
        rarity: 4,
        attribute: ["aero"],
        gender: ["male"],
    },
    {
        id: "baizhi",
        displayName: "Baizhi",
        weapon: "rectifier",
        rarity: 4,
        attribute: ["glacio"],
        gender: ["female"],
    },
    {
        id: "brant",
        displayName: "Brant",
        weapon: "sword",
        rarity: 5,
        attribute: ["fusion"],
        gender: ["male"],
    },
    {
        id: "calcharo",
        displayName: "Calcharo",
        weapon: "broadblade",
        rarity: 5,
        attribute: ["electro"],
        gender: ["male"],
    },
    {
        id: "camellya",
        displayName: "Camellya",
        weapon: "sword",
        rarity: 5,
        attribute: ["havoc"],
        gender: ["female"],
    },
    {
        id: "cantarella",
        displayName: "Cantarella",
        weapon: "rectifier",
        rarity: 5,
        attribute: ["havoc"],
        gender: ["female"],
    },
    {
        id: "carlotta",
        displayName: "Carlotta",
        weapon: "pistol",
        rarity: 5,
        attribute: ["glacio"],
        gender: ["female"],
    },
    {
        id: "changli",
        displayName: "Changli",
        weapon: "sword",
        rarity: 5,
        attribute: ["fusion"],
        gender: ["female"],
    },
    {
        id: "chixia",
        displayName: "Chixia",
        weapon: "pistol",
        rarity: 4,
        attribute: ["fusion"],
        gender: ["female"],
    },
    {
        id: "ciaccona",
        displayName: "Ciaccona",
        weapon: "pistol",
        rarity: 5,
        attribute: ["aero"],
        gender: ["female"],
    },
    {
        id: "danjin",
        displayName: "danjin",
        weapon: "sword",
        rarity: 4,
        attribute: ["havoc"],
        gender: ["female"],
    },
    {
        id: "encore",
        displayName: "Encore",
        weapon: "rectifier",
        rarity: 5,
        attribute: ["fusion"],
        gender: ["female"],
    },
    {
        id: "jianxin",
        displayName: "Jianxin",
        weapon: "gauntlet",
        rarity: 5,
        attribute: ["aero"],
        gender: ["female"],
    },
    {
        id: "jinhsi",
        displayName: "Jinhsi",
        weapon: "broadblade",
        rarity: 5,
        attribute: ["spectro"],
        gender: ["female"],
    },
    {
        id: "jiyan",
        displayName: "Jiyan",
        weapon: "broadblade",
        rarity: 5,
        attribute: ["aero"],
        gender: ["male"],
    },
    {
        id: "lingyang",
        displayName: "Lingyan",
        weapon: "gauntlet",
        rarity: 5,
        attribute: ["glacio"],
        gender: ["male"],
    },
    {
        id: "lumi",
        displayName: "Lumi",
        weapon: "broadblade",
        rarity: 4,
        attribute: ["electro"],
        gender: ["female"],
    },
    {
        id: "mortefi",
        displayName: "Mortefi",
        weapon: "pistol",
        rarity: 4,
        attribute: ["fusion"],
        gender: ["male"],
    },
    {
        id: "phoebe",
        displayName: "Phoebe",
        weapon: "rectifier",
        rarity: 5,
        attribute: ["spectro"],
        gender: ["female"],
    },
    {
        id: "roccia",
        displayName: "Roccia",
        weapon: "gauntlet",
        rarity: 5,
        attribute: ["havoc"],
        gender: ["female"],
    },
    {
        id: "rover",
        displayName: "Rover Aero",
        weapon: "sword",
        rarity: 5,
        attribute: ["aero"],
        gender: ["female", "male"],
    },
    {
        id: "rover",
        displayName: "Rover Havoc",
        weapon: "sword",
        rarity: 5,
        attribute: ["havoc"],
        gender: ["female", "male"],
    },
    {
        id: "rover",
        displayName: "Rover Spectro",
        weapon: "sword",
        rarity: 5,
        attribute: ["spectro"],
        gender: ["female", "male"],
    },
    {
        id: "sanhua",
        displayName: "Sanhua",
        weapon: "sword",
        rarity: 4,
        attribute: ["glacio"],
        gender: ["female"],
    },
    {
        id: "shorekeeper",
        displayName: "Shorekeeper",
        weapon: "rectifier",
        rarity: 5,
        attribute: ["spectro"],
        gender: ["female"],
    },
    {
        id: "taoqi",
        displayName: "Taoqi",
        weapon: "broadblade",
        rarity: 4,
        attribute: ["havoc"],
        gender: ["female"],
    },
    {
        id: "verina",
        displayName: "Verina",
        weapon: "rectifier",
        rarity: 5,
        attribute: ["spectro"],
        gender: ["female"],
    },
    {
        id: "xiangli-yao",
        displayName: "Xiangli Yao",
        weapon: "gauntlet",
        rarity: 5,
        attribute: ["electro"],
        gender: ["male"],
    },
    {
        id: "yangyang",
        displayName: "Yangyang",
        weapon: "sword",
        rarity: 4,
        attribute: ["aero"],
        gender: ["female"],
    },
    {
        id: "yinlin",
        displayName: "Yinlin",
        weapon: "rectifier",
        rarity: 5,
        attribute: ["electro"],
        gender: ["female"],
    },
    {
        id: "youhu",
        displayName: "Youhu",
        weapon: "gauntlet",
        rarity: 4,
        attribute: ["glacio"],
        gender: ["female"],
    },
    {
        id: "yuanwu",
        displayName: "Yuanwu",
        weapon: "gauntlet",
        rarity: 4,
        attribute: ["electro"],
        gender: ["male"],
    },
    {
        id: "zani",
        displayName: "Zani",
        weapon: "gauntlet",
        rarity: 5,
        attribute: ["spectro"],
        gender: ["female"],
    },
    {
        id: "zhezhi",
        displayName: "Zhezhi",
        weapon: "rectifier",
        rarity: 5,
        attribute: ["glacio"],
        gender: ["female"],
    },
];
