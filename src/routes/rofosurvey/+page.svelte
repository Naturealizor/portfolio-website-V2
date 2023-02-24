<script>
	// import DarkButton from '../darkButton.svelte';

	let storeNum = '';
	let totalEstops = 0;
	let outsideBtns = 0;
	let insideBtns = 0;
	let resetEstop = '';
	let pwrType = 1;
	let pwrReset = '';
	let eResetLoc = '';
	let mainReset = '';
	let motorStyle = '';
	let motorLoc = '';
	let otherStyle = '';
	let motorAccess = '';
	let stpBreakers = '';
	let stpPanelInfo = '';
	let fuelBreakers = '';
	let tankLoc = '';
	let tankAccess = '';
	let pantherGrounded = '';
	let pantherVoltage = '';
	let pantherLoc = '';
	let commsStyle = '';

	function submitForm() {
		// save the inputs to a txt file
		const link = document.createElement('a');
		const questionInputs = document.querySelectorAll('#question');
		const inputs = document.querySelectorAll('#form-input');
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
		const file = new Blob([content], { type: 'text/plain' });
		link.href = URL.createObjectURL(file);
		link.download = 'rofoSurvey.txt';
		link.click();
		URL.revokeObjectURL(link.href);
	}

	var currentValue = 0;
	function handleClick(pwrType) {
		alert('Old value: ' + currentValue);
		alert('New value: ' + pwrType.value);
		currentValue = pwrType.value;
	}
</script>

<body>
	<div class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-4">
		<div
			class="col-span-1 col-start-1 sm:col-span-4 lg:col-span-4 lg:col-start-2 2xl:col-span-2 2xl:col-start-2"
		>
			<!-- <DarkButton /> -->
			<h2 class="uppercase m-5 bg-yellow-200">e-stop info</h2>
			<br />
			<div class="flex">
				<h3 class="ml-6 text-3xl mr-5" id="question">Store #</h3>
				<input class="border-4 " type="text" id="form-input" name="storeNum" />
			</div>
			<div class="m-6 p-2 grid">
				<label for="totalEstops" id="question">How many E-Stops are at this store</label>
				<input
					class="border-4 m-2 pr-1"
					type="number"
					id="form-input"
					bind:value={totalEstops}
					min="0"
					max="10"
					name="totalEstops"
				/>
				<input class="border-4 m-2 pr-1" type="range" bind:value={totalEstops} min="0" max="10" />
				<br />
				<label for="outsideBtns" id="question">Outside:</label>
				<input
					class="border-4 m-2 pr-1"
					type="number"
					bind:value={outsideBtns}
					min="0"
					max="5"
					id="form-input"
					name="outsideBtns"
				/>
				<input class="border-4 m-2 pr-1" type="range" bind:value={outsideBtns} min="0" max="10" />
				<br />
				<label for="insideBtns" id="question">Inside:</label>
				<input
					class="border-4 m-2 pr-4"
					type="number"
					bind:value={insideBtns}
					id="form-input"
					name="insideBtns"
				/>
				<input class="border-4 m-2 pr-1" type="range" bind:value={insideBtns} min="0" max="10" />
				<br />
				<label class="m-2" for="resetEstop" id="question"
					>Do the E-Stop buttons contain a reset button?
				</label>
				<input
					class="border-4 ml-2"
					type="text"
					bind:value={resetEstop}
					id="form-input"
					style="resize: both;"
					name="resetEstop"
				/>
				<br />
				<label class="m-2" for="eResetLoc" id="question">If yes what is the location?</label>
				<input
					class="border-4 m-2 pr-4"
					type="text"
					bind:value={eResetLoc}
					id="form-input"
					name="eResetLoc"
				/>
				<br />
				<br />
			</div>
			<h2 class="uppercase m-5 bg-yellow-200">Dispenser Manager</h2>
			<div class="m-6 p-2 grid">
				<label for="pwrType" id="question"
					>Does the site have a Power Integrity, SSDI or an outside control box?</label
				>
				<label>
					<input
						type="radio"
						bind:group={pwrType}
						on:click={handleClick}
						value="1"
						name="pwrType"
						class="border-4"
					/> Power Integrity
				</label>
				<label>
					<input
						type="radio"
						bind:group={pwrType}
						on:click={handleClick}
						value="2"
						name="pwrType"
						class="border-4"
					/> SSDI
				</label>
				<label>
					<input
						type="radio"
						bind:group={pwrType}
						on:click={handleClick}
						value="3"
						name="pwrType"
						class="border-4"
					/> Outside Control Box
				</label>
				<!-- {#if }
					
				{/if} -->
				<br />
				<label for="pwrReset" id="question"
					>Is there a “fuel reset” button on the face of the unit?
				</label>
				<input class="border-4 m-2 pr-1" type="num" id="form-input" name="pwrReset" />
				<br />
				<label for="mainReset" id="question"
					>If unit is outside where is the main reset for the E-Stop circuit?</label
				>
				<input class="border-4 m-2 pr-4" type="num" id="form-input" name="mainReset" />
				<br />
				<br />
			</div>
			<h2 class="uppercase m-5 bg-yellow-200">motor control and dispenser info</h2>
			<div class="m-6 p-2 grid">
				<label for="motorStyle" id="question"
					>What style motor controllers are at the site? (i.e. MAGVFC, STP-IST, STP-CBS, Red Jacket
					etc..)</label
				>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="motorStyle" />
				<br />
				<label for="otherStyle" id="question">If other please specify type</label>
				<input class="border-4 m-2 pr-4" type="text" id="form-input" name="otherStyle" />
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
				Once you hit the Submit button, email the text file to either me (jjordan@royalfarms) or to
				Curtis
			</p>
			<button class="bg-blue-700 text-white p-2 m-5 align-center text-lg" on:click={submitForm}
				>Submit</button
			>
		</div>
	</div>
</body>

<style>
	h2 {
		font-size: 1.4rem;
		text-align: center;
	}
	label {
		font-size: 1.3rem;
	}
	/* move the button to the center of the screen */
	.align-center {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
</style>
