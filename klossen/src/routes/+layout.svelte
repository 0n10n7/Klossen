<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { setContext } from 'svelte';
	import { get, writable } from 'svelte/store';
	import { getAuth } from 'firebase/auth';
	const auth = writable();
	
	auth.set(getAuth());
	setContext('auth', auth);
	
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
