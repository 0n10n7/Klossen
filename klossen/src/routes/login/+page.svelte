<script>
	import { collection, getDocs } from 'firebase/firestore';
	import { getAuth, signInWithEmailAndPassword, doc, setDoc } from 'firebase/auth';
	import { database } from '/src/firebase.js';

	const auth = getAuth();
 
	let email;
	let password;
	async function login() {
		await signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				setDoc(doc(database, 'users', user.uid), {
					email: user.email,
					listings: []
				});
				console.log(
					`logged in account ${email} ${password[0]}${password[1]}${password[2]}${new Array(password.length - 3).fill('*').join('')}`
				);
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
		<input type="email" bind:value={email} />
		<input type="password" bind:value={password} />
		<button type="submit">Login</button>
	</form>
</div>
