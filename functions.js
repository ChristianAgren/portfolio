window.addEventListener('load', loadPage)

/**
 * Runs functions on page load
 */
function loadPage() {
    rotateImages();   
    declareEventListeners();
}


/**
 * Declares eventlisteners for scrollbuttons
 */
function declareEventListeners() {
    const   mainScrollButtons = document.querySelectorAll('div.endicon'),
            aboutScrollButtons = document.querySelectorAll('div.scroll'),
            aboutCarouselDiv = document.querySelector('div.about');
    
    aboutScrollButtons.forEach(button => {
        button.addEventListener('click', gotoNextAboutSection)
    });

    mainScrollButtons.forEach(button => {
        button.addEventListener('click', gotoNextParagraph)        
    });

    aboutCarouselDiv.addEventListener('scroll', gotoNextAboutSection)
}

function gotoNextAboutSection(event) {
    // const   getSections = document.querySelectorAll('div.about_card');
    console.log(event);
    
    // if (event.target.innerText === "keyboard_arrow_right") {
    //     aboutSectionIndex++;
    //     getSections[aboutSectionIndex].scrollIntoView({behavior:'smooth'})
    //     console.log(getSections, aboutSectionIndex);
    // }

    const   getSections = document.querySelectorAll('div.about_card');
    let     sectionsArray = [],
            aboutSectionIndex = 0;

    getSections.forEach(card => {
                sectionsArray.push(aboutSectionIndex)
                aboutSectionIndex++
    });

    console.log(getSections, sectionsArray);
    
    
}

/**
 * Locates next container and scrolls it into view
 * @param {MouseEvent} event Trigger for user input
 */
function gotoNextParagraph(event) {
    const   getContainers = document.querySelectorAll('div.main');
    let     pageIndex = 0;
    
    if (event.target.innerText === "more_horiz") {
        console.log(getContainers[0]);
        getContainers[0].scrollIntoView({behavior:'smooth'})  //Bad mobile support, fix in future
    }
    else {
        getContainers.forEach(container => {
            pageIndex++
            checkif = container.contains(event.target)
            
            if (checkif) {   
            console.log(getContainers[pageIndex]);
            getContainers[pageIndex].scrollIntoView({behavior:'smooth'}) //Bad mobile support, fix in future
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
