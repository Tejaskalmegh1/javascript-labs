# JavaScript Fundamentals

> Core JavaScript concepts and practical implementations covering the foundation of the language.

---

## Overview

This module introduces the fundamental concepts required to start working with JavaScript.

Each topic contains a minimal HTML file connected to an external JavaScript file, allowing the concepts to be executed directly in the browser and inspected through the Developer Console.

---

## Module Structure

```text
01-fundamentals/
│
├── README.md
│
├── 01-hello-world/
│   ├── index.html
│   └── script.js
│
├── 02-console/
│   ├── index.html
│   └── script.js
│
├── 03-comments/
│   ├── index.html
│   └── script.js
│
├── 04-variables/
│   ├── index.html
│   └── script.js
│
└── 05-variable-naming/
    ├── index.html
    └── script.js
```

---

## Topics

### 01 — Hello World

Introduction to JavaScript and executing the first JavaScript program.

**Concepts:**

* JavaScript introduction
* JavaScript execution
* External JavaScript files
* `<script>` tag
* `console.log()`

---

### 02 — Console

Introduction to the browser Developer Console and basic console methods.

**Concepts:**

* `console.log()`
* `console.warn()`
* `console.error()`
* Displaying strings
* Displaying numbers


---

### 03 — Comments

Understanding how to write comments and document JavaScript code.

**Concepts:**

* Single-line comments
* Multi-line comments
* Commenting code

---

### 04 — Variables

Understanding how JavaScript stores and manages values using variables.

**Concepts:**

* Variable declaration
* Variable initialization
* Variable assignment
* Variable reassignment
* `let`
* `const`
* `var`

---

### 05 — Variable Naming

Understanding JavaScript variable naming rules and conventions.

**Concepts:**

* Valid variable names
* Invalid variable names
* Naming rules
* `camelCase`
* Constants
* Case sensitivity
* Reserved keywords

---

## HTML & JavaScript Integration

All examples in this module use an external JavaScript file.

### HTML

```html
<script src="script.js"></script>
```

### JavaScript

```js
console.log("Hello World!");
```

This structure separates the HTML document from JavaScript logic.

```text
HTML
  │
  └── index.html
          │
          └── script.js
                    │
                    └── JavaScript Logic
```

---

## Development Environment

* Visual Studio Code
* Modern Web Browser
* Browser Developer Tools
* Git
* GitHub

---

## How to Run

1. Open any topic folder.
2. Open `index.html` in a browser.
3. Open Developer Tools.
4. Navigate to the **Console** tab.
5. Inspect the JavaScript output.

---

## Key JavaScript Concepts

```text
JavaScript
│
├── Execution
│   └── Browser / JavaScript Engine
│
├── Output
│   └── Console
│
├── Documentation
│   └── Comments
│
└── Variables
    ├── let
    ├── const
    └── var
```

---

## Module Status

**Status:** In Progress

**Focus:** JavaScript Fundamentals

**Next Module:** Data Types
