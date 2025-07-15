
# Fingertips Store Project

## Plan

### 🔧 Tools

- **Build Tool + Dev Server**: [Vite](https://vitejs.dev/) with Babel JavaScript compiler
- **UI Library**: React (JavaScript)
- **CSS Preprocessor**: SASS (SCSS syntax)
- **Animation Library**: [Framer Motion](https://www.framer.com/motion/)

### 🛠️ Utility Scripts

- `filetree.py`: Checks and prints the current project file structure.

### 📁 Starting Project Structure

```
|-- README.md
|-- eslint.config.js
|-- index.html
|-- package-lock.json
|-- package.json
|-- public
|   `-- vite.svg
|-- src
|   |-- App.jsx
|   |-- assets
|   |   |-- images
|   |   |   |-- bg.png
|   |   |   |-- item1.png
|   |   |   |-- item2.png
|   |   |   |-- item3.png
|   |   |   |-- item4.png
|   |   |   |-- item5.png
|   |   |   |-- item6.png
|   |   |   |-- item7.png
|   |   |   `-- item8.png
|   |   `-- svg
|   |       |-- cart.svg
|   |       |-- tooltip-hover.svg
|   |       `-- tooltip-static.svg
|   |-- components
|   |   |-- Cart.jsx
|   |   |-- CartProvider.jsx
|   |   |-- Header.jsx
|   |   |-- ProductCard.jsx
|   |   |-- ProductList.jsx
|   |   |-- Tooltip.jsx
|   |   `-- index.js
|   |-- data
|   |   `-- products.js
|   |-- hooks
|   |-- main.jsx
|   |-- routes
|   |   |-- Checkout.jsx
|   |   |-- Error.jsx
|   |   |-- Home.jsx
|   |   `-- index.js
|   |-- store
|   |   `-- cart-context.js
|   |-- styles
|   |   `-- index.scss
|   |-- tests
|   `-- utils
|       `-- motion.js
|-- vite.config.js
```

### 🧩 `index.js` Purpose

This file is used for clean and centralized exports. For example:

```js
// components/index.js
export { Card, FormField, Loader };

// in a component like Home.jsx
import { Loader, Card, FormField } from "../components";
```

### 🎨 Global SCSS (`index.scss`)

#### 🔑 Variables

- CSS root variables, including optional dark mode support.

#### 🔄 Reset / Normalize

- Universal selector reset
- HTML and body base styles
- Media elements (img, picture, video, canvas, svg)
- Link elements (a)
- Form/input elements
- Heading elements (h1–h6)

#### ♻️ Utility Classes

- `.container`
- `.center`
- `.text-center`
- `.hidden`

#### 💡 Future Suggestions

Split styles into modular SCSS files:

- `variables.scss`
- `mixins.scss`
- `buttons.scss`
- `typography.scss`
- `themes/dark.scss`, `themes/light.scss`

## 🛠 What could be done in the future

- Add comments to each functions params return
- Add framer motion to animate components - make it more alive - enhance user experience
- Add tests - unit tests, integration tests, end to end tests (Jest, Cypress)
- Add custom hooks
- Add server to fetch data from backend - for example NodeJs
- Add route guards - Error page which always gives back feedback about error codes and navigates the user back to home page

## 📁 Finished Project Structure

```
*--**--**--**--**--**--**--*
|-- README.md
|-- eslint.config.js
|-- index.html
|-- package-lock.json
|-- package.json
|-- public
|   `-- vite.svg
|-- src
|   |-- App.jsx
|   |-- assets
|   |   |-- images
|   |   |   |-- bg.png
|   |   |   |-- item1.png
|   |   |   |-- item2.png
|   |   |   |-- item3.png
|   |   |   |-- item4.png
|   |   |   |-- item5.png
|   |   |   |-- item6.png
|   |   |   |-- item7.png
|   |   |   `-- item8.png
|   |   |-- index.js
|   |   `-- svg
|   |       |-- cart.svg
|   |       |-- tooltip-hover.svg
|   |       `-- tooltip-static.svg
|   |-- components
|   |   |-- Cart.jsx
|   |   |-- CartContent.jsx
|   |   |-- Header.jsx
|   |   |-- ProductCard.jsx
|   |   |-- ProductList.jsx
|   |   |-- Title.jsx
|   |   |-- Tooltip.jsx
|   |   `-- index.js
|   |-- data
|   |   `-- products.js
|   |-- enums
|   |   |-- currency_enum.js
|   |   `-- index.js
|   |-- main.jsx
|   |-- models
|   |   |-- index.js
|   |   `-- product.js
|   |-- routes
|   |   |-- Checkout.jsx
|   |   |-- Error.jsx
|   |   |-- Home.jsx
|   |   `-- index.js
|   |-- store
|   |   |-- CartProvider.jsx
|   |   `-- cart-context.js
|   |-- styles
|   |   |-- colors.scss
|   |   |-- components
|   |   |   |-- cart.scss
|   |   |   |-- header.scss
|   |   |   |-- product_card.scss
|   |   |   |-- product_list.scss
|   |   |   |-- title.scss
|   |   |   `-- tooltip.scss
|   |   |-- fonts.scss
|   |   |-- global.scss
|   |   |-- index.scss
|   |   |-- mixins
|   |   |   `-- product_mixin.scss
|   |   |-- pages
|   |   |   `-- checkout.scss
|   |   `-- transitions.scss
|   |-- tests
|   `-- utils
|       `-- formatter.js
`-- vite.config.js
*--**--**--**--**--**--**--*
```

## 🖼 Gallery

https://github.com/user-attachments/assets/efce8a02-8399-418a-a019-ef617c66ac48

<div align="center">
  <img width="30%" src="https://github.com/user-attachments/assets/7dffa855-d675-40e5-8135-0bbd4b6173da" />
  <img width="30%" src="https://github.com/user-attachments/assets/d0b5e0a8-e2c5-4998-bddf-e5c2b0b45ff8" />
  <img width="30%" src="https://github.com/user-attachments/assets/f08c61ac-4700-4618-91fa-838223ccf77e" />

  <img width="30%" src="https://github.com/user-attachments/assets/9f510422-97d5-461d-88c5-e27e781e33fb" />
  <img width="30%" src="https://github.com/user-attachments/assets/90bec9ea-33cd-435f-837a-95c0145fb700" />
  <img width="30%" src="https://github.com/user-attachments/assets/39eb9ee1-eba8-4a2a-af6f-5e14a3c90491" />
  <img width="30%" src="https://github.com/user-attachments/assets/a8929a61-500b-41e2-8353-d0f3e47da563" />
  <img width="30%" src="https://github.com/user-attachments/assets/c71d742e-2c43-4e69-a7a1-81d4933397a0" />

</div>

