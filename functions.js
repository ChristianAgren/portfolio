window.addEventListener('load', loadPage)

function loadPage() {
    console.log(rotateAstronauts());
    
}


function rotateAstronauts() {
    const   astroOne = document.querySelector('div.astronaut'),
            astroTwo = document.querySelector('div.second_astronaut'),
            firstRandomValue = randomizeOutput(),
            secondRandomValue = randomizeOutput();

            console.log(typeof astroOne);
            

        addRotateAnimation (astroOne, firstRandomValue)    
        addRotateAnimation (astroTwo, secondRandomValue)    
}

/**
 * Adds animation to classlist
 * @param {Object} div Node that get added animationclass
 * @param {Number} value Randomized value that determines rotation
 */
function addRotateAnimation(div, value) {
    if (value === 1) {
        div.classList.add('rotateClockwise')
    }
    else {
        div.classList.add('rotateCounterClockwise')
    }
}

function randomizeOutput() {
    let randomValue = Math.round(1 * Math.random(1, 2));
    
    return randomValue
}

