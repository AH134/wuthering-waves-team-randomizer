<script lang="ts">
    import { fly } from "svelte/transition";

    type Props = { delay: number };
    let { delay }: Props = $props();
</script>

<div
    class="group relative w-24 rounded border-2 border-zinc-800 bg-zinc-900 transition-all sm:w-32"
    in:fly|global={{
        delay: (delay + 1) * 50,
        x: -200,
    }}
>
    <div class="group relative overflow-clip">
        <div
            class="flex aspect-square items-center justify-center align-middle"
        >
            <svg
                class="aspect-square w-3/4 p-2"
                viewBox="0 0 150 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M115 40C115 62.0914 97.0914 80 75 80C52.9086 80 35 62.0914 35 40C35 17.9086 52.9086 0 75 0C97.0914 0 115 17.9086 115 40Z"
                    fill="#9f9fa9"
                />
                <path
                    d="M150 108C150 119.046 116.421 128 75 128C33.5786 128 0 119.046 0 108C0 96.9543 33.5786 88 75 88C116.421 88 150 96.9543 150 108Z"
                    fill="#9f9fa9"
                />
                <path
                    d="M106.631 160.844C97.3394 195.519 82.2393 221.601 72.9037 219.1C63.568 216.598 63.532 186.46 72.8232 151.785C82.1145 117.11 97.2145 91.0279 106.55 93.5293C115.886 96.0308 115.922 126.169 106.631 160.844Z"
                    fill="#9f9fa9"
                />
                <path
                    d="M75.6306 151.785C84.9219 186.46 84.8858 216.598 75.5502 219.1C66.2145 221.601 51.1145 195.519 41.8232 160.844C32.532 126.169 32.568 96.0308 41.9037 93.5293C51.2394 91.0279 66.3394 117.11 75.6306 151.785Z"
                    fill="#9f9fa9"
                />
                <path
                    d="M92 155C92 190.346 84.165 219 74.5 219C64.835 219 57 190.346 57 155C57 119.654 64.835 91 74.5 91C84.165 91 92 119.654 92 155Z"
                    fill="#9f9fa9"
                />
            </svg>
        </div>
        <div class="absolute bottom-0 w-full">
            <div class="relative flex w-full items-center">
                <div class="absolute -bottom-2 mt-auto h-4 w-full">
                    <div
                        class="absolute bottom-0 h-2 w-full bg-zinc-50 blur transition-all duration-200 group-hover:h-3"
                    ></div>
                    <div
                        class="absolute bottom-0 h-2 w-full bg-zinc-200 blur-sm duration-200 group-hover:h-3"
                    ></div>
                </div>
            </div>
            <div class="h-0.5 bg-zinc-200"></div>
        </div>
    </div>
    <div class="flex justify-center p-1">
        <b>--</b>
    </div>
</div>
