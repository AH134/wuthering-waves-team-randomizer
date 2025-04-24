<script lang="ts">
    import EmptyCard from "./EmptyCard.svelte";
    import Card from "./Card.svelte";
    import type { SelectedCharacter } from "../stores/characters.svelte";
    type Props = {
        randomizedCharacters: SelectedCharacter[];
    };

    let { randomizedCharacters }: Props = $props();
</script>

<div class="flex gap-1">
    {#each Array(3) as _, index (index)}
        {#if randomizedCharacters[index]}
            <Card
                {...randomizedCharacters[index]}
                mode="readonly"
                delay={index}
            />
        {:else}
            <EmptyCard delay={index} />
        {/if}
    {/each}
</div>
