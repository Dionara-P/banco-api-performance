# banco-api-performance

Performance testing project for the [Banco API](https://github.com/juliodelimas/banco-api), built with JavaScript and K6. This project aims to validate the responsiveness, stability, and scalability of banking operations through automated load and stress tests.

## 📌 Introduction

This repository contains performance test scripts targeting the Banco REST API. It helps simulate real-world usage scenarios such as login, transfers, and account queries, ensuring the system behaves reliably under different loads.

## 🛠️ Technologies Used

- **JavaScript** – scripting language for test logic
- **K6** – performance testing tool  
  [K6 Documentation](https://k6.io/docs/)
- **Dotenv** – environment variable management  
  [Dotenv Docs](https://github.com/motdotla/dotenv)

## 📁 Repository Structure
banco-api-performance/ 
├── fixtures/ 
├── helpers/ 
├── utils/ 
├── login.tests.js   
├── transfer.tests.js 
├── config/
├── README.md


## 🎯 Purpose of Each Folder/File

- `tests/` – Contains individual test scripts for different API endpoints.
- `.env` – Stores environment variables such as the base URL of the API.
- `README.md` – Project documentation and usage instructions.

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dionara-P/banco-api-performance.git
   cd banco-api-performance
2. **- Install K6 Follow instructions at K6 Installation Guide**

3. **Create a config.local.json**
   ```Replace the URL with the actual endpoint where the Banco API is running
   
k6 run tests/login.tests.js / set "K6_WEB_DASHBOARD=true" && k6 run tests/login.tests.js

   
