# SauceLabs E2E Automation Framework 🛒

Este proyecto es un framework de automatización de pruebas de extremo a extremo (E2E) para la página [SauceDemo](https://www.saucedemo.com/), desarrollado con un enfoque profesional y escalable.

## 🛠️ Tech Stack
* **Framework:** [Cypress](https://www.cypress.io/)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
* **Patrón de Diseño:** Page Object Model (POM)
* **Gestión de Proyecto:** Jira (Kanban)
* **CI/CD:** GitHub Actions (Próximamente)

## 🏗️ Estructura del Proyecto
* `cypress/e2e`: Scripts de prueba.
* `cypress/pages`: Objetos de página (POM).
* `cypress/fixtures`: Datos estáticos de prueba (JSON).

## 🚀 Instalación y Uso
1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/TU_USUARIO/saucedemo-cypress-typescript.git](https://github.com/TU_USUARIO/saucedemo-cypress-typescript.git)

2.Instalar dependencias:
  ```Bash
  npm install

3.Ejecutar pruebas en modo interfaz:
  ```Bash
  npx cypress open

4.Ejecutar pruebas en modo headless (consola):

  ```Bash
  npx cypress run
