<script>
    import src from "./assets/svelte.svg";
    import Nested from "./lib/Nested.svelte";

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