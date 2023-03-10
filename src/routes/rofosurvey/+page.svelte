<script>
	let totalEstops = 0;
	let outsideBtns = 0;
	let insideBtns = 0;

	let questionList = [
		{ id: 1, type: `Num`, text: `How many E-Stops are at this site?` }, // Num
		{ id: 2, type: `Num`, text: `Outside:` }, // Num
		{ id: 3, type: `Num`, text: `Inside:` }, // Num
		{ id: 4, text: `Are the E-stop buttons momentary or maintain style?` }, // Radio
		{ id: 5, text: `Do the E-Stop buttons contain a reset button?` }, // Bool
		{ id: 6, text: `If yes what is the location?` }, // Text
		{
			id: 7,
			text: `Does the site have a Power Integrity, SSDI or an outside control box?`,
			type: `radio`
		}, // Radio
		{ id: 8, text: `Is there a “fuel reset” button on the face of the unit?` }, // Bool
		{ id: 9, text: `If unit is outside where is the main reset for the E-Stop circuit?` }, // Text
		{
			id: 10,
			text: `What style motor controllers are at the site? (i.e. MAGVFC, STP-IST, STP-CBS, Red Jacket etc..)`
		}, // Radio
		{ id: 11, text: `If other please specify type` }, // Text
		{ id: 12, text: `Does this site have Dispenser Hook Isolation (STP-DHI) boxes installed?` }, // Bool
		{ id: 13, text: `Where are the motors controllers located?` }, // Radio
		{ id: 14, text: `Are they accessible?` }, // Bool
		{ id: 15, text: `Are the breakers labelled correctly for the STPs?` }, // Bool
		{ id: 16, text: `List panel location, panel letter, and breaker#` }, // Text
		{ id: 17, text: `Check labels for fuel dispensers and list panel info` }, // Text
		{ id: 18, text: `Where is the tank monitor located?` }, // Text
		{ id: 19, text: `Where is the tank monitor breaker located and how is it labelled?` }, // Text
		{
			id: 20,
			text: `Is the Panther box plugged into a Mac Victor isolated ground receptacle (Orange plug)?`
		}, // Bool
		{ id: 21, text: `Is there a low voltage disconnect box installed at the site?` }, // Bool
		{
			id: 22,
			text: `Does the site have Wayne Connect, Switch, or Wireless installed for ICR coms?`
		}, // Radio
		{ id: 23, text: `Where is the above equipment located?` } // Text
	];

	// create a function that submits the concatenates the questions array and answers array, then dumps that into a text file

	function submitForm() {
		// check request fields have at least one character
		const inputs = document.querySelectorAll('#form-input');
		let missingData = false;
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].value === '') {
				alert('Please complete all the form fields.');
				missingData = true;
				break;
			}
		}

		if (missingData) return;

		// save the inputs to a txt file
		const link = document.createElement('a');
		const questionInputs = document.querySelectorAll('#question');
		const questions = [];
		questionInputs.forEach((question) => {
			questions.push(question.innerText);
		});
		const surveyQuestions = questions.join('\n');

		const answers = Array.from(inputs).map((input) => input.value.trim());
		const surveyAnswers = answers.join('\n');

		const content = { surveyQuestions, surveyAnswers };
		const json = JSON.stringify(content);
		const blob = new Blob([json], { type: 'application/json' });

		link.href = URL.createObjectURL(blob);
		link.download = 'survey.json';
		link.click();
		URL.revokeObjectURL(link.href);
	}
</script>

<body>
	<div class="m-5 grid grid-cols-5 md:grid-cols-7">
		<h2
			class="text-2xl sm:text-3xl mr-3 col-span-2  col-start-1 md:col-start-2 text-right"
			id="question"
		>
			Store #
		</h2>
		<input class="border-4 col-span-2" type="text" id="form-input" name="storeNum" />
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-4">
		<div
			class="col-span-1 col-start-1 sm:col-span-4 lg:col-span-4 lg:col-start-2 2xl:col-span-2 2xl:col-start-2"
		>
			<h2 class="uppercase m-10 bg-yellow-200 text-center text-xl sm:text-2xl md:text-3xl">
				e-stop info
			</h2>
			<div class="flex" />
			{#each questionList as question}
				<div class="grid m-3 pb-2">
					<p class="text-base pb-2" id="question">{question.text}</p>
					<!-- create if statement -->
					{#if question.id <= 5}
						{#if question.id === 4}
							<div class="flex">
								<input
									class="border-4"
									type="radio"
									id="form-input"
									name="eStopButtons"
									value="Momentary"
								/>
								<label for="Momentary">Momentary</label>
							</div>
							<div class="flex">
								<input
									class="border-4"
									type="radio"
									id="form-input"
									name="eStopButtons"
									value="Maintain"
								/>
								<label for="Maintain">Maintain</label>
							</div>
						{/if}
						{#if question.id === 5}
							<div class="flex">
								<input
									class="border-4"
									type="radio"
									id="form-input"
									name="eStopReset"
									value="Yes"
								/>
								<label for="Yes">Yes</label>
							</div>
							<div class="flex">
								<input class="border-4" type="radio" id="form-input" name="eStopReset" value="No" />
								<label for="No">No</label>
							</div>
						{/if}
					{/if}
					{#if question.id === 7}
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="powerIntegrity"
								value="Power Integrity"
							/>
							<label for="Power Integrity">Power Integrity</label>
						</div>
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="powerIntegrity"
								value="SSDI"
							/>
							<label for="SSDI">SSDI</label>
						</div>
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="powerIntegrity"
								value="Outside Control Box"
							/>
							<label for="Outside Control Box">Outside Control Box</label>
						</div>
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="powerIntegrity"
								value="Other"
							/>
							<label for="Other">Other</label>
						</div>
					{/if}
					{#if question.id === 8}
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopLocation"
								value="Inside Control Box"
							/>
							<label for="Inside Control Box">Inside Control Box</label>
						</div>
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopLocation"
								value="Outside Control Box"
							/>
							<label for="Outside Control Box">Outside Control Box</label>
						</div>
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopLocation"
								value="Other"
							/>
							<label for="Other">Other</label>
						</div>
					{/if}
					{#if question.id === 9}
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopType"
								value="Push Button"
							/>
							<label for="Push Button">Push Button</label>
						</div>
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopType"
								value="Pull Cord"
							/>
							<label for="Pull Cord">Pull Cord</label>
						</div>
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopType"
								value="Other"
							/>
							<label for="Other">Other</label>
						</div>
					{/if}
					{#if question.id === 10}
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopFunction"
								value="Stop"
							/>
							<label for="Stop">Stop</label>
						</div>
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopFunction"
								value="Stop and Reset"
							/>
							<label for="Stop and Reset">Stop and Reset</label>
						</div>
						{/if}
					{#if question.id === 11}
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopReset"
								value="Yes"
							/>
							<label for="Yes">Yes</label>
						</div>
						<div class="flex">
							<input class="border-4" type="radio" id="form-input" name="eStopReset" value="No" />
							<label for="No">No</label>
						</div>
					{/if}
					{#if question.id === 12}
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopReset"
								value="Yes"
							/>
							<label for="Yes">Yes</label>
						</div>
						<div class="flex">
							<input class="border-4" type="radio" id="form-input" name="eStopReset" value="No" />
							<label for="No">No</label>
						</div>
					{/if}
					{#if question.id === 13}
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopReset"
								value="Yes"
							/>
							<label for="Yes">Yes</label>
						</div>
						<div class="flex">
							<input class="border-4" type="radio" id="form-input" name="eStopReset" value="No" />
							<label for="No">No</label>
						</div>
					{/if}
					{#if question.id === 14}
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopReset"
								value="Yes"
							/>
							<label for="Yes">Yes</label>
						</div>
						<div class="flex">
							<input class="border-4" type="radio" id="form-input" name="eStopReset" value="No" />
							<label for="No">No</label>
						</div>
					{/if}
					{#if question.id === 15}
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopReset"
								value="Yes"
							/>
							<label for="Yes">Yes</label>
						</div>
						<div class="flex">
							<input class="border-4" type="radio" id="form-input" name="eStopReset" value="No" />
							<label for="No">No</label>
						</div>
					{/if}
					{#if question.id === 16}
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopReset"
								value="Yes"
							/>
							<label for="Yes">Yes</label>
						</div>
						<div class="flex">
							<input class="border-4" type="radio" id="form-input" name="eStopReset" value="No" />
							<label for="No">No</label>
						</div>
					{/if}
					{#if question.id === 17}
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopReset"
								value="Yes"
							/>
							<label for="Yes">Yes</label>
						</div>
						<div class="flex">
							<input class="border-4" type="radio" id="form-input" name="eStopReset" value="No" />
							<label for="No">No</label>
						</div>
					{/if}
					{#if question.id === 18}
						<div class="flex">
							<input
								class="border-4"
								type="radio"
								id="form-input"
								name="eStopReset"
								value="Yes"
							/>
							<label for="Yes">Yes</label>
						</div>
						<div class="flex">
							<input class="border-4" type="radio" id="form-input" name="eStopReset" value="No" />
							<label for="No">No</label>

		</div>
	<button class="bg-blue-700 text-white p-2 m-5 align-center text-lg" on:click={submitForm}
		>Submit</button>
</body>

<style>
	.align-center {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
</style>
