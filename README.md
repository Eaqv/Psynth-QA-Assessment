# SauceDemo Automation Assessment - Psynth 🛒

This repository contains a professional E2E automation framework for the SauceDemo application, developed as part of the QA Engineer technical assessment for **Psynth**.

## 🛠️ Tech Stack
* **Framework:** Cypress 15+
* **Language:** TypeScript
* **Design Pattern:** Page Object Model (POM)
* **CI/CD:** GitHub Actions
* **Reporting:** Artifacts (Videos & Screenshots) integrated into GitHub Actions

## 📂 Project Structure
* `cypress/e2e/`: Test suites (Login and Purchase flows).
* `cypress/pages/`: Page Object classes.
* `cypress/fixtures/`: Static test data (if applicable).
* `.github/workflows/`: CI/CD pipeline configuration.
* `TEST_PLAN.md`: Strategic test planning and test cases.
* `BUG_REPORT.md`: Detailed bug reporting for detected issues.

## 🚀 Getting Started

### Prerequisites
* Node.js (v20 or higher recommended)
* NPM
### Installation
1. Clone the repository.
2. Install dependencies:
   npm install
3. Running Tests   

   -Headless mode (Console):
   npm run test-

   -Interactive mode (Cypress Runner):
   npm run cy:open

## CI/CD Integration 📈 
This project uses GitHub Actions. Every push or pull request to the main branch triggers the full test suite.

- Artifacts: Videos and screenshots are automatically uploaded upon completion of the pipeline.

### Develop by Edgar Alejandro Quintero Vivas









