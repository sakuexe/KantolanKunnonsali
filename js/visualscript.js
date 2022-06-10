// Vaihtaa nimen navbariin kun scrollataan tarpeeksi alas
const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', () => {
    let navHeader = document.getElementById("nav-header")
    let currentSection = document.getElementsByClassName("active")[0]

    if (navHeader.innerHTML !== currentSection.innerHTML) {
        
        navHeader.innerHTML = currentSection.innerHTML
        console.log(currentSection, navHeader)

        if (!currentSection.parentElement.classList.contains("nav-hide")) {

            let hiddenNavs = document.getElementsByClassName("nav-hide")
            for (let i = 0; i < hiddenNavs.length; i++) {
                hiddenNavs[i].classList.remove("nav-hide")
            }

            currentSection.parentElement.classList.add("nav-hide")
        }
    }
    else {
        navHeader.innerHTML = "Galleria"
    }
})