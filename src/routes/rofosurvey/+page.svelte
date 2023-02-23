<script>
	let totalEstops;
	let outsideBtns;
	let insideBtns;
	let resetEstop;
	let selected = '';

	function submitForm() {
		// save the inputs to a txt file
		const link = document.createElement('a');
		const inputs = document.querySelectorAll('#form-input');
		const content = Array.from(inputs)
			.map((input) => input.value)
			.join('\n');
		const file = new Blob([content], { type: 'text/plain' });
		link.href = URL.createObjectURL(file);
		link.download = 'rofoSurvey.txt';
		link.click();
		URL.revokeObjectURL(link.href);
	}
</script>

<h1 class="text-xl text-center uppercase bg-blue-700 text-white p-10">rofo store survey</h1>
<body>
	<h2 class="uppercase m-5">e-stop info</h2>
	<div class="m-6 p-2">
		<label for="totalEstops">How many E-Stops are at this store</label>
		<input class="border-2 m-2 pr-1" type="num" id="form-input" name="totalEstops" />
		<br />
		<label for="outsideBtns">Outside:</label>
		<input class="border-2 m-2 pr-1" type="num" id="form-input" name="outsideBtns" />
		<br />
		<label for="insideBtns">Inside:</label>
		<input class="border-2 m-2 pr-4" type="num" id="form-input" name="insideBtns" />
		<br />
		<br />
		<label class="float-left" for="totalEstops"
			>Do the E-Stop buttons contain a reset button?
		</label>
		<input
			type="textarea"
			for="resetEstop"
			id="resetEstop"
			name="resetEstop"
			style="resize: both;"
			class="border-2"
		/>
		<br />
		<br />
	</div>
	<h2 class="uppercase m-5">Dispenser Manager</h2>
	<div class="m-6 p-2">
		<h3 id="form-input">Does the site have a Power Integrity, SSDI or an outside control box?</h3>

		<br />
		<br />
		<label for="totalEstops">Is there a “fuel reset” button on the face of the unit? </label>
		<input class="border-2 m-2 pr-1" type="num" id="form-input" name="outsideBtns" />
		<br />
		<label for="totalEstops"
			>If unit is outside where is the main reset for the E-Stop circuit?</label
		>
		<input class="border-2 m-2 pr-4" type="num" id="form-input" name="insideBtns" />
		<br />
		<br />
		<label class="float-left" for="totalEstops"
			>Do the E-Stop buttons contain a reset button?
		</label>
		<br />
	</div>
	<button class="bg-blue-700 text-white p-2 m-5" on:click={submitForm}>Submit</button>
	<!-- create button to clear inputs -->
</body>

<!-- <label class="m-2">
			<input>
				checked={selected === `Power Integrity`}
				type="radio"
				id="form-input"
				name="pwrType"
				value="Power Integrity"
			/> Power Integrity
		</label>
		<label class="m-2">
			<input type="radio" id="form-input" name="pwrType" value="SSDI" /> SSDI
		</label>
		<label class="m-2">
			<input type="radio" id="form-input" name="pwrType" value="Outside Control Box" /> Outside Control
			Box
		</label> -->
