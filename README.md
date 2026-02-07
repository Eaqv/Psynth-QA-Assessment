# SauceLabs E2E Automation Framework 🛒

Este proyecto es un framework de automatización de pruebas de extremo a extremo (E2E) para la página https://www.saucedemo.com/, desarrollado con un enfoque profesional y escalable.

## 🛠️ Tech Stack
* Framework: Cypress
* Lenguaje: TypeScript
* Patrón de Diseño: Page Object Model (POM)
* Gestión de Proyecto: Jira (Tablero Kanban)
* CI/CD: GitHub Actions (Próximamente)

## 🏗️ Estructura del Proyecto
* cypress/e2e       → Contiene los scripts de prueba.
* cypress/pages     → Contiene los objetos de página (clases POM).
* cypress/fixtures  → Archivos de datos estáticos (JSON).

## 🚀 Instalación y Uso

1. Clonar el repositorio:
git clone https://github.com/Eaqv/saucedemo-cypress-typescript.git

2. Instalar dependencias:
npm install

3. Ejecutar pruebas (Interfaz Gráfica):
npx cypress open

4. Ejecutar pruebas (Consola / Headless):
npx cypress run

## 📌 Notas
- Asegúrate de tener Node.js instalado (versión recomendada: LTS).
- El framework está preparado para escalar y agregar integración continua.

---
Proyecto de automatización E2E con buenas prácticas y enfoque profesional.
