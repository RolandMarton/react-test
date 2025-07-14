# React + Vite Project

## 🔧 Tools Used

- **Build Tool + Dev Server**: [Vite](https://vitejs.dev/) with Babel JavaScript compiler
- **UI Library**: React (JavaScript)
- **CSS Preprocessor**: SASS (SCSS syntax)
- **Animation Library**: [Framer Motion](https://www.framer.com/motion/)

## 🛠️ Utility Scripts

- `filetree.py`: Checks and prints the current project file structure.

## 📁 Project Structure

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

## 🧩 `index.js` Purpose

This file is used for clean and centralized exports. For example:

```js
// components/index.js
export { Card, FormField, Loader };

// in a component like Home.jsx
import { Loader, Card, FormField } from "../components";
```

## 🎨 Global SCSS (`index.scss`)

### 🔑 Variables

- CSS root variables, including optional dark mode support.

### 🔄 Reset / Normalize

- Universal selector reset
- HTML and body base styles
- Media elements (img, picture, video, canvas, svg)
- Link elements (a)
- Form/input elements
- Heading elements (h1–h6)

### ♻️ Utility Classes

- `.container`
- `.center`
- `.text-center`
- `.hidden`

### 💡 Future Suggestions

Split styles into modular SCSS files:

- `variables.scss`
- `mixins.scss`
- `buttons.scss`
- `typography.scss`
- `themes/dark.scss`, `themes/light.scss`
