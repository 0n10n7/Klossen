<script>
	import Product from './Product.svelte';
	import { database } from '/src/firebase.js';
	import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
	import { getContext } from 'svelte';
	import { goto } from '$app/navigation';
	// Retrieve auth store from context
	const Auth = getContext('auth');
	let auth;
	Auth.subscribe((val) => (auth = val));
	let listings = [];
	getListings();

	async function userExists(userID) {
		const docRef = doc(database, 'users', userID);
		const document = await getDoc(docRef).catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorMessage);
		});
		return document;
	}
	async function userEmail(userID) {
		let user = await userExists(userID);
		if (user.exists) {
			return user.data().email;
		} else {
			return 'no user found';
		}
	}
	async function getListings() {
		const querySnapshot = await getDocs(collection(database, 'listings'));

		querySnapshot.forEach((doc) => {
			listings = [...listings, doc.data()];
		});
	}
</script>

<svelte:head>
	<title>KLOSSEN</title>
	<meta name="description" content="An online commerce website" />
</svelte:head>

<div class="text-column">
	<h1>KLOSSEN</h1>
	{#if auth.currentUser}
		<a href="/create">Create a listing</a>
	{:else}
		<a href="/login">Log in to create a listing</a>
	{/if}
	<div id="listingsBox">
		{#each listings as listing}
			<Product>
				<span slot="title">{listing?.title}</span>
				<span slot="user" class="user">
					user{#await userEmail(listing?.userID) then userEmail}
						: {userEmail}
					{/await}
				</span>
				<span slot="price" class="price">{listing?.price} kr</span>
				<span slot="description">{listing?.description}</span>
			</Product>
		{/each}
	</div>
</div>
