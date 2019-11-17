window.addEventListener('load', loadPage)



/**
 * Runs functions on page load
 */
function loadPage() {
    rotateImages();   

    const downButton = document.querySelectorAll('div.endicon');
    console.log(downButton); 

    
}

/**
 * Manages astronaut rotation
 */
function rotateImages() {
    const   images = document.querySelectorAll('div.spacer_image');

    images.forEach(image => {
        addRotateAnimation(image, randomizeOutput())
    }); 
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

/**
 * Returns 1 or 0 randomly
 */
function randomizeOutput() {
    const randomValue = Math.round(1 * Math.random(1, 2));
    
    return randomValue
}
