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

const galleryButton = document.querySelectorAll(".gallery-btn")
const galleryModal = document.querySelector("#gallery-modal")
const navBar = document.getElementsByTagName("nav")[0]

for (let index = 0; index < galleryButton.length; index++) {

    galleryButton[index].addEventListener("click", _ => {

        // klikatessa "selaa salimme kuvia tästä >" tekstiä annetaan gallerialle .visible classi
        // joka tekee elementistä näkyvän
        galleryModal.classList.add("visible")
    
        // poistetaan myös navigaatio palkki näkyvistä
        navBar.classList.add("d-none")
    })
}


galleryModal.addEventListener("click", clickedElement => {

    // tarkistetaan että onko klikattu elementti kuvagallerian ulkopuolella
    if (clickedElement.target.classList.contains("middle")) {
        
        // jos on klikattu ulkopuolelle niin poistetaan galleria näkyvistä
        galleryModal.classList.remove("visible")
        // ja palautetaan navigaatiopalkki takaisin näkyviin
        navBar.classList.remove("d-none")

    }
})

// Gallerian thumbnailien scrollaus nappulat

let leftScroll = document.querySelectorAll(".left-scroll")
let rightScroll = document.querySelectorAll(".right-scroll")

for (let index = 0; index < leftScroll.length; index++) {   // loopataan läpi molemmat vasemmat thumbnail scrolli nappulat

    leftScroll[index].addEventListener('click', _ => {

        // annetaan molemmille nappuloille funktio klikatessa
        if (slider.scrollLeft <= 320) return slider.scrollLeft = 2544, checkIndicator() // jos ollaan jo tarpeeksi vasemmalla klikatessa vasempaa niin hypätään loppuun

        slider.scrollLeft -= 322    // jos ei, niin scrollataan vasemmalle yhden kuvan verran
        checkIndicator()    // lopuksi "refreshataan" thumbnailien indikaattori
    })

}

for (let index = 0; index < leftScroll.length; index++) {   // sama prosessi kuin rivin 56, vasenScrolli nappuloissa, mutta usko tai älä, oikealle puolelle

    rightScroll[index].addEventListener('click', _ => {
        if (slider.scrollLeft >= 2544) return slider.scrollLeft = 0, checkIndicator()
    
        slider.scrollLeft += 322
        checkIndicator()
    })

}

// Gallerialistan indikaattorit

// scrollIndicators ovat div:it thumbnailien alapuolella, tallennetaan ne globaaliin, const muuttujaan
const scrollIndicators = document.querySelectorAll(".thumbnail-indicators")

for(let index = 0; index < scrollIndicators.length; index++) {      // loopataan läpi kaikki indikaattorit ja annetaan niille funktio klikatessa

    scrollIndicators[index].addEventListener('click', element => {

        /*
            tarkistetaan ensin että onko klikattu elementti kuinka mones indikaattori.
            tämän jälkeen muutetaan slider elementin scroll:in sijaintia jotta saadaan haluttu kuva vasempaan kulmaan.
            
            kun scroll sijainti on muutettu niin tehdään vielä tarkistus ja "refresh" sille että oikeassa indikaattorissa
            "palaa valo" checkIndicator() funktiolla
        */

        if (element.target == scrollIndicators[8]) return slider.scrollLeft = 2544, checkIndicator()
        if (element.target == scrollIndicators[7]) return slider.scrollLeft = 2254, checkIndicator()
        if (element.target == scrollIndicators[6]) return slider.scrollLeft = 1932, checkIndicator()    // päätin kirjoittaa koodin useilla return
        if (element.target == scrollIndicators[5]) return slider.scrollLeft = 1610, checkIndicator()    // komennoilla sillä sen avulla siitä sai
        if (element.target == scrollIndicators[4]) return slider.scrollLeft = 1288, checkIndicator()    // huomattavasti helpommin luettavan,
        if (element.target == scrollIndicators[3]) return slider.scrollLeft = 966, checkIndicator()     // kun ei ole miljoona sisennystä.
        if (element.target == scrollIndicators[2]) return slider.scrollLeft = 644, checkIndicator()
        if (element.target == scrollIndicators[1]) return slider.scrollLeft = 322, checkIndicator()

        slider.scrollLeft = 0, checkIndicator() // jos klikattu elementti on einsimmäinen, sijoitetaan scrolli ihan alkuun
    })

}

function checkIndicator() {     // funktio joka päivittää thumbnailien indikaattorin scroll:in sijainnin perusteella

    // ensimmäiseksi etsitään thumbail indikaattori jolla on classi .active
    // tältä elementiltä poistetaan classi .active
    document.querySelector(".thumbnail-indicators.active").classList.remove("active")

    // seuraavaksi tarkistetaan että onko elementin slider sisäinen scroll ohittanut kuvia
    // jos scroll:in sijainti on yli pisteen niin lisätään sitä pistettä indikoivaan div:iin classi .active
    if (slider.scrollLeft >= 2544) return scrollIndicators[8].classList.add("active")
    if (slider.scrollLeft >= 2200) return scrollIndicators[7].classList.add("active")
    if (slider.scrollLeft >= 1906) return scrollIndicators[6].classList.add("active")
    if (slider.scrollLeft >= 1540) return scrollIndicators[5].classList.add("active")
    if (slider.scrollLeft >= 1230) return scrollIndicators[4].classList.add("active")
    if (slider.scrollLeft >= 930) return scrollIndicators[3].classList.add("active")
    if (slider.scrollLeft >= 580) return scrollIndicators[2].classList.add("active")
    if (slider.scrollLeft >= 250) return scrollIndicators[1].classList.add("active")

    scrollIndicators[0].classList.add("active") // jos ei mikään näistä pisteistä ole ylitetty olemme ensimmäisessä kuvassa ja lisäämme .active classin siihen

}