const HumanWizardDisplay = document.getElementById("HumanWizard")
const  BotWizardsDisplay= document.getElementById("BotWizards")
const DefeatDisplay = document.getElementById("Defeat")

const magicChoices = document.querySelectorAll("button")

let HumanWizard
let BotWizards
let Defeat
magicChoices.forEach(magicChoices => magicChoices.addEventListener( "click", (e) =>{
    HumanWizard = e.target.id

    HumanWizardDisplay. innerHTML= HumanWizard
    generateBotWizards()
    getDefeat()
}))

function  generateBotWizards(){
    const randomNumber = Math.floor( Math.random() * 4) +1
    if (randomNumber === 1)
    {
        BotWizards = "Fire"
        
    }
    if(randomNumber === 2)
    {
        BotWizards = "Freeze"
    }
    if(randomNumber === 3)
    {
        BotWizards = "Lightning"
    }

    if (randomNumber === 4)
    {
        BotWizards = "Tear"
    }

    BotWizardsDisplay. innerHTML= BotWizards
}


function getDefeat()
{
    if (BotWizards === HumanWizard)
    {
        Defeat = "Its  A Draw, I demand a Re challenge "
    }

    if(BotWizards === "Fire" && HumanWizard === "Freeze") 
    {
        Defeat = "you Lost! Predictable!"
    }
    if(BotWizards === "Freeze" && HumanWizard === "Fire") 
    {
        Defeat = "I Am victor"
    }

    if(BotWizards === "Fire" && HumanWizard === "Lightning") 
    {
        Defeat = "You lose Knave"
    }

    if(BotWizards === "Fire" && HumanWizard === "Tear") 
    {
        Defeat = "You are a worthy foe but I take this round"
    }
    
    

   

    if(BotWizards === "Freeze" && HumanWizard === "Lightning") 
    {
        Defeat = "I have won"
    }

    if(BotWizards === "Freeze" && HumanWizard === "Tear") 
    {
        Defeat = "Victory is yours"
    }

    if(BotWizards === "Lightning" && HumanWizard === "Fire") 
    {
        Defeat = "An admiral defeat"
    }

    if(BotWizards === "Lightning" && HumanWizard === "Freeze") 
    {
        Defeat = "This is an unacceptable defeat"
    }

    if(BotWizards === "Lightning" && HumanWizard === "Tear") 
    {
        Defeat = "Such a week choice"
    }

    if(BotWizards === "Tear" && HumanWizard === "Freeze") 
    {
        Defeat = "A win"
    }

    if(BotWizards === "Tear" && HumanWizard === "Fire") 
    {
        Defeat = "You Cheat"
    }

    if(BotWizards === "Tear" && HumanWizard === "Lightning")  
    {
        Defeat = "A loss"
    }

      DefeatDisplay.innerHTML= Defeat
}

