# GitHub Copilot Instructions for Lesson19 Repository

This repository is focused on Playwright automation and related helper code. Ignore all Cypress-related files and configuration.

## Repository focus

- The main test automation work is in `playwright/`.
- Playwright tests use `@playwright/test` and ES module syntax.
- Relevant files include `playwright.config.js`, `playwright/tests`, `playwright/helpers`, and `playwright/Page Objects`.
- Do not use or modify the `cypress/` directory, `cypress.prod.config.js`, `cypress.staging.config.js`, or Cypress script entries in `package.json`.

## Preferred style

- Use `import { test, expect } from '@playwright/test'`.
- Use `test.describe`, `test.beforeEach`, `test.afterEach`, and `test()` for structuring tests.
- Use `await` for all page actions and expect assertions.
- Keep new tests inside `playwright/tests` or under `playwright/` if adding supporting files.

## Page Object Model (POM)

- Use the repository's POM pattern strictly for UI tests.
- Define page classes under `playwright/helpers/Page Objects/`.
- Page objects should extend `BasePage` and accept `page` in the constructor.
- Use getters for locators and page object methods for actions.
- Store all locators and interaction logic inside page objects, not in tests.
- Tests should call page object methods and properties, not `page.locator()` directly, except for rare one-off assertions where no page object exists yet.
- Use `BasePage` helpers like `navigate()` and `containUrlCheck()` to keep navigation and URL assertions consistent.
- Use shared component objects in `playwright/helpers/Components/` for reusable header/footer sections.
- When a test needs a new UI interaction, add it to the relevant page object first.

## What to avoid

- Do not generate code using `cy.*`, `Cypress`, or `cypress` APIs.
- Do not add Cypress configuration, test runners, or custom Cypress commands.
- Do not use CommonJS `require()` for new Playwright files; use ES module `import` syntax.

## Good assumptions for completions

- The repo is a Playwright test automation project.
- Existing automation uses helpers and page objects under `playwright/`.
- Existing test data may be in `playwright/testData` and helpers in `playwright/helpers`.
- Playwright is the intended framework for new automation and improvements.

## Summary

Focus on Playwright-only automation and repository changes. Explicitly ignore Cypress tooling, code, and folder structure.
