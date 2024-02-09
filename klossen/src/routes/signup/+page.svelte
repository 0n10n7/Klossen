<svelte:head>
	<title>KLOSSEN</title>
	<meta name="description" content="An online commerce website" />
</svelte:head>

<script>
	import { collection, getDocs } from "firebase/firestore";
	import {database} from '/src/firebase.js'
	import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
	import { doc, setDoc } from "firebase/firestore"; 
	import { writable } from "svelte/store";
	import { getContext } from 'svelte';
	import { goto } from '$app/navigation';

	// Retrieve auth store from context
	const Auth = getContext('auth');
	let auth;
	Auth.subscribe(val => auth = val);
	
	let email;
	let password;
	async function signup() {
		await createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				// Signed up
				const user = userCredential.user;
				await setDoc(doc(database, 'users', user.uid), {
					email: user.email,
					listings: []
				});
				console.log(`Created account ${email}`);
				goto("/klossen");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
			
	}
</script>

<div class="text-column">
	<p>for the love of god, dont use a password that you use elsewhere here. <br> this site is not secure.</p>
<form on:submit={signup}>
	<input type="email" placeholder="example@email.com" bind:value={ email }>
	<input type="password" placeholder="password" minlength="8" maxlength="256" bind:value={ password }>
	<button type="submit" >Create</button>
</form>
</div>
