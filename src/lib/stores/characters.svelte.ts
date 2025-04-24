import { characters } from "../data/characters";

class SelectedCharacters {
    value = $state(characters);
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
