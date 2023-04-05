<script>
	let totalEstops = 0;
	let outsideBtns = 0;
	let insideBtns = 0;

	const rangeQuestions = [
		{ id: 1, type: `Num`, text: `How many E-Stops are at this site?` }, // Num
		{ id: 2, type: `Num`, text: `Outside:` }, // Num
		{ id: 3, type: `Num`, text: `Inside:` } // Num
	];
	const multipleChoiceQuestions = [
		{ id: 4, text: `Are the E-stop buttons momentary or maintain style?` }, // Radio
		{
			id: 7,
			text: `Does the site have a Power Integrity, SSDI or an outside control box?`,
			type: `radio`
		}, // Radio
		{
			id: 10,
			text: `What style motor controllers are at the site? (i.e. MAGVFC, STP-IST, STP-CBS, Red Jacket etc..)`
		}, // Radio
		{ id: 13, text: `Where are the motors controllers located?` }, // Radio
		{
			id: 22,
			text: `Does the site have Wayne Connect, Switch, or Wireless installed for ICR coms?`
		} // Radio
	];
	const boolQuestions = [
		{ id: 5, text: `Do the E-Stop buttons contain a reset button?` }, // Bool
		{ id: 8, text: `If unit is outside where is the main reset for the E-Stop circuit?` }, // Bool
		{ id: 12, text: `Does this site have Dispenser Hook Isolation (STP-DHI) boxes installed?` }, // Bool
		{ id: 14, text: `Are they accessible?` }, // Bool
		{ id: 15, text: `Are the breakers labelled correctly for the STPs?` }, // Bool
		{
			id: 20,
			text: `Is the Panther box plugged into a Mac Victor isolated ground receptacle (Orange plug)?`
		}, // Bool
		{ id: 21, text: `Is there a low voltage disconnect box installed at the site?` } // Bool
	];
	const textQuestions = [
		{ id: 6, text: `If yes what is the location?` }, // Text
		{ id: 9, text: `If other please specify type` }, // Text
		{ id: 16, text: `List panel location, panel letter, and breaker#` }, // Text
		{ id: 17, text: `Check labels for fuel dispensers and list panel info` }, // Text
		{ id: 18, text: `Where is the tank monitor located?` }, // Text
		{ id: 19, text: `Where is the tank monitor breaker located and how is it labelled?` }, // Text
		{ id: 23, text: `Where is the above equipment located?` } // Text
	];

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
		// save the inputs to a txt file
		const link = document.createElement('a');
		const questionInputs = document.querySelectorAll('#question');
		const inputs = document.querySelectorAll('#form-input');
		const questions = [];
		// console.log(questions);

		const responses = []; //created new array to match questions, then copied forEach
		inputs.forEach((response) => responses.push(response.value));
		console.log(responses);
		questionInputs.forEach((question) => {
			questions.push(question.innerText);
		});
		const contents = questions.join('\t') + '\t';
		const answeredContent = Array.from(inputs)
			.map((input) => input.value)
			.join('\t');

		// console.log(contents);
		// console.log(answeredContent);

		//create a function that joins contents and answeredContent
		function combineInputs(item) {
			return contents + answeredContent;
		}
		// console.log(combineInputs());

		const file = new Blob([contents], { type: 'text/plain' });
		link.href = URL.createObjectURL(file);
		link.download = 'rofoSurvey.txt';
		link.click();
		URL.revokeObjectURL(link.href);
	}
</script>

<body>
	<div class="m-5 grid grid-cols-5 md:grid-cols-7">
		<h2
			class="text-2xl sm:text-3xl mr-3 col-span-2 col-start-1 md:col-start-2 text-right"
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
							<input class="border-4" type="radio" id="form-input" name="eStopReset" value="Yes" />
							<label for="Yes">Yes</label>
						</div>
						<div class="flex">
							<input class="border-4" type="radio" id="form-input" name="eStopReset" value="No" />
							<label for="No">No</label>
						</div>
					{/if}
					<!-- {#if question.id === 7}
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
							<input class="border-4" type="radio" id="form-input" name="eStopType" value="Other" />
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
					{/if} -->
				</div>
			{/each}
		</div>
	</div>
	<button class="bg-blue-700 text-white p-2 m-5 align-center text-lg" on:click={submitForm}
		>Submit</button
	>
</body>

<style>
	.align-center {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
</style>
