# TutorialsNinja Checkout Automation

## Introduction

This project automates the checkout process on the TutorialsNinja e-commerce website using **Cypress**. It demonstrates end-to-end testing, ensuring the checkout functionality works seamlessly, from product search to completing the purchase.

## Project Type

End-to-End Testing

## Features

- **Automated Search** for a product (e.g., "iPhone").
- **Add Product to Cart** and verify the addition.
- **Checkout Process** automation (including billing, shipping, and payment).
- **User Registration** and validation.
- **Logout** after purchase completion.

## Design Decisions and Assumptions

- Assumes the product "iPhone" is available on the website.
- Uses fixed user details for the registration process.
- **XPath selectors** are used for certain button clicks.
- Assumes the user is logged out automatically after completing the checkout.

## Framework and Tools Used

- **Cypress**: For writing end-to-end tests.
- **POM (Page Object Model)**: Used for organizing code and improving maintainability.
- **Screenshots**: Taken at crucial steps for debugging and validation purposes.
- **Extent Reports**: For generating detailed test reports.

---
