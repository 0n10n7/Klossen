<script>
	import Product from './Product.svelte';
	import { database } from '/src/firebase.js';
	import { collection, getDocs } from 'firebase/firestore';
	import { getContext } from 'svelte';
	import { goto } from '$app/navigation';
	// Retrieve auth store from context
	const Auth = getContext('auth');
	let auth;
	Auth.subscribe((val) => (auth = val));

	let listings = [];
	getListings();

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
	<!-- The place to view a single listing -->

	
	<div id="listingsBox">
		{#each listings as listing}
			<Product>
				<span slot="price">{listing?.price} kr</span>
				<span slot="description">{listing?.description}</span>
				<span slot="title">{listing?.title}</span>
			</Product>
		{/each}
	</div>
</div>
