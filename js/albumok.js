document.addEventListener("DOMContentLoaded", function () {
    const lista = document.getElementById("albumLista");

    fetch(API_URL + "/albumok")
        .then(response => {
            if (!response.ok) {
                throw new Error("Nem sikerült betölteni az albumokat.");
            }
            return response.json();
        })
        .then(adat => {
            const albumok = adat.result;
            lista.innerHTML = "";

            if (!albumok || albumok.length === 0) {
                lista.textContent = "Nincs album feltöltve.";
                return;
            }

            albumok.forEach(album => {
                let megtekintes = "Nincs megadott adat";

                if (album.megtekintesekSzama !== null && album.megtekintesekSzama !== undefined) {
                    megtekintes = Number(album.megtekintesekSzama).toLocaleString("hu-HU") + " db megtekintés";
                }

                lista.innerHTML += `
                    <div class="album-sor">
                        <h2>${album.cim} (${album.ev})</h2>
                        <i>${megtekintes}</i>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.log("Hiba:", error);
            lista.textContent = "Nem sikerült betölteni az albumokat. Ellenőrizd, hogy fut-e a C# API.";
        });
});
