<script>
	import { database } from '/src/firebase.js';
	import { collection, getDocs, doc, addDoc, getDoc } from 'firebase/firestore';
	import { getContext } from 'svelte';
	import { goto } from '$app/navigation';
	// Retrieve auth store from context
	const Auth = getContext('auth');
	let auth;
	Auth.subscribe((val) => (auth = val));

	async function userExists(userID) {
		const docRef = doc(database, "users", userID);
		const document = await getDoc(docRef).catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
		return document;
	}

	let Title = 'Title';
	let Description = 'Description';
	let Price = 0;
	async function submitForm() {
		console.log("submitting form")
		const user = await userExists(auth.currentUser.uid);
		if (user.exists()) {
			await addDoc(collection(database, 'listings'), {
				title: Title,
				description: Description,
				price: Price,
				userID: user.id,
			});
			console.log('Done');
			console.log('Document data:', user.data());
		} else {
			console.log("not logged in");
			goto("/login");
		}
	}
</script>

<svelte:head>
	<title>KLOSSEN</title>
	<meta name="description" content="An online commerce website" />
</svelte:head>

<div class="text-column">
	<h1>KLOSSEN</h1>
	<form on:submit={submitForm}>
		<input type="text" bind:value={Title} />
		<input type="text" bind:value={Description} />
		<input type="number" bind:value={Price} />
		<button type="submit">Create</button>
	</form>
</div>
