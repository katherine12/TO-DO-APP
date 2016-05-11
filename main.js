
function getInputValue(){
	var inputBox= document.getElementById("inputBox");
	return inputBox.value;
}

function tweet(){
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== ""){
		doTweet(inputBoxValue);
		clean();
	}
}

function doTweet(tweetText){
	var tweets = document.getElementById("tweets");

	//crear el elemento
	var elemento = document.createElement("div");
	elemento.className = "tweet";
	elemento.innerHTML = tweetText;

	var elemento = document.createElement("div");
	elemento.className = "cheklist";
	elemento.innerHTML =  tweetText;

	// var elemento = document.createElement("input");
	// elemento.className = "glyphicon";
	// elemento.innerHTML =  tweets;

	// var  elemento = document.createElement("i");
	// elemento.className = "bote";
	// elemento.innerHTML =  tweets;



	//Agregar elementos a tweets
	tweets.appendChild(elemento);

	var ex= tweets.lastChild;
	alert(ex.innerHTML);
}
function clean(){
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}