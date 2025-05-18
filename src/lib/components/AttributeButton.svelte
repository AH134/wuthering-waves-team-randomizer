<script lang="ts">
    type Props = {
        attribute: string;
        selected: boolean;
        src: string;
        onclick: () => void;
    };

    let { attribute, selected, src, onclick }: Props = $props();
</script>

<button
    class="flex aspect-square cursor-pointer rounded border-2 border-zinc-800 transition-all hover:bg-zinc-900 {selected
        ? 'bg-zinc-900'
        : 'bg-zinc-950'}"
    {onclick}
>
    <img
        class="{selected ? '' : 'brightness-50'} transition-all"
        {src}
        alt="{attribute} icon"
        width="48"
        height="48"
    />
</button>
