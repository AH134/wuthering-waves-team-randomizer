<script lang="ts">
    import type { Character } from "../data/characters";
    import DisplayCard from "./DisplayCard.svelte";
    import EmptyCard from "./EmptyCard.svelte";
    import {
        getCharacterImage,
        getWeaponImage,
        getAttributeImage,
    } from "../utils/imageLoader";
    type Props = {
        randomizedCharacters: Character[];
    };

    let { randomizedCharacters }: Props = $props();
</script>

<div class="flex gap-1">
    {#each Array(3) as _, index (index)}
        {#if randomizedCharacters[index]}
            <DisplayCard
                {...randomizedCharacters[index] as Character}
                characterSrc={getCharacterImage(randomizedCharacters[index].id)}
                weaponSrc={getWeaponImage(randomizedCharacters[index].weapon)}
                attributeSrc={getAttributeImage(
                    randomizedCharacters[index].attribute[0],
                )}
                delay={index}
            />
        {:else}
            <EmptyCard delay={index} />
        {/if}
    {/each}
</div>
