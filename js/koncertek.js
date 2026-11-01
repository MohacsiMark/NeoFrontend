fetch("../data/koncertek.json")
    .then(response => response.json())
    .then(koncertek => {

        let lista = document.getElementById("koncertLista");

        koncertek.forEach(koncert => {

            lista.innerHTML += `
                <div class="koncert">
                    <h2>${koncert.helyszin}</h2>
                    <p>${koncert.datum}</p>
                </div>
            `;

        });

    })
    .catch(error => {
        console.log("Hiba:", error);
    });