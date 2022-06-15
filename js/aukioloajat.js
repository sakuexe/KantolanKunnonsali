// lukee json tiedoston avatessa

fetch("../aukioloajat.json")
    .then(response => response.json())
    .then(jsondata => {
        console.log(jsondata.MaPe, jsondata.Lauantai, jsondata.Sunnuntai)   // Debuggaus kommentti
        let aukioloajat = document.getElementsByClassName("aukioloaika")
        console.log(aukioloajat)    // Debuggaus kommentti

        /* 
            Aukioloajat -muuttuja sisältää sivun kolme elementtiä: "MaPe", "Lauantai" ja "Sunnuntain" aiktaulutekstit
            ---
            aukioloajat[0] = MaPe
            aukioloajat[1] = Lauantai
            aukioloajat[2] = Sunnuntai
            aukioloajat[3] = Avainkortilla
            ---

            Tekstielementeillä on HTML:ässä classit ".aukioloaika" joiden avulla halutut elementit haetaan
            ja tämän avulla voimme muuttaa elementin sisäistä tekstiä json dataan.
        */

        aukioloajat[0].innerHTML = jsondata.MaPe
        aukioloajat[1].innerHTML = jsondata.Lauantai
        aukioloajat[2].innerHTML = jsondata.Sunnuntai
        aukioloajat[3].innerHTML = jsondata.Avainkortilla
    })