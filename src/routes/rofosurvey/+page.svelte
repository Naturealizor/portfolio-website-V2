<script>
	let estopQuestions = [
		// { id: 1, text: `How many E-Stops are at this site?` },
		// { id: 2, text: `Outside:` },
		// { id: 3, text: `Inside:` },
		{ id: 4, text: `Are the E-stop buttons momentary or maintain style?` },
		{ id: 5, text: `Do the E-Stop buttons contain a reset button?` },
		{ id: 6, text: `If yes what is the location?` }
	];
	let powerQuestions = [
		{ id: 7, text: `Does the site have a Power Integrity, SSDI or an outside control box?` },
		{ id: 8, text: `Is there a “fuel reset” button on the face of the unit?` },
		{ id: 9, text: `If unit is outside where is the main reset for the E-Stop circuit?` }
	];
	let motorQuestions = [
		{
			id: 10,
			text: `What style motor controllers are at the site? (i.e. MAGVFC, STP-IST, STP-CBS, Red Jacket etc..)`
		},
		{ id: 11, text: `If other please specify type` },
		{ id: 12, text: `Does this site have Dispenser Hook Isolation (STP-DHI) boxes installed?` },
		{ id: 13, text: `Where are the motors controllers located?` },
		{ id: 14, text: `Are they accessible?` },
		{ id: 15, text: `Are the breakers labelled correctly for the STPs?` },
		{ id: 16, text: `List panel location, panel letter, and breaker#` },
		{ id: 17, text: `Check labels for fuel dispensers and list panel info` }
	];
	let tankQuestions = [
		{ id: 18, text: `Where is the tank monitor located?` },
		{ id: 19, text: `Where is the tank monitor breaker located and how is it labelled?` }
	];
	let panterQuestions = [
		{
			id: 20,
			text: `Is the Panther box plugged into a Mac Victor isolated ground receptacle (Orange plug)?`
		},
		{ id: 21, text: `Is there a low voltage disconnect box installed at the site?` },
		{
			id: 22,
			text: `Does the site have Wayne Connect, Switch, or Wireless installed for ICR coms?`
		},
		{ id: 23, text: `Where is the above equipment located?` }
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

		const content = { surveyQuestions } + { surveyAnswers };

		const file = new Blob([content], { type: 'text/plain' });
		link.href = URL.createObjectURL(file);
		link.download = 'rofoSurvey.txt';
		link.click();
		URL.revokeObjectURL(link.href);
	}

	// var currentValue = 0;
	// function handleClick(pwrType) {
	// 	alert('Old value: ' + currentValue);
	// 	alert('New value: ' + pwrType.value);
	// 	currentValue = pwrType.value;
	// }
</script>

<body>
	<div class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-4">
		<div
			class="col-span-1 col-start-1 sm:col-span-4 lg:col-span-4 lg:col-start-2 2xl:col-span-2 2xl:col-start-2"
		>
			<div class="flex m-5">
				<h2 class=" text-3xl mr-5 " id="question">Store #</h2>
				<input class="border-4 " type="text" id="form-input" name="storeNum" />
			</div>
			<h2 class="uppercase m-10 bg-yellow-200 text-center text-2xl">e-stop info</h2>
			{#each estopQuestions as question}
				<div class="grid m-5">
					<p class=" text-md mr-5" id="question">{question.text}</p>
					<input class="border-4 " type="text" id="form-input" name="storeNum" />
				</div>
			{/each}
			<h2 class="uppercase m-10 bg-yellow-200 text-center text-2xl">Dispenser Manager</h2>
			{#each powerQuestions as question}
				<div class="grid m-5">
					<p class=" text-md mr-5" id="question">{question.text}</p>
					<input class="border-4 " type="text" id="form-input" name="storeNum" />
				</div>
			{/each}
			<h2 class="uppercase m-10 bg-yellow-200 text-center text-2xl">
				motor control and dispenser info
			</h2>
			{#each motorQuestions as question}
				<div class="grid m-5">
					<p class=" text-md mr-5" id="question">{question.text}</p>
					<input class="border-4 " type="text" id="form-input" name="storeNum" />
				</div>
			{/each}
			<h2 class="uppercase m-10 bg-yellow-200 text-center text-2xl">tank monitor info</h2>
			{#each tankQuestions as question}
				<div class="grid m-5">
					<p class=" text-md mr-5" id="question">{question.text}</p>
					<input class="border-4 " type="text" id="form-input" name="storeNum" />
				</div>
			{/each}
			<h2 class="uppercase m-10 bg-yellow-200 text-center text-2xl">
				panther box and communication info
			</h2>
			{#each panterQuestions as question}
				<div class="grid m-5">
					<p class=" text-md mr-5" id="question">{question.text}</p>
					<input class="border-4 " type="text" id="form-input" name="storeNum" />
				</div>
			{/each}
		</div>
	</div>

	<button class="bg-blue-700 text-white p-2 m-5 align-center text-lg" on:click={submitForm}
		>Submit</button
	>
</body>

<!-- <div class="m-6 p-2 grid">
				<label for="motorStyle" id="question"
					>What style motor controllers are at the site? (i.e. MAGVFC, STP-IST, STP-CBS, Red Jacket
					etc..)</label
				>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="motorStyle" />
				<br />
				<label for="otherStyle" id="question">If other please specify type</label>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="otherStyle" />
				<label for="stpHook" id="question"
					>Does this site have Dispenser Hook Isolation (STP-DHI) boxes installed?</label
				>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="stpHook" />
				<br />
				<label for="motorLoc" id="question">Where are the motors controllers located </label>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="motorLoc" />
				<br />
				<label for="motorAccess" id="question">Are they accessible?</label>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="motorAccess" />
				<br />
				<label for="stpBreakers" id="question"
					>Are the breakers labelled correctly for the STPs?</label
				>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="stpBreakers" />
				<br />
				<label for="stpPanelInfo" id="question"
					>List panel location, panel letter, and breaker#</label
				>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="stpPanelInfo" />
				<br />
				<label for="fuelBreakers" id="question"
					>Check labels for fuel dispensers and list panel info</label
				>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="fuelBreakers" />
				<br />
			</div>
			
			<div class="m-6 p-2 grid">
				<label for="tankModel" id="question">What model tank monitor is at the site</label>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="tankModel" />
				<br />
				<label for="tankLoc" id="question">Where is the tank monitor located?</label>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="tankLoc" />
				<br />
				<label for="tankAccess" id="question"
					>Where is the tank monitor breaker located and how is it labelled?</label
				>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="tankAccess" />
				<br />
			</div>
			<h2 class="uppercase m-5 bg-yellow-200">panther box and communication info</h2>
			<div class="m-6 p-2 grid">
				<label for="pantherGrounded" id="question"
					>Is the Panther box plugged into a Mac Victor isolated ground receptacle (Orange plug)?</label
				>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="pantherGrounded" />
				<br />
				<label for="pantherVoltage" id="question"
					>Is there a low voltage disconnect box installed at the site?</label
				>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="pantherVoltage" />
				<br />
				<label for="commsStyle" id="question"
					>Does the site have Wayne Connect, Switch, or Wireless installed for ICR coms?</label
				>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="commsStyle" />
				<br />
				<label for="pantherLoc" id="question">Where is the above equipment located?</label>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="pantherLoc" />
				<br />
			</div>
			<p class="text-center text-2xl bg-blue-200 p-2">
				Once you hit the Submit button, you can save this to your files, or email the text file to
				me (jjordan@royalfarms)
			</p>-->
<style>
	p {
		font-size: 1.4rem;
	}
	/* move the button to the center of the screen */
	.align-center {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
</style>
