import { characters } from "../data/characters";
import type { Character } from "../types/types";
import { LOCAL_SELECTED_CHAR_KEY } from "../utils/const";
import {
    getAttributeImage,
    getCharacterImage,
    getWeaponImage,
} from "../utils/imageLoader";
import { getLocalData, setLocalData } from "../utils/local";

export type CharacterCard = Character & {
    charSrc: string;
    attributeSrc: string;
    weaponSrc: string;
};

const createCharCardData = (): CharacterCard[] => {
    return characters.map((c) => ({
        ...c,
        charSrc: getCharacterImage(c.slug),
        attributeSrc: getAttributeImage(c.attribute[0]),
        weaponSrc: getWeaponImage(c.weapon),
    }));
};

class CharacterManager {
    value = $state<CharacterCard[]>([]);

    isAllSelected = $derived(!this.value.some((c) => !c.selected));
    selectedIds = $derived(
        this.value.filter((c) => c.selected).map((c) => c.id),
    );

    constructor() {
        this.value = createCharCardData();

        const localSelectedIds = getLocalData<number[]>(
            LOCAL_SELECTED_CHAR_KEY,
        );
        if (localSelectedIds) {
            const idSet = new Set(localSelectedIds);
            this.value = this.value.map((c) => ({
                ...c,
                selected: idSet.has(c.id),
            }));
        }
    }

    toggleAll = () => {
        this.value = this.value.map((c) => ({
            ...c,
            selected: !this.isAllSelected,
        }));
        this.saveToLocal();
    };

    saveToLocal = () => {
        setLocalData(LOCAL_SELECTED_CHAR_KEY, this.selectedIds);
    };
}

export const selectedCharacters = new CharacterManager();
