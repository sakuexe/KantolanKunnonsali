// lukee json tiedoston avatessa

fetch("../aukioloajat.json")
    .then(response => response.json())
    .then(jsondata => {
        let aukioloajat = document.querySelectorAll(".aukioloaika")

        /* 
            Aukioloajat -muuttuja sisältää sivun 8 elementtiä: "Maanantai", "Tiistai, "Keskiviikko", "Torstai", "Perjantai", "Lauantai", "Sunnuntain" 
            sekä "Avainkortilla" aikataulutekstit
            ---
            aukioloajat[0] = Maanantai          - index.html, rivi 99
            aukioloajat[1] = Tiistai            - index.html, rivi 107
            aukioloajat[2] = Keskiviikko        - index.html, rivi 115
            aukioloajat[3] = Torstai            - index.html, rivi 123
            aukioloajat[4] = Perjantai          - index.html, rivi 131
            aukioloajat[5] = Lauantai           - index.html, rivi 139
            aukioloajat[6] = Sunnuntai          - index.html, rivi 146
            aukioloajat[7] = Avainkortilla      - index.html, rivi 150
            ---

            Tekstielementeillä on HTML:ässä classit ".aukioloaika" joiden avulla halutut elementit haetaan
            ja tämän avulla voimme muuttaa elementin sisäistä tekstiä json dataan.
        */

        aukioloajat[0].innerHTML = jsondata.Maanantai
        aukioloajat[1].innerHTML = jsondata.Tiistai
        aukioloajat[2].innerHTML = jsondata.Keskiviikko
        aukioloajat[3].innerHTML = jsondata.Torstai
        aukioloajat[4].innerHTML = jsondata.Perjantai
        aukioloajat[5].innerHTML = jsondata.Lauantai
        aukioloajat[6].innerHTML = jsondata.Sunnuntai
        aukioloajat[7].innerHTML = jsondata.Avainkortilla
    })