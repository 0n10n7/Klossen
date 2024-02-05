<svelte:head>
	<title>KLOSSEN</title>
	<meta name="description" content="An online commerce website" />
</svelte:head>

<script>
	import {database} from '/src/firebase.js'
	import { collection, getDocs , doc, addDoc} from "firebase/firestore";

	let Title = "Title";
	let Description = "Description"; 
	let Price = 0;
	async function submitForm(){
		await addDoc(collection(database, "listings"), {
			title: Title,
			description: Description,
			price: Price
		});
		console.log("Done");
	}
</script>

<div class="text-column">
	<h1>KLOSSEN</h1>
	<form on:submit={submitForm}>
		<input type="text" bind:value={ Title }>
		<input type="text" bind:value={ Description }>
		<input type="number" bind:value={ Price }> 
		<button type="submit" >Create</button>
	</form>
</div>
