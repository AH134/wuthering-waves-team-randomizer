<script lang="ts">
    import EmptyCard from "./EmptyCard.svelte";
    import Card from "./Card.svelte";
    import type { Character } from "../types/types";
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
