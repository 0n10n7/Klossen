<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import { getAuth, signOut } from 'firebase/auth';
	import { database } from '/src/firebase.js';

	const auth = getAuth();

	function signout() {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log('logged out');
			})
			.catch((error) => {
				// An error happened.
			});
	}
</script>

<header>
	<div class="corner"></div>
		
	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/klossen' ? 'page' : undefined}>
				<a href="/klossen">Klossen</a>
			</li>
			<li aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
				<a href="/login">Login</a>
			</li>
			<li>
				<button on:click={signout}>log out</button>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/0n10n7?tab=repositories">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a,
	button {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
	button {
		border-style:solid;
		border-radius: 1vh;
		background: rgb(31, 31, 31);
		background: linear-gradient(
			90deg,
			rgba(31, 31, 50, 1) 0%,
			rgba(37, 31, 37, 1) 30%,
			rgba(31, 31, 31, 1) 50%,
			rgba(37, 31, 37, 1) 70%,
			rgba(50, 31, 31, 1) 100%
		);
	}
	a:hover,
	button:hover{
		color: var(--color-theme-1);
	}
	button:hover {
		background: rgb(40, 40, 40);
		background: linear-gradient(
			180deg,
			rgba(40, 40,65, 1) 0%,
			rgba(48, 40, 48, 1) 30%,
			rgba(40, 40, 40, 1) 50%,
			rgba(48, 40, 48, 1) 70%,
			rgba(65, 40, 40, 1) 100%
		);
	}
</style>
