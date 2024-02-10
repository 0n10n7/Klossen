<script>
	import { collection, getDocs } from 'firebase/firestore';
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
	import { database } from '/src/firebase.js';
	import { getContext } from 'svelte';
	import { goto } from '$app/navigation';

	// Retrieve auth store from context
	const Auth = getContext('auth');
	let auth;
	Auth.subscribe((val) => (auth = val));

	let email;
	let password;
	async function login() {
		await signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(auth.currentUser);
				console.log(
					`logged in account ${email} ${password[0]}${password[1]}${password[2]}${new Array(password.length - 3).fill('*').join('')}`
				);
				goto("/klossen");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	}
</script>

<svelte:head>
	<title>KLOSSEN</title>
	<meta name="description" content="An online commerce website" />
</svelte:head>

<div class="text-column">
	<a href="/signup">If you don't have an acount</a>
	<form on:submit={login}>
		<input type="email" placeholder="example@email.com" bind:value={email} />
		<input type="password" placeholder="password" bind:value={password} />
		<button type="submit">Login</button>
	</form>
</div>
