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
        button.addEventListener('click', findTargetForScrollButton)
    });
    
    mainScrollButtons.forEach(button => {
        button.addEventListener('click', gotoNextParagraph)        
    });
}

/**
 * Finds the container that needs to be scrolled
 * @param {MouseEvent} event Triggers when user presses scroll buttons in about
 */
function findTargetForScrollButton(event) {
    const   sliderDivs = document.querySelectorAll('div.slider');

    sliderDivs.forEach(div => {
        target = div.contains(event.target)
        if (target) {
            let scrollInitialIndex = Math.floor(div.scrollLeft / 288);
            performScrollinContainer(event, div, scrollInitialIndex)
        }
    }); 
}

/**
 * Scrolls between cards in targeted container
 * @param {MouseEvent} event Triggers when user presses scrollbuttons
 * @param {Element} targetDiv The targeted div that needs to be scrolled
 * @param {Number} scrollIndex Positional index of card slider
 */
function performScrollinContainer(event, targetDiv, scrollIndex) {
    
    if (event.target.innerText === "keyboard_arrow_right") {
        targetDiv.scrollLeft = (scrollIndex + 1) * 288
        
    }
    else if ((event.target.innerText === "keyboard_arrow_left") && (targetDiv.scrollLeft / 288 === scrollIndex)) {
        targetDiv.scrollLeft = (scrollIndex-1) * 288
        
    }
    else {
        targetDiv.scrollLeft = (scrollIndex) * 288
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
 * @param {Element} div Node that get added animationclass
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
