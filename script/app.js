// Elements HTML
const mainZone = document.querySelector('.mainZone');

// Constantes
const clapSound = new Audio('media/sounds/clap.mp3');

// Variables

// EventListeners
mainZone.addEventListener('click', mainClick);
document.body.addEventListener('keypress', keyPressed);

// Functions
function keyPressed (e)
{
    // console.log(e);
    
    switch(e.code) {
        case 'Space':
            mainClick();
            break;
    }
}

function generatecolor ()
{
    let rslt = "";
    for (let index = 0; index < 6; index++) {
        let nb = Math.floor(Math.random()*16);
        if (nb < 10) {
            nb += 48;
        } else {
            nb += 55;
        }
        rslt = rslt + String.fromCharCode(nb);
    }
    return "#" + rslt;
}

function mainClick ()
{
    mainZone.style.backgroundColor = generatecolor();
    clapSound.currentTime = 0;
    clapSound.play();
}

// Main code
mainZone.style.backgroundColor = generatecolor();