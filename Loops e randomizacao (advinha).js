let numeroSecreto = 7
let tentativas = 3
let chute

console.log("Bem-vindo ao jogo de adivinhação.")

while(tentativas > 0)
{
    chute = parseInt(prompt("Qual valor você deseja chutar? "))
    if(chute == 7)
    {
        console.log("Parabéns! Você acertou o número.")
        break;
    }
    else
    {
        tentativas--
        if(tentativas > 1)
        {
            console.log(`Que pena você errou. Você tem ${tentativas} tentativas.`)
        }
        else if(tentativas == 1)
        {
            console.log(`Que pena você errou. Você tem ${tentativas} tentativa.`)
        }
        else
        {
            console.log(`Que pena você errou e não tem mais tentativas. O número secreto é ${numeroSecreto}.`)
        }
    }
}