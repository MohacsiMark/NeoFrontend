document.addEventListener("DOMContentLoaded", function () {
    const lista = document.getElementById("koncertLista");

    fetch(API_URL + "/koncertek")
        .then(response => {
            if (!response.ok) {
                throw new Error("Nem sikerült betölteni a koncerteket.");
            }
            return response.json();
        })
        .then(adat => {
            const koncertek = adat.result;
            lista.innerHTML = "";

            if (!koncertek || koncertek.length === 0) {
                lista.textContent = "Jelenleg nincs koncert feltöltve.";
                return;
            }

            koncertek.forEach(koncert => {
                const datum = new Date(koncert.datum).toLocaleDateString("hu-HU");
                lista.innerHTML += `
                    <div class="koncert">
                        <h2>${koncert.helyszin}</h2>
                        <p>${datum}</p>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.log("Hiba:", error);
            lista.textContent = "Nem sikerült betölteni a koncerteket. Ellenőrizd, hogy fut-e a C# API.";
        });
});
