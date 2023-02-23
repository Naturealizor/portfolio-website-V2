<script>
	let totalEstops;

	function save() {
		// save the inputs to a txt file
		const link = document.createElement('a');
		const content = document.querySelector('input').value;
		const file = new Blob([content], { type: 'text/plain' });
		link.href = URL.createObjectURL(file);
		link.download = 'rofoSurvey.txt';
		link.click();
		URL.revokeObjectURL(link.href);
	}
</script>

<h1 class="text-xl text-center uppercase bg-blue-700 text-white p-10">rofo store survey</h1>
<body>
	<div class="m-10 p-2">
		<ul>
			<h2 class="uppercase">e-stop info</h2>
			<br />
			<li>How many E-Stops are at this store</li>
			<input class="border-2" type="num" bind:value={totalEstops} />
			<!--  create a button that will save the inputs to a txt file-->
			<button on:click={save} class="bg-blue-700 text-white p-2">Save</button>
			<li>Outside</li>
			<li>Inside</li>
			<li />
			<li />
			<li />
			<li />
		</ul>
	</div>
</body>
