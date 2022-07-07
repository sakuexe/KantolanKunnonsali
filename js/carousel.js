// galleria sivun kuva slideri

const slider = document.querySelector('.gallery')
let isDown = false
let startX
let scrollLeft

slider.addEventListener('mousedown', e => {
    isDown = true
    slider.classList.add('mouse-hold')
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
})
slider.addEventListener('mouseleave', _ => {
    isDown = false
    slider.classList.remove('mouse-hold')
})
slider.addEventListener('mouseup', _ => {
    isDown = false
    slider.classList.remove('mouse-hold')
})
slider.addEventListener('mousemove', e => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const SCROLL_SPEED = 1
    const walk = (x - startX) * SCROLL_SPEED
    slider.scrollLeft = scrollLeft - walk
    checkIndicator()
})


// galleria sivun fullscreen galleria -modali

const galleryButton = document.getElementById("gallery-btn")
const galleryModal = document.getElementById("gallery-modal")
const navBar = document.getElementsByTagName("nav")[0]

galleryButton.addEventListener("click", _ => {
    galleryModal.classList.add("visible")
    navBar.classList.add("d-none")
})

galleryModal.addEventListener("click", clickedElement => {
    if (clickedElement.target.classList.contains("middle")) {
        galleryModal.classList.remove("visible")
        navBar.classList.remove("d-none")
    }
})

// gallerialista

let leftScroll = document.querySelector("#left-scroll")
let rightScroll = document.querySelector("#right-scroll")

leftScroll.addEventListener('click', _ => {
    if (slider.scrollLeft <= 320) return slider.scrollLeft = 2544, checkIndicator()

    slider.scrollLeft -= 322
    checkIndicator()
})

rightScroll.addEventListener('click', _ => {
    if (slider.scrollLeft >= 2544) return slider.scrollLeft = 0, checkIndicator()

    slider.scrollLeft += 322
    checkIndicator()
})

// Gallerialistan indikaattorit

const scrollIndicators = document.getElementsByClassName("thumbnail-indicators")

for(let index = 0; index < scrollIndicators.length; index++) {
    scrollIndicators[index].addEventListener('click', element => {

        if (element.target == scrollIndicators[8]) return slider.scrollLeft = 2544, checkIndicator()
        if (element.target == scrollIndicators[7]) return slider.scrollLeft = 2254, checkIndicator()
        if (element.target == scrollIndicators[6]) return slider.scrollLeft = 1932, checkIndicator()
        if (element.target == scrollIndicators[5]) return slider.scrollLeft = 1610, checkIndicator()
        if (element.target == scrollIndicators[4]) return slider.scrollLeft = 1288, checkIndicator()
        if (element.target == scrollIndicators[3]) return slider.scrollLeft = 966, checkIndicator()
        if (element.target == scrollIndicators[2]) return slider.scrollLeft = 644, checkIndicator()
        if (element.target == scrollIndicators[1]) return slider.scrollLeft = 322, checkIndicator()
        slider.scrollLeft = 0, checkIndicator()
    })
}

function checkIndicator() {

    for(let index = 0; index < scrollIndicators.length; index++) {
        scrollIndicators[index].classList.remove("active")
    }

    if (slider.scrollLeft >= 2544) return scrollIndicators[8].classList.add("active")
    if (slider.scrollLeft >= 2200) return scrollIndicators[7].classList.add("active")
    if (slider.scrollLeft >= 1906) return scrollIndicators[6].classList.add("active")
    if (slider.scrollLeft >= 1540) return scrollIndicators[5].classList.add("active")
    if (slider.scrollLeft >= 1230) return scrollIndicators[4].classList.add("active")
    if (slider.scrollLeft >= 930) return scrollIndicators[3].classList.add("active")
    if (slider.scrollLeft >= 580) return scrollIndicators[2].classList.add("active")
    if (slider.scrollLeft >= 250) return scrollIndicators[1].classList.add("active")
    scrollIndicators[0].classList.add("active")
}