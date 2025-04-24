<script lang="ts">
    import Card from "./lib/components/Card.svelte";
    import DisplayContainer from "./lib/components/DisplayContainer.svelte";
    import {
        selectedCharacters,
        type SelectedCharacter,
    } from "./lib/stores/characters.svelte";
    import { shuffle } from "./lib/utils/shuffle";
    import { MAX_RANDOMIZED_CHARACTERS } from "./lib/utils/const";

    let randomizedCharacters: SelectedCharacter[] = $state([]);

    const generateRandomizedCharacters = () => {
        randomizedCharacters = [];
        const selectableCharacters = selectedCharacters.value.filter(
            (character) => character.selected,
        );

        if (selectableCharacters.length <= 0) {
            return;
        }

        const length = Math.min(
            selectableCharacters.length,
            MAX_RANDOMIZED_CHARACTERS,
        );

        randomizedCharacters = shuffle(selectableCharacters, length);
    };
</script>

<main class="p-2">
    <div class="mb-8 text-center">
        <a
            class="text-sm text-zinc-300 hover:text-zinc-200 md:text-base"
            href="https://github.com/ah134/wuwa-randomizer"
            target="_blank">Github Repository</a
        >

        <h1 class="text-xl text-zinc-100 md:text-3xl">
            Wuthering Waves Randomizer
        </h1>
    </div>
    <div class="flex flex-wrap justify-center gap-3 align-middle">
        {#key randomizedCharacters}
            {#each [0, 3, 6] as start (start)}
                <DisplayContainer
                    randomizedCharacters={randomizedCharacters.slice(
                        start,
                        start + 3,
                    )}
                />
            {/each}
        {/key}
    </div>
    <div class="mt-4 mb-10 flex flex-wrap justify-center gap-2 sm:grid-cols-3">
        <button
            class="h-12 w-28 cursor-pointer rounded-md border-2 border-zinc-800 p-1 hover:bg-zinc-700/20"
            onclick={selectedCharacters.toggleAll}
            >{selectedCharacters.isAllSelected
                ? "Deselect all"
                : "Select all"}</button
        >
        <button
            class="h-12 w-38 cursor-pointer rounded-tl-md rounded-br-md bg-zinc-100 p-1 text-zinc-900 hover:bg-white"
            onclick={generateRandomizedCharacters}>Generate teams</button
        >
        <button
            class="h-12 w-28 cursor-pointer rounded-md border-2 border-zinc-800 p-1 hover:bg-zinc-700/20"
            onclick={() => {
                randomizedCharacters = [];
                if (!selectedCharacters.isAllSelected) {
                    selectedCharacters.toggleAll();
                }
            }}>Reset</button
        >
    </div>

    <div></div>
    <div class="inline-flex flex-wrap justify-center gap-2">
        {#each selectedCharacters.value as char (char.id)}
            <Card
                {...char}
                mode="interactive"
                selected={char.selected}
                onclick={() => (char.selected = !char.selected)}
            />
        {/each}
    </div>
</main>
