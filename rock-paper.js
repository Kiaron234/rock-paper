const move = ['rock','paper','scissors'];

function computerPlay()
{
    return move[Math.floor(Math.random() * move.length)];
}

function playRound(playerSelection,computerSelection)
{
    if (playerSelection === "rock" && computerSelection ==="scissors")
    {
        return "You win! Rock beats scissors";
    }
    else if(playerSelection === "rock" && computerSelection === "paper")
    {
        return "You lose! Paper beats rock"
    }
    else return "Draw!"
}



function game()
{
    for (let i = 0;i<5;i++)
    {
        let playerSelection = prompt('Rock, paper, scissors?');
        const computerSelection = computerPlay();
       console.log(playRound(playerSelection,computerSelection));
    }
}

game();