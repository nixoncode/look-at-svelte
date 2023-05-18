<script>
    import src from "./assets/svelte.svg";

    let name = "Svelte";
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