# 🌍 Azure Translator Dashboard (User-Driven API)

A dynamic and interactive **multilingual translation web application** powered by Microsoft Azure Translator API.
This project allows users to **enter their own Azure credentials** and translate text into **five languages at once** using a clean dashboard.

---

## 🚀 Features

* 🔑 User provides **API Key, Endpoint, and Region**
* 🌐 Translate text into **any 5 languages simultaneously**
* 🌎 Simple language selection interface
* ⚡ Real-time translation using Azure Translator
* 🎨 Responsive HTML/CSS/JS UI
* 🔒 No hardcoded secrets in the repository

---

## 📁 Project Structure

```text
TRANSLATOR/
├── index.html     # Main page and translation UI
├── style.css      # Visual styling and layout
├── script.js      # Azure Translator API logic
├── README.md      # Project documentation
└── azure-translator/  # Optional Azure helper files or resources
```

---

## ⚙️ How It Works

1. Enter your Azure Translator credentials:
   * API Key
   * Endpoint
   * Region
2. Type the text that you want translated.
3. Select up to 5 target languages.
4. Click **Translate**.
5. The app sends the request to Azure and displays the translated text.

---

## 🧑‍💻 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/sita1906-30/Azure-translator-Simran-Rajput.git
cd TRANSLATOR
```

### 2️⃣ Open the project

```bash
code .
```

### 3️⃣ Run locally

* Install the **Live Server** extension in VS Code
* Open `index.html` with Live Server

If you prefer, you can also open `index.html` directly in your browser, but Live Server provides a better local development experience.

---

## 🔑 Azure Setup

1. Sign in to the Azure Portal.
2. Create a **Translator Resource**.
3. Copy the **Key**, **Endpoint**, and **Region**.
4. Paste them into the input fields in the app.

---

## 🌐 Deployment

This repository can be deployed using GitHub Pages or any static hosting provider.

### GitHub Pages

1. Push your code to GitHub.
2. Go to repository Settings → Pages.
3. Select the `main` branch and the `/ (root)` folder.
4. Save and wait for the site URL to become available.

### Azure Static Web Apps / Netlify

* Deploy the repository directly from GitHub.
* Configure the build settings if required.
* The app is static and does not need a backend for the current UI.

> Note: For production, avoid placing secret API keys in the browser. Use a backend service to keep keys secure.

---

## ⚠️ Security Note

This project is designed for learning and demo purposes.

* Do not hardcode Azure credentials in `script.js`.
* Use user-provided credentials in the browser only.
* For production, move authentication and translation requests to a secure server.

---

## 💡 Future Improvements

* Add dark/light theme support
* Add speech-to-text or text-to-speech
* Save translation history locally
* Convert to a backend-powered app for secure key handling
* Publish as a deployed web app on Azure or Netlify

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, make improvements, and open a pull request.

---

## 📄 License

MIT License

---

## 📌 Repository

https://github.com/sita1906-30/Azure-translator-Simran-Rajput
