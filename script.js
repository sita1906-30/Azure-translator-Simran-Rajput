const languages = {
    en: { name: "English", flag: "us" },
    hi: { name: "Hindi", flag: "in" },
    fr: { name: "French", flag: "fr" },
    es: { name: "Spanish", flag: "es" },
    ko: { name: "Korean", flag: "kr" },
    de: { name: "German", flag: "de" },
    ja: { name: "Japanese", flag: "jp" }
};

// Create 5 dropdowns dynamically
function createSelectors() {
    const container = document.getElementById("selectors");

    for (let i = 0; i < 5; i++) {
        const div = document.createElement("div");
        div.className = "lang-box";

        const img = document.createElement("img");
        img.src = "https://flagcdn.com/w40/us.png";

        const select = document.createElement("select");

        for (let code in languages) {
            const option = document.createElement("option");
            option.value = code;
            option.text = languages[code].name;
            select.appendChild(option);
        }

        // Update flag when language changes
        select.addEventListener("change", () => {
            const selected = select.value;
            img.src = `https://flagcdn.com/w40/${languages[selected].flag}.png`;
        });

        div.appendChild(img);
        div.appendChild(select);
        container.appendChild(div);
    }
}

createSelectors();

async function translateText() {
    const text = document.getElementById("inputText").value;
    const endpoint = document.getElementById("endpoint").value;
    const key = document.getElementById("apiKey").value;
    const region = document.getElementById("region").value;

    const selects = document.querySelectorAll("select");
    const selectedLangs = [];

    selects.forEach(s => selectedLangs.push(s.value));

    const url = `${endpoint}/translate?api-version=3.0&to=${selectedLangs.join("&to=")}`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Ocp-Apim-Subscription-Key": key,
                "Ocp-Apim-Subscription-Region": region,
                "Content-Type": "application/json"
            },
            body: JSON.stringify([{ Text: text }])
        });

        const data = await response.json();

        let outputHTML = "";
        data[0].translations.forEach((t, index) => {
            outputHTML += `<p><strong>${languages[selectedLangs[index]].name}:</strong> ${t.text}</p>`;
        });

        document.getElementById("output").innerHTML = outputHTML;

    } catch (error) {
        document.getElementById("output").innerHTML = "Error: Check API details or network.";
    }
}