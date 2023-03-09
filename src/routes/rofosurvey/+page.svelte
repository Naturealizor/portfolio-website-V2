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

	function submitForm() {
		// save the inputs to a txt file
		const link = document.createElement('a');
		const questionInputs = document.querySelectorAll('#question');
		const inputs = document.querySelectorAll('#form-input');
		const questions = [];
		questionInputs.forEach((question) => {
			questions.push(question.innerText);
		});
		let surveyQuestions = questions.join('\n');
		let surveyAnswers = Array.from(inputs)
			.map((input) => input.value)
			.join('\n');

		const content = { surveyQuestions, surveyAnswers };

		const file = new Blob([content], { type: 'text/plain' });
		link.href = URL.createObjectURL(file);
		link.download = 'rofoSurvey.txt';
		link.click();
		URL.revokeObjectURL(link.href);

		console.log(typeof content);
		// console.log(typeof questions);
	}

	// Better Comments examples
	/**
	 * *hello
	 * !world
	 * // this is a comment
	 * ? this is a question
	 * @ this is a note
	 * @param this is a parameter
	 * */
</script>

<body>
	<div class="m-5 grid grid-cols-5 md:grid-cols-7">
		<h2
			class="text-2xl sm:text-3xl mr-3 col-span-2  col-start-1 md:col-start-2 text-right"
			id="question"
		>
			Store #
		</h2>
		<input c type: `Num`,lass="border-4 col-span-2" type="text" id="form-input" name="storeNum" />
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-4">
		<div
			class="col-span-1 col-start-1 sm:col-span-4 lg:col-span-4 lg:col-start-2 2xl:col-span-2 2xl:col-start-2"
		>
			<h2 class="uppercase m-10 bg-yellow-200 text-center text-xl sm:text-2xl md:text-3xl">
				e-stop info
			</h2>
			<div class="flex" />
			<!-- <div class="m-6 p-2 grid">
				<label for="totalEstops" id="question">How many E-Stops are at this site</label>
				<input
					class="border-4 m-2 pr-1"
					type="nu type: `Num`,mber"
					id="form-input"
					bind:value={totalEstops}
					name="totalEstops"
					min="0"
					max="10"
				/>
				<input class="border-4 m-2 pr-1" type="range" bind:value={totalEstops} min="0" max="10" />
				<br />
				<label for="outsideBtns" id="question">Outside:</label>
				<input
					class="border-4 m-2 pr-1"
					type="nu type: `Num`,mber"
					id="form-input"
					bind:value={outsideBtns}
					min="0"
					max="5"
					name="outsideBtns"
				/>
				<input class="border-4 m-2 pr-1" type="range" bind:value={outsideBtns} min="0" max="10" />
				<br />
				<label for="insideBtns" id="question">Inside:</label>
				<input
					class="border-4 m-2 pr-4"
					type="nu type: `Num`,mber"
					id="form-input"
					bind:value={insideBtns}
					min="0"
					max="5"
					name="insideBtns"
				/>
				<input class="border-4 m-2 pr-1" type="range" bind:value={insideBtns} min="0" max="10" />
				<br /> -->
			{#each questionList as question}
				<div class="grid m-3 pb-2">
					<p class="text-base pb-2" id="question">{question.text}</p>
					<!-- create if statement -->
					{#if question.id <= 5}
						<input c type: `Num`,lass="border-4 " type="text" id="form-input" name="storeNum" />
					{/if}
				</div>
			{/each}
		</div>
	</div>
	<!-- </div> -->

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
