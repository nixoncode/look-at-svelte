<script>
    import src from "./assets/svelte.svg";
    import Nested from "./lib/Nested.svelte";
    import PackageInfo from "./lib/PackageInfo.svelte";
    import Thing from "./lib/Thing.svelte";

    let name = "Svelte";
    let stringWithHTML = `This string contains some <strong>HTML!!!</strong>`;

    let count = 0;

    function increment() {
        count++;
    }

    $: doubled = count * 2;

    $: console.log(`the count is ${count}`);

    $: {
        console.log(`the count is ${count}`);
        console.log("this will also run whenever count changes");
    }
    $:if (count > 10) {
        alert("The count is dangerously high!");
        count = 0;
    }

    let numbers = [1, 2, 3, 4];

    function addNumber() {
        numbers = [...numbers, numbers.length + 1];
        numbersObj.sum++;
    }

    let numbersObj = {sum: 0};

    const pkg = {
        name: "Svelte",
        speed: "blazing",
        version: 3,
        website: "https://svelte.dev",
    };

    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let selectedColor = colors[0];

    let things = [
        {id: 1, name: "apple"},
        {id: 2, name: "banana"},
        {id: 3, name: "carrot"},
        {id: 4, name: "doughnut"},
        {id: 5, name: "egg"},
    ];

    function removeThing() {
        things = things.slice(1);
    }
</script>
<h1>Hello {name.toUpperCase()}!</h1>
<img src={src} alt="world of {name}">

<p>This is a paragraph.</p>

<style>
    p {
        color: goldenrod;
        font-family: "Comic Sans MS", cursive;
        font-size: 2em;
    }
</style>

<Nested/>

<p>{@html stringWithHTML}</p>
<button on:click={increment}>Clicked {count} {count === 1 ? "time" : "times"}</button>

<p>{count} doubled is {doubled}</p>

<p>{ numbers.join(" + ") } =?</p>
<button on:click={addNumber}>Add a number</button>
<p>the sum is {numbersObj.sum}</p>

<Nested answer={42}/>

<PackageInfo {...pkg}/>

{#if count > 5}
    <p>{count} is greater than 5</p>
{:else if count === 5}
    <p>{count} is same as 5</p>
{:else }
    <p>{count} is less than 5</p>
{/if}

<h1 style="color: {selectedColor}">Pick a color</h1>
<div>
    {#each colors as color, i}
        <button on:click={() => selectedColor = color}>{i + 1}. {color}</button>
    {/each}
</div>

<button on:click={removeThing}>Remove first thing</button>
{#each things as thing (thing.id)}
    <Thing name="{thing.name}"/>
{/each}