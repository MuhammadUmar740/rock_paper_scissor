let obj = {1:"rock",2:"paper",3:"scissor"};
let randomWord;
let userWord;
let computerWord;
let player_score=0;
let computer_score=0;
let playAgain = true;
document.getElementById('rock').addEventListener('click',()=>{
    userWord = "rock";
    randomWord = Math.floor(Math.random() *3)+1;
    computerWord = obj[randomWord];
    console.log(computerWord);
    RPS(userWord,computerWord);
    computer_enter(computerWord);
})
document.getElementById('paper').addEventListener('click' , ()=>{
    userWord = "paper";
    randomWord = Math.floor(Math.random() *3)+1;
    computerWord = obj[randomWord];
    RPS(userWord,computerWord);
    console.log(computerWord);
    computer_enter(computerWord);
})
document.getElementById('scissors').addEventListener('click' , ()=>{
    userWord = "scissor";
    randomWord = Math.floor(Math.random() *3)+1;
    computerWord = obj[randomWord];
    RPS(userWord,computerWord);
    console.log(computerWord);
    computer_enter(computerWord);
})
document.querySelector(".play-again").addEventListener('click',()=>{
    document.getElementById("win-lose").innerText = "Lets Begin!!!";
    document.getElementById("win-lose").classList.remove("lose");
    document.getElementById("win-lose").classList.remove("win");
    document.getElementById("win-lose").classList.remove("tie");
    document.querySelector("#rock").disabled = false;
    document.querySelector("#paper").disabled = false;
    document.querySelector("#scissors").disabled = false;
    document.getElementById('computer-enter').src = "image/hidden.png";
})
const RPS = (a,b)=>{
        if((a=="rock" && b=="paper") || (a=="scissor" && b=="rock") || (a=="paper" && b=="scissor")){
            // alert("You Loose Computer Entered " + computerWord);
            document.getElementById("computer-score").innerHTML = computer_score + 1;
            document.getElementById("win-lose").innerText = "YOU LOSE";
            document.getElementById("win-lose").classList.add("lose");
            document.querySelector("#rock").disabled = true;
            document.querySelector("#paper").disabled = true;
            document.querySelector("#scissors").disabled = true;

            computer_score ++;
        }
        else if((a=="rock" && b=="scissor") || (a=="paper" && b=="rock") || (a=="scissor" && b=="paper")){
            // alert("You Win Computer Entered " + computerWord);
            document.getElementById("player-score").innerHTML = player_score + 1;
            document.getElementById("win-lose").innerText = "YOU WIN";
            document.getElementById("win-lose").classList.add("win");
            document.querySelector("#rock").disabled = true;
            document.querySelector("#paper").disabled = true;
            document.querySelector("#scissors").disabled = true;
            player_score ++;
        }
        else if((a=="rock" && b=="rock") || (a=="paper" && b=="paper") || (a=="scissor" && b=="scissor")){
            document.querySelector("#rock").disabled = true;
            document.querySelector("#paper").disabled = true;
            document.querySelector("#scissors").disabled = true;
            document.getElementById("win-lose").innerText = "Its a TIE";
            document.getElementById("win-lose").classList.add("tie");
            // alert("It's a Tie Computer also entered " + computerWord);
        }
        // else{
        //     alert("You entered wrong word");
        //     playAgain = confirm("Do you want to play Again...");
        // }
	};


const computer_enter = (computerWord) =>{
    console.log(computerWord);
    if(computerWord == 'rock'){
        document.getElementById('computer-enter').src = "image/rock1.jpg";
    }
    else if(computerWord == 'paper'){
        document.getElementById('computer-enter').src = "image/paper.jpg";
    }
    else{
        document.getElementById('computer-enter').src = "image/scissor.jpg";
    }
}