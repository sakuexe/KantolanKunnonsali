// lukee json tiedoston avatessa

fetch("../aukioloajat.json")
    .then(response => response.json())
    .then(jsondata => {
        let aukioloajat = document.querySelectorAll(".aukioloaika")

        /* 
            Aukioloajat -muuttuja sisältää sivun 8 elementtiä: "Ma", "Ti, "Ke", "To", "Pe", "Lauantai", "Sunnuntain" ja "Avainkortilla" aiktaulutekstit
            ---
            aukioloajat[0] = Ma                 - index.html, rivi 99
            aukioloajat[1] = Ti                 - index.html, rivi 107
            aukioloajat[2] = Ke                 - index.html, rivi 115
            aukioloajat[3] = To                 - index.html, rivi 123
            aukioloajat[4] = Pe                 - index.html, rivi 131
            aukioloajat[5] = Lauantai           - index.html, rivi 139
            aukioloajat[6] = Sunnuntai          - index.html, rivi 146
            aukioloajat[7] = Avainkortilla      - index.html, rivi 150
            ---

            Tekstielementeillä on HTML:ässä classit ".aukioloaika" joiden avulla halutut elementit haetaan
            ja tämän avulla voimme muuttaa elementin sisäistä tekstiä json dataan.
        */

        aukioloajat[0].innerHTML = jsondata.Ma
        aukioloajat[1].innerHTML = jsondata.Ti
        aukioloajat[2].innerHTML = jsondata.Ke
        aukioloajat[3].innerHTML = jsondata.To
        aukioloajat[4].innerHTML = jsondata.Pe
        aukioloajat[5].innerHTML = jsondata.Lauantai
        aukioloajat[6].innerHTML = jsondata.Sunnuntai
        aukioloajat[7].innerHTML = jsondata.Avainkortilla
    })