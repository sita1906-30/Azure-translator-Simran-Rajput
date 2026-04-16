async function translateText() {
    const text = document.getElementById("inputText").value;

    const languages = [
        document.getElementById("lang1").value,
        document.getElementById("lang2").value,
        document.getElementById("lang3").value,
        document.getElementById("lang4").value,
        document.getElementById("lang5").value
    ];

    const endpoint = "https://api.cognitive.microsofttranslator.com/";
    const key = "YOUR_AZURE_TRANSLATOR_KEY"; // Replace with a secure value in deployment
    const region = "southeastasia";

    const url = `${endpoint}/translate?api-version=3.0&to=${languages.join("&to=")}`;

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
        outputHTML += `<p><strong>${languages[index]}:</strong> ${t.text}</p>`;
    });

    document.getElementById("output").innerHTML = outputHTML;
}