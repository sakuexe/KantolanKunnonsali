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
    checkOffset(document.getElementsByClassName('img-slider'))
})
slider.addEventListener('mouseleave', _ => {
    isDown = false
    slider.classList.remove('mouse-hold')
})
slider.addEventListener('mouseup', _ => {
    isDown = false
    slider.classList.remove('mouse-hold')
    //console.log(document.querySelector(".img-slider:visible"))
})
slider.addEventListener('mousemove', e => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const SCROLL_SPEED = 1
    const walk = (x - startX) * SCROLL_SPEED
    slider.scrollLeft = scrollLeft - walk
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

console.log(rightScroll, leftScroll)

leftScroll.addEventListener('mousedown', element => {
    console.log()
    slider.scrollLeft -= 322
})

rightScroll.addEventListener('mousedown', element => {
    console.log()
    slider.scrollLeft += 322
})