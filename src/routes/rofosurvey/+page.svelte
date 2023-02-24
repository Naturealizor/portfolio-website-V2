<script>
	let totalEstops;
	let outsideBtns;
	let insideBtns;
	let resetEstop;
	let selected = '';

	function submitForm() {
		// save the inputs to a txt file
		const link = document.createElement('a');
		const questionInputs = document.querySelectorAll('#question');
		const inputs = document.querySelectorAll('#form-input');

		// let content = '';
		// for (let i = 0; i < questionInputs.length; i++) {
		// 	content += questionInputs[i].textContent + ': ' + inputs[i].value + '\n';
		// }
		//create new const to itterate through each question as an array
		const questions = [];
		questionInputs.forEach((question) => {
			questions.push(question.innerText);
		});
		const content =
			questions.join('\n') +
			'\n' +
			Array.from(inputs)
				.map((input) => input.value)
				.join('\n');
		// const content =
		// 	questions.join('\n') +
		// 	'\n' +
		// 	Array.from(inputs)
		// 		.map((input) => input.value)
		// 		.join('\n');
		const file = new Blob([content], { type: 'text/plain' });
		link.href = URL.createObjectURL(file);
		link.download = 'rofoSurvey.txt';
		link.click();
		URL.revokeObjectURL(link.href);
	}
</script>

<h1 class="text-xl text-center uppercase bg-blue-700 text-white p-10">rofo store survey</h1>

<!-- <body> -->
<h2 class="uppercase m-5 bg-yellow-200">e-stop info</h2>
<br />
<div class="flex">
	<h3 class="ml-6 text-lg mr-5" id="question">Store #</h3>
	<input class="border-4 " type="text" id="form-input" name="storeNum" />
</div>
<div class="m-6 p-2 grid">
	<label for="totalEstops" id="question">How many E-Stops are at this store</label>
	<input class="border-4 m-2 pr-1" type="num" id="form-input" name="totalEstops" />
	<br />
	<label for="outsideBtns" id="question">Outside:</label>
	<input class="border-4 m-2 pr-1" type="num" id="form-input" name="outsideBtns" />
	<br />
	<label for="insideBtns" id="question">Inside:</label>
	<input class="border-4 m-2 pr-4" type="num" id="form-input" name="insideBtns" />
	<br />
	<label class="m-2" for="totalEstops" id="question"
		>Do the E-Stop buttons contain a reset button?
	</label>
	<input
		type="textarea"
		for="resetEstop"
		id="resetEstop"
		name="resetEstop"
		style="resize: both;"
		class="border-4 ml-2"
	/>
	<br />
	<label class="m-2" for="eResetLoc" id="question">If yes what is the location?</label>
	<input class="border-4 m-2 pr-4" type="text" id="form-input" name="eResetLoc" />
	<br />
	<br />
</div>
<h2 class="uppercase m-5 bg-yellow-200">Dispenser Manager</h2>
<div class="m-6 p-2 grid">
	<h3 id="question">Does the site have a Power Integrity, SSDI or an outside control box?</h3>
	<input type="textarea" id="form-input" name="pwrType" class="border-4" />
	<br />
	<label for="totalEstops" id="question"
		>Is there a “fuel reset” button on the face of the unit?
	</label>
	<input class="border-4 m-2 pr-1" type="num" id="form-input" name="outsideBtns" />
	<br />
	<label for="totalEstops" id="question"
		>If unit is outside where is the main reset for the E-Stop circuit?</label
	>
	<input class="border-4 m-2 pr-4" type="num" id="form-input" name="insideBtns" />
	<br />
	<br />
</div>
<h2 class="uppercase m-5 bg-yellow-200">motor control and dispenser info</h2>
<div class="m-6 p-2 grid">
	<label for="motorStyle" id="question"
		>What style motor controllers are at the site? (i.e. MAGVFC, STP-IST, STP-CBS, Red Jacket etc..)</label
	>
	<input class="border-4 m-2 pr-4" type="text" id="form-input" name="motorStyle" />
	<br />
	<label for="otherStyle" id="question">If other please specify type</label>
	<input class="border-4 m-2 pr-4" type="text" id="form-input" name="otherStyle" />
	<br />
	<label for="motorLoc" id="question"
		>Where are the motors controllers located and are they easily accessible?
	</label>
	<input class="border-4 m-2 pr-4" type="text" id="form-input" name="motorLoc" />
	<br />
	<label for="motorAccess" id="question">ACCESSIBLE?</label>
	<input class="border-4 m-2 pr-4" type="text" id="form-input" name="motorAccess" />
	<br />
	<label for="stpBreakers" id="question">Are the breakers labelled correctly for the STPs?</label>
	<input class="border-4 m-2 pr-4" type="text" id="form-input" name="stpBreakers" />
	<br />
	<label for="stpBreakers" id="question">List panel location, panel letter, and breaker#</label>
	<input class="border-4 m-2 pr-4" type="text" id="form-input" name="stpBreakers" />
	<br />
	<label for="fuelBreakers" id="question"
		>Check labels for fuel dispensers and list panel info</label
	>
	<input class="border-4 m-2 pr-4" type="text" id="form-input" name="fuelBreakers" />
	<br />
</div>
<h2 class="uppercase m-5 bg-yellow-200">tank monitor info</h2>
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
	<label for="pantherVoltage" id="question"
		>Does the site have Wayne Connect, Switch, or Wireless installed for ICR coms?</label
	>
	<input class="border-4 m-2 pr-4" type="text" id="form-input" name="pantherVoltage" />
	<br />
	<label for="pantherLoc" id="question">Where is the above equipment located?</label>
	<input class="border-4 m-2 pr-4" type="text" id="form-input" name="pantherLoc" />
	<br />
</div>
<button class="bg-blue-700 text-white p-2 m-5" on:click={submitForm}>Submit</button>



