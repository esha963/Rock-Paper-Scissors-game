/*--------------------STEP 1-----------------------*/

// two varibles banye gy score ko track krny ky liya user or computer ky
let userScore = 0;
let compScore = 0;

/*Ab is chez ko access krna hy ky knsy choice ko click kiya ja raha hy
isko track kare gy hum to isliya tino choices ko pehly access krna hy*/
const choices = document.querySelectorAll(".choice");


// msg ko change krn ahy after winner announce 
let message = document.querySelector("#msg");

// user comp score ky <p> ko access krna hy taka score ko update kr dein
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");





/*--------------------STEP 4-----------------------*/
//Random choice computer ki generate krny ky liya ek function banye gy
const genComputerChoice = () => {
    /*options ko array my store is liya kiya taka comp randomly koi ek string ko select kare*/
    const options = ["rock", "paper", "scissors"];
    //rock,paper,scissor
    // random() function use to generate random index 0-2 for options array
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};


/*--------------------STEP 3-----------------------*/
/*Ab ek function bana hy jiss sy computer ki choice ka pata chaly ga
tab hi game play hogy jab dono players hn gy 

Ab hum ek random choice generate kare gy then decide kare gy user winner hy ya computer
or score ko update kare gy ya sara kaam playGame ka function perform kare ga*/

/*--------------------STEP 5-----------------------*/
// Draw Game fumction
const drawGame = () => {
    console.log(" Game was draw ");
    message.innerText = "Game was Draw";
    message.style.backgroundColor = "#081b31";

}
// Show winner function
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) //true
    {
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("You are Winner"); console pr ya print hoga no screen
        message.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("You lose");
        message.innerText = `You lost.Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //user ki choice  pehly pata honi chhy
    console.log("user choice = ", userChoice);
    //   Generate Computer choice (ab is ky liya bhi hum ek function banye gy or is type ki programing ko modular way kahty hy apny hr choty choty kaam ko function my krna)
    const compChoice = genComputerChoice();
    console.log("comp choice = ", compChoice);
    // Take decision who is winner 
    if (userChoice === compChoice) {
        drawGame();  // Drawgame 
    }
    else {
        //var bana hy taka winner ki value ko true false kr saky
        let userWin = true;
        if (userChoice === "rock")
        //computer ki chice paper,scissors
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //comp choice rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else //scissors for user
        {
            //rock,paper for computer
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

/*--------------------STEP 2-----------------------*/
// ab in pr addEventListener krna hy foreach loop ka use kr ky


choices.forEach((choice) => {
    //hr individual choice rock,paper,scissor pr event listener add kare gy taka phr is pr click krny sy function perform ho

    choice.addEventListener("click", () => {
        /*ya userChoice var sy hum ny is div ki id ko select kiya hy jis pr user click kr raha hy
        is sy hum ko user ki choice ka pata chal raha hy */
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        //playGame then run hoga or isko user ki choice pass ki jaye gy or then decision hoga winner ka
        playGame(userChoice);
    })
});
