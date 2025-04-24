<script lang="ts">
    import type { Character } from "../data/characters";
    import {
        getCharacterImage,
        getWeaponImage,
        getAttributeImage,
    } from "../utils/imageLoader";

    type Props = Character & {
        selected: boolean;
        onclick: () => void;
    };
    let props: Props = $props();
</script>

<button
    class="group relative w-24 cursor-pointer rounded border-2 border-zinc-800 bg-zinc-900 transition-all sm:w-32 {props.selected
        ? 'grayscale-0'
        : 'grayscale-100'}"
    onclick={props.onclick}
>
    <div class="relative overflow-clip">
        <div class="absolute aspect-square">
            <img
                class="w-8"
                src={getAttributeImage(props.attribute[0])}
                alt={props.attribute[0]}
            />
        </div>
        <div class="aspect-square">
            <img src={getCharacterImage(props.id)} alt={props.displayName} />
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
        <p class="truncate">
            {props.displayName}
        </p>
        <img
            class="h-4 w-4 sm:h-5 sm:w-5"
            src={getWeaponImage(props.weapon)}
            alt={props.weapon}
        />
    </div>
</button>
