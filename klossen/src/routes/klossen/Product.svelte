<div class="product">
	<header>
		<slot name="title" />
		<slot name="user" />
	</header>
	<div>
		<slot name="picture" />
	</div>
	<footer>
		<slot name="description" />
		<slot name="price" />
	</footer>
</div>

<style>
	.product {
		justify-content: space-between;
		display: grid;
		grid-template-rows: 1fr 5fr 1fr;
		padding: 1vh;
		font-size: min(2vw, 3.5vh, 1.5rem);
		width: 24em;
		aspect-ratio: 16 / 9;
		border-radius: 1vh;
		border-style: ridge;
		font-variant: small-caps;
	}
	header , footer{
		grid-template-columns: 1fr 1fr;
		width: 24em;
		justify-content: space-between;
	}

	footer {
		font-size: 0.7em;
	}
</style>
