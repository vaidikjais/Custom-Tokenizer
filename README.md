# ✍️ Tokenization: An Interactive Web Application

[<img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />](https://opensource.org/licenses/MIT)
[<img src="https://img.shields.io/github/languages/top/vaidikjais/Custom-Tokenizer" alt="Top Language" />](https://github.com/vaidikjais/Custom-Tokenizer)

An interactive, web-based tool built with Next.js and Tailwind CSS to demonstrate the core concepts of tokenization, a fundamental process in Natural Language Processing (NLP) and the foundation for how models like GPT understand text.

This application provides a hands-on environment to see how raw text is parsed, converted into a sequence of numerical IDs, and visualized for clear understanding.



## Project Overview

Tokenization is the crucial first step in any NLP pipeline. It involves breaking down a piece of text—like a sentence or a paragraph—into smaller units called **tokens**. These tokens can be words, characters, or parts of words (subwords). Large Language Models don't read text as we do; they process these numerical representations of tokens.

This project demystifies that process by providing a real-time interface to:
* **Encode:** Convert user-provided text into token IDs using a custom-built tokenizer.
* **Visualize:** Display the generated tokens with a smart, color-coded system to easily differentiate them.
* **Decode:** Translate a sequence of token IDs back into human-readable text.

---

## ✨ Key Features

* **Custom Hybrid Tokenizer:** A unique tokenizer built from scratch that uses a primary vocabulary of common English words. For any word outside this vocabulary, it intelligently falls back to character-level tokenization.
* **Interactive Panels:** A clean, grid-based layout where each function (Input, Encoding, Decoding, Visualization) is organized into its own distinct panel.
* **Smart Visualization:** Each unique token is assigned a distinct and consistent color based on a hash of the token's string. This makes it easy to identify and track specific tokens throughout the text.
* **Color Legend:** A dynamic legend is generated to provide an at-a-glance reference for the color of each unique token detected in the input.
* **Seamless Workflow:** Intuitive copy-and-paste functionality allows users to easily move encoded IDs to the decoder to verify the process.
* **Modern Tech Stack:** Built with the latest web technologies for a fast, responsive, and visually appealing experience.

---

## 🧠 How the Custom Tokenizer Works

The heart of this project is the custom-built hybrid tokenizer (`src/lib/tokenizer.js`). Unlike basic character or word splitters, it employs a more nuanced strategy.

### Vocabulary Hierarchy

The tokenizer's vocabulary is constructed in a specific order of priority:
1.  **Special Tokens:** Essential tokens like `<UNK>` (for unknown tokens) and `<PAD>` are added first to ensure they have fixed, predictable IDs.
2.  **Word Vocabulary:** A curated list of common English words (defined in `src/lib/vocabulary.js`) is added next. This allows the tokenizer to treat "hello" or "world" as a single, meaningful unit. This list is fully customizable.
3.  **Character Fallback:** Finally, a comprehensive set of individual characters (a-z, 0-9, punctuation) is added to the vocabulary.

### Encoding Logic

When encoding text, the tokenizer follows this logic:
* It first attempts to match a chunk of text (like a word) to an entry in its **word vocabulary**.
* If a word is found (e.g., "tokenizer"), it's converted into a single token ID.
* If a word is **not** found, the tokenizer "falls back" to breaking that word down into the individual characters it *does* know, encoding each one separately.
* This hybrid approach allows the model to handle any arbitrary text while still efficiently representing common words.

---

## 🛠️ Tech Stack & Rationale

* **[Next.js](https://nextjs.org/):** Used for its high-performance, server-first architecture, providing a fast and SEO-friendly foundation. The App Router was used for modern layout and component management.
* **[React](https://react.dev/):** The core library for building the interactive user interface with a component-based architecture.
* **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework used for rapid and consistent UI development, enabling the creation of a clean, modern design system directly within the markup.
* **[Lucide React](https://lucide.dev/):** Provided the clean and lightweight icons used throughout the interface.
* **[Vercel](https://vercel.com/):** The chosen platform for deployment, offering seamless integration with Next.js for continuous deployment and global performance.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
* Node.js (v18 or later recommended)
* npm or yarn

### Installation & Setup
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/vaidikjais/Custom-Tokenizer.git](https://github.com/vaidikjais/Custom-Tokenizer.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Custom-Tokenizer
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📜 License

This project is distributed under the MIT License. See the `LICENSE` file for more information.

---

## 👤 Contact

Vaidik Jaiswal

* **X (Twitter):** [@vaidikjais](https://x.com/vaidikjais)
* **LinkedIn:** [linkedin.com/in/vaidik-jaiswal](https://www.linkedin.com/in/vaidik-jaiswal/)
