<script lang="ts">
    import { characters, type Character } from "./lib/data/characters";
    import Card from "./lib/components/Card.svelte";
    import DisplayContainer from "./lib/components/DisplayContainer.svelte";

    const MAX_RANDOMIZED_CHARACTERS = 9;
    type FilteredCharacter = Character & { selected: boolean };

    let filteredCharacters: FilteredCharacter[] = $state(
        characters.map((character) => {
            return { ...character, selected: true };
        }),
    );

    let randomizedCharacters: FilteredCharacter[] = $state([]);
    let isAllSelected = $derived(
        !filteredCharacters
            .map((character) => character.selected)
            .includes(false),
    );

    const generateRandomizedCharacters = () => {
        randomizedCharacters = [];
        const selectableCharacters = filteredCharacters.filter(
            (character) => character.selected,
        );

        if (selectableCharacters.length <= 0) {
            return;
        }

        const length = Math.min(
            selectableCharacters.length,
            MAX_RANDOMIZED_CHARACTERS,
        );

        const shuffled = [...selectableCharacters];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[random]] = [shuffled[random], shuffled[i]];
        }

        const randomCharacters = shuffled.slice(0, length);
        randomizedCharacters = randomCharacters;
    };
</script>

<main class="p-2">
    <div class="mb-8 text-center">
        <a
            class="text-sm text-zinc-300 hover:text-zinc-50 md:text-base"
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
                    ) as Character[]}
                />
            {/each}
        {/key}
    </div>
    <div class="mt-4 mb-10 flex flex-wrap justify-center gap-2 sm:grid-cols-3">
        <button
            class="h-12 w-28 cursor-pointer rounded-md border-2 border-zinc-800 p-1 hover:bg-zinc-700/20"
            onclick={() => {
                filteredCharacters = filteredCharacters.map((character) => {
                    return { ...character, selected: !isAllSelected };
                });
            }}>{isAllSelected ? "Deselect all" : "Select all"}</button
        >
        <button
            class="h-12 w-38 cursor-pointer rounded-tl-md rounded-br-md bg-zinc-100 p-1 text-zinc-900 transition-all hover:bg-white"
            onclick={generateRandomizedCharacters}>Generate teams</button
        >
        <button
            class="h-12 w-28 cursor-pointer rounded-md border-2 border-zinc-800 p-1 hover:bg-zinc-700/20"
            onclick={() => {
                filteredCharacters = filteredCharacters.map((character) => {
                    return { ...character, selected: true };
                });
                randomizedCharacters = [];
            }}>Reset</button
        >
    </div>
    <div class="inline-flex flex-wrap justify-center gap-2">
        {#each filteredCharacters as char (char.displayName)}
            <Card
                {...char}
                mode="interactive"
                selected={char.selected}
                onclick={() => (char.selected = !char.selected)}
            />
        {/each}
    </div>
</main>
