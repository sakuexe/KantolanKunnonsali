// Vaihtaa nimen navbariin kun scrollataan tarpeeksi alas
const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')

firstScrollSpyEl.addEventListener('activate.bs.scrollspy', () => {

    // lisätään funktio joka aktivoituu aina kun bootstrapin scrollspy
    // muuttaa aktiivisen sektion
    let navHeader = document.getElementById("nav-header")
    let currentSection = document.getElementsByClassName("active")[0]

    // muutetaan pienten näyttöjen navigaatio otsikko scrollspyn aktiiviseksi sektioniksi (galleria / vuokraa)
    navHeader.innerHTML = currentSection.innerHTML

    // etsitään elementti jolla on classi .nav-hide ja poistetaan kyseinen classi
    document.querySelector(".nav-hide").classList.remove("nav-hide")

    // ja piilotetaan tämänhetkisen aktiivisen sektion otsikko navigaatio listasta
    // (tämä tehdään sen takia koska aktiiviselle sektionille on jo isompi otsikko nav listan yläpuolella)
    currentSection.parentElement.classList.add("nav-hide")
})