var timer = null;
var countdownNumber = 10;


function changeState(state){

	document.body.className = 'bodystate' + state;
	clearInterval(timer);
	 countdownNumber = 10;
	 document.getElementById('countdown').innerHTML = countdownNumber;

	 if (state==1){

	 	document.getElementById("nervous").className = 'nervous';
	 	document.getElementById("excited").className = 'excited';
	 }
	if (state==2){

		timer = setInterval(function(){
			countdownNumber = countdownNumber - 1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			


			if (countdownNumber > 4 && countdownNumber <= 7){

				document.getElementById("nervous").className = 'nervous show';

			}

			else{

				document.getElementById("nervous").className = 'nervous';

			}

			if (countdownNumber > 1 && countdownNumber <= 4){

				document.getElementById("excited").className = 'excited show';

			}

			else{

				document.getElementById("excited").className = 'excited';

			}

			if (countdownNumber < 1){

				changeState(3);

			}

		}, 500)
		
	}
	
	else if (state == 3){

		var result = setTimeout(function(){

			var randomNumber = Math.round(Math.random()*10);
			console.log(randomNumber);
			if (randomNumber>5){

				changeState(4);

			}

			else {

				changeState(5);

			}

		}, 2000)

	}

}

