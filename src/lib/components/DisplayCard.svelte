<script lang="ts">
    import type { Character } from "../data/characters";
    import { fly } from "svelte/transition";
    type Props = Character & {
        characterSrc: string;
        weaponSrc: string;
        attributeSrc: string;
        delay: number;
    };
    let props: Props = $props();
</script>

<div
    class="group relative w-24 rounded border-2 border-zinc-800 bg-zinc-900 transition-all sm:w-32"
    in:fly|global={{
        delay: (props.delay + 1) * 50,
        x: -200,
    }}
>
    <div class="relative overflow-clip">
        <div class="absolute aspect-square">
            <img
                class="w-8"
                src={props.attributeSrc}
                alt={props.attribute[0]}
            />
        </div>
        <div class="aspect-square">
            <img src={props.characterSrc} alt={props.displayName} />
        </div>
        <div class="absolute bottom-0 w-full">
            <div class="relative flex w-full items-center">
                <div class="absolute -bottom-2 mt-auto h-4 w-full">
                    <div
                        class="absolute bottom-0 h-4 w-full {props.rarity == 5
                            ? 'bg-yellow-500'
                            : 'bg-purple-500'} blur transition-all duration-200 group-hover:h-5"
                    ></div>
                    <div
                        class="absolute bottom-0 h-2 w-full {props.rarity == 5
                            ? 'bg-yellow-200'
                            : 'bg-purple-200'} blur-sm duration-200 group-hover:h-3"
                    ></div>
                </div>
            </div>
            <div
                class="h-0.5 {props.rarity == 5
                    ? 'bg-yellow-200'
                    : 'bg-purple-200'}"
            ></div>
        </div>
    </div>
    <div class="flex items-center justify-between overflow-hidden p-1">
        <p class="truncate text-xs sm:text-sm">
            {props.displayName}
        </p>
        <img
            class="h-4 w-4 sm:h-5 sm:w-5"
            src={props.weaponSrc}
            alt={props.weapon}
        />
    </div>
</div>
