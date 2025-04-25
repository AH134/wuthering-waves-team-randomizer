import { characters } from "../data/characters";
import type { Character } from "../types/types";
import {
    getAttributeImage,
    getCharacterImage,
    getWeaponImage,
} from "../utils/imageLoader";

export type SelectedCharacter = Character & {
    charSrc: string;
    attributeSrc: string;
    weaponSrc: string;
};
class SelectedCharacters {
    value = $state(
        characters.map((c) => ({
            ...c,
            charSrc: getCharacterImage(c.slug),
            attributeSrc: getAttributeImage(c.attribute[0]),
            weaponSrc: getWeaponImage(c.weapon),
        })),
    );
    isAllSelected = $derived(
        !this.value.map((c) => c.selected).includes(false),
    );

    toggleAll = () => {
        this.value = this.value.map((c) => ({
            ...c,
            selected: !this.isAllSelected,
        }));
    };
}

export const selectedCharacters = new SelectedCharacters();
