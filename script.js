function ageIndays()
{
var year=prompt("Enter year:");
var ageIndayss=(2021-year)*365;
var h1=document.createElement('h1');
var textAnswer=document.createTextNode('You are'+ ageIndayss + 'days old');
h1.setAttribute('id','ageIndays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset()
{
document.getElementById('ageIndays').remove();
}

function catGenerator()
{
	var image = document.createElement('img');
	var div= document.getElementById('flex-cat-gen');
	image.src="https://thecatapi.com/api/images/get?format=src&type=gifsize=small";
	div.appendChild(image);
}
function rpsGame(yourChoice)
{
	console.log(yourChoice);
	var humanChoice, botChoice;
	humanChoice=yourChoice.id;

	botChoice=numberTochoice(randToint());
	console.log('computerChoice:',botChoice);

	results=decideWinner(humanChoice,botChoice);
	console.log(results);

	message= finalMessage(results);
	console.log(message);

	rpsfrontEnd(yourChoice.id,botChoice,message);
}

function randToint()
{
return Math.floor(Math.random()*3);
}

function numberTochoice(number)
{
   return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice)
{
var rpsDatabase={
	'rock':{'scissors':1,'rock':0.5,'paper':0},
	'paper':{'rock':1,'paper':0.5,'scissors':0},
	'scissors':{'paper':1,'scissors':0.5,'rock':0}
};
var yourScore=rpsDatabase[yourChoice][computerChoice];
var computerScore=rpsDatabase[computerChoice][yourChoice];
return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore])
{
	if (yourScore===0) {
		return {'message':'You Lost!','color':'red'};
	}
	else if(yourScore===0.5)
	{
		return {'message':'You tied!','color':'yellow'};
	}
	else
	{
     return {'message':'You Won!','color':'green'};
	}

}

function rpsfrontEnd([humanimageChoice,botimageChoice,finalMessage])
{

	var imagesDatabase={
		'rock':document.getElementById('rock').src,
		'paper':document.getElementById('paper').src,
		'scissors':document.getElementById('scissors').src
	}


	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();
 

 var humanDiv=document.createElement('div');
 var botDiv=document.createElement('div');
 var messageDiv=document.createElement('div');

 humanDiv.innerHTML="<img src='"+ imagesDatabase[humanimageChoice]+ "'height=150px weight=150px >"
 messageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+"font-size=30px padding=30px;'>"+finalMessage['message']+"</h1>"
 botDiv.innerHTML="<img src='"+ imagesDatabase[botimageChoice]+ "'height=150px weight=150px >"
 
 document.getElementById('flex-box-rps-div').appendChild(humanDiv);
 document.getElementById('flex-box-rps-div').appendChild(messageDiv);
 document.getElementById('flex-box-rps-div').appendChild(botDiv);
 
}
var allbuttons=document.getElementsByTagName('button');
console.log(allbuttons);

var copyallbuttons=[];
for (let i =0 ; i<allbuttons.length;i++)
{
	copyallbuttons.push(allbuttons[i].classList[1]);

}
console.log(copyallbuttons);

function buttoncolorchange(buttonthingy){
	if (buttonthingy.value=='red') {
		buttonsRed();
	} else if(buttonthingy.value=='green'){
		buttonsGreen();
	} else if(buttonthingy.value=='reset'){
		buttonsColorReset();
	}else if(buttonthingy.value=='random'){
		randomColors();
	}
}
function buttonsRed(){
	for(let i=0; i<allbuttons.length; i++){
		allbuttons[i].classList.remove(allbuttons[i].classList[1]);
		allbuttons[i].classList.add('btn-danger');

	}
}
function buttonsGreen(){
	for(let i=0; i<allbuttons.length; i++){
		allbuttons[i].classList.remove(allbuttons[i].classList[1]);
		allbuttons[i].classList.add('btn-success');

	}
}
function buttonsColorReset(){
	for(let i=0; i<allbuttons.length; i++){
		allbuttons[i].classList.remove(allbuttons[i].classList[1]);
		allbuttons[i].classList.add(copyallbuttons[i]);

	}
}

function randomColors(){
	let choices =['btn-primary','btn-danger','btn-success', 'btn-warning']

	for(let i=0; i<allbuttons.length; i++){
		let randomNumber= Math.floor(Math.random()*4);
		allbuttons[i].classList.remove(allbuttons[i].classList[1]);
		allbuttons[i].classList.add(choices[randomNumber]);
	}
}
let blackjackGame={
	'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
	'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
};

const YOU= blackjackGame['you']
const DEALER= blackjackGame['dealer']
const hitSound=new Audio('C:/xampp/htdocs/JS/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);

function blackjackHit(){
	let cardImage=document.createElement('img');
	cardImage.src='C:/xampp/htdocs/JS/images/K.png';
	document.querySelector(YOU['div']).appendChild(cardImage);
	hitSound.play();
}

