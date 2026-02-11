# Test Plan - SauceDemo Automation Challenge

## 1. Scope
This assessment covers the core E2E journey of an e-commerce user, from authentication to order completion.
* **Target Pages:** Login, Inventory, Product Details, Cart, and Checkout.
* **User Types:** `standard_user` (Functional baseline) and `problem_user`/`locked_out_user` (Validation of error handling and bug detection).

## 2. Test Cases (Prioritized)

| ID | Priority | Description | Type |
|:---|:---|:---|:---|
| TC-01 | High | Successful login with `standard_user` | Happy Path |
### Detailed Test Case Example: TC-01 (Happy Path Login)
* **Pre-condition:** User is on the Login page.
* **Steps:**
  1. Enter 'standard_user'.
  2. Enter 'secret_sauce'.
  3. Click Login button.
* **Expected Result:** Redirected to /inventory and "Products" header is visible.
| TC-02 | High | Add multiple items to cart and verify badge count | Happy Path |
| TC-03 | High | Complete full checkout flow (Checkout: Complete) | Happy Path |
### Detailed Test Case Example: TC-03 (Happy Path Login)
* **Pre-condition:** User is on the Login page.
* **Steps:**
  1. Enter 'standard_user'.
  2. Enter 'secret_sauce'.
  3. Click Login button.
* **Expected Result:** Redirected to /inventory and "Products" header is visible.
| TC-04 | High | Login failure with `locked_out_user` | Negative |
| TC-05 | Medium | Attempt checkout with missing information (First/Last name) | Edge Case |
| TC-06 | Medium | Validate Inventory UI consistency: `standard_user` vs `problem_user` | Cross-user |
### Detailed Test Case Example: TC-06 (Cross-user)
* **Pre-condition:** User is on the Login page.
* **Steps:**
  1. Enter 'standard_user'.
  2. Enter 'secret_sauce'.
  3. Click Login button.
* **Expected Result:** Redirected to /inventory and "Products" header is visible.
| TC-07 | Medium | Remove items from cart and verify badge update | Happy Path |
| TC-08 | Low | Reset App State from the Burger Menu | Functional |
| TC-09 | Medium | Attempt login with invalid credentials | Negative |
| TC-10 | Low | Navigate to Product Details and return to Inventory | Functional |

## 3. Out of Scope
* **Performance Testing:** Although `performance_glitch_user` exists, specific load metrics are excluded due to time constraints.
* **Visual Regression:** While layout inconsistencies are noted, automated pixel-by-pixel comparison is not implemented.
* **API Testing:** Focus remains strictly on E2E UI.

## 4. Risk Assessment
* **Third-party stability:** If SauceLabs demo is down, tests will fail regardless of code quality.
* **Selector Instability:** Using classes like `.inventory_item` is riskier than data-test attributes; however, the app provides `data-test` which we prioritize for stability.