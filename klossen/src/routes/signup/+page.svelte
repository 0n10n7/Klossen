<svelte:head>
	<title>KLOSSEN</title>
	<meta name="description" content="An online commerce website" />
</svelte:head>

<script>
	import { collection, getDocs } from "firebase/firestore";
	import {database} from '/src/firebase.js'
	import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

	const auth = getAuth();
	let email;
	let password;
	async function signup() {
		await createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
			console.log(`Created account ${email}`);
	}
</script>

<div class="text-column">
<form on:submit={signup}>
	<input type="email" bind:value={ email }>
	<input type="password" bind:value={ password }>
	<button type="submit" >Create</button>
</form>
</div>
