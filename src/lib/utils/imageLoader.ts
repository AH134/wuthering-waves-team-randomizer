const enum ImagePath {
    CHARACTERS = "/src/lib/images/characters/*.webp",
    WEAPONS = "/src/lib/images/weapons/*.webp",
    ATTRIBUTES = "/src/lib/images/attributes/*.webp",
}

const characterImages = import.meta.glob<{ default: string }>(
    ImagePath.CHARACTERS,
    { eager: true },
);
const weaponImages = import.meta.glob<{ default: string }>(ImagePath.WEAPONS, {
    eager: true,
});
const attributeImages = import.meta.glob<{ default: string }>(
    ImagePath.ATTRIBUTES,
    {
        eager: true,
    },
);

const createImageMap = (
    imageModules: Record<string, any>,
): Record<string, string> => {
    return Object.fromEntries(
        Object.entries(imageModules).map(([path, module]) => {
            const id = path.split("/").pop()?.replace(".webp", "") || "";
            return [id, module.default];
        }),
    );
};

const characterImageMap = createImageMap(characterImages);
const attributeImageMap = createImageMap(attributeImages);
const weaponImageMap = createImageMap(weaponImages);

export const getCharacterImage = (id: string): string => {
    return characterImageMap[id] || "";
};

export const getWeaponImage = (weapon: string): string => {
    return weaponImageMap[weapon] || "";
};

export const getAttributeImage = (attribute: string): string => {
    return attributeImageMap[attribute] || "";
};
