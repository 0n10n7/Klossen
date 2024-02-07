<div class="product">
	<header>
		<slot name="title" />
		<slot user ="user" />
	</header>
	<div>
		<slot name="picture"/>
	</div>
	<footer>
		<slot name="description" />	
		<slot id="price" name="price" />
	</footer>
</div>
<style>
	
	.product {
		display: grid;
		grid-template-rows: 1fr 5fr 1fr;
		justify-content: center;
		padding: 1vh;
		font-size: min(2vw, 3.5vh, 1.5rem);
		width: 24em;
		aspect-ratio: 16 / 9;
		border-radius: 1vh;
        border-style:ridge;
		font-variant: small-caps;
	}

	header, footer {
		width: 100%;
		justify-content:space-between
	}


	footer {
		
		font-size: 0.7em;
		align-items: end;
	}
</style>