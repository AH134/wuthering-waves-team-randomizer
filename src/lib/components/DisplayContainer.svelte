<script lang="ts">
    import type { Character } from "../data/characters";
    import EmptyCard from "./EmptyCard.svelte";
    import Card from "./Card.svelte";
    type Props = {
        randomizedCharacters: Character[];
    };

    let { randomizedCharacters }: Props = $props();
</script>

<div class="flex gap-1">
    {#each Array(3) as _, index (index)}
        {#if randomizedCharacters[index]}
            <Card
                {...randomizedCharacters[index] as Character}
                mode="readonly"
                delay={index}
            />
        {:else}
            <EmptyCard delay={index} />
        {/if}
    {/each}
</div>
