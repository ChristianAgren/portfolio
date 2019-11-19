window.addEventListener('load', loadPage)
    
/**
 * Runs functions on page load
 */
function loadPage() {
    rotateImages();   
    declareEventListeners(); 
    createDOMProjectElements();  
}

/**
 * Declares eventlisteners
 */
function declareEventListeners() {
    const   mainScrollButtons = document.querySelectorAll('div.endicon'),
            aboutScrollButtons = document.querySelectorAll('div.scroll');
                
    aboutScrollButtons.forEach(button => {
        button.addEventListener('click', gotoNextAboutSection)
    });
    
    mainScrollButtons.forEach(button => {
        button.addEventListener('click', gotoNextParagraph)        
    });
}

/**
 * Scrolls between character cards in about section
 * @param {MouseEvent} event Triggers when user presses scroll buttons in about
 */
function gotoNextAboutSection(event) {
    const   aboutDiv = document.querySelector('div.about');
    
    if (event.target.innerText === "keyboard_arrow_right") {
        if (aboutDiv.clientWidth === 256) {
            if (aboutDiv.scrollLeft < 288) {
                aboutDiv.scrollLeft = 0
            }
            else {
                aboutDiv.scrollLeft = 288
            }
            aboutDiv.scrollLeft += 288
        }
        else {
            aboutDiv.scrollLeft += aboutDiv.clientWidth
        }
    }
    else {
        if (aboutDiv.clientWidth === 256) {
            if (aboutDiv.scrollLeft > 288 && aboutDiv.scrollLeft < 577) {
                aboutDiv.scrollLeft = 577
            }
            else {
                aboutDiv.scrollLeft = 288
            }
            aboutDiv.scrollLeft -= 288
        }
        else {
            aboutDiv.scrollLeft -= aboutDiv.clientWidth
        }
    }
}

/**
 * Locates next container and scrolls it into view
 * @param {MouseEvent} event Triggers when user presses endicons
 */
function gotoNextParagraph(event) {
    const   getContainers = document.querySelectorAll('div.main');
    let     pageIndex = 0;
    
    if (event.target.innerText === "more_horiz") {
        console.log(getContainers[0]);
        getContainers[0].scrollIntoView({behavior:'smooth'})  //Bad IOSmobile support, fix in future
    }
    else {
        getContainers.forEach(container => {
            pageIndex++
            checkif = container.contains(event.target)
            
            if (checkif) {   
            getContainers[pageIndex].scrollIntoView({behavior:'smooth'}) //Bad IOSmobile support, fix in future
            } 
        });
    } 
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
