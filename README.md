# Fetch Take Home Challenge

A web application that helps users find their perfect dog companion by browsing through a comprehensive database of dog breeds. Users can filter their search based on breed and age, allowing them to discover dogs that match their preferences. Additionally, the application provides a favorites feature where users can save their preferred dogs for future reference. The matching algorithm assists users in finding the ideal dog based on their selected favorites.

## Table of Contents

- [Introduction](#project-name)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running Locally](#running-locally)
- [How to Use the App](#how-to-use-the-app)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

To set up and run this project, ensure you have the following:

- **Node.js:** Make sure you have Node.js installed on your machine.
- **npm or Yarn:** These package managers are used to install project dependencies and execute scripts defined in the `package.json` file.
- **Development Environment:** For development purposes, familiarity with Vite, a build tool, would be beneficial. It's primarily used during development and not necessary for running the production build.

### Running Locally

To run this project locally, follow these steps:

1. **Node.js**: Ensure you have Node.js installed. Download it from [here](https://nodejs.org/) if not already installed. Node.js includes npm, the Node.js package manager.

2. **Clone the Project**: Clone or download the project repository from its source, such as GitHub.

3. **Install Dependencies**: Open a terminal or command prompt, navigate to the project directory, and run:

   npm install or yarn install

4. **Run the Application**: After the installation of dependencies, use the following command to start the application:

   npm run dev or yarn dev

## How to Use the App

This app helps you discover and interact with adorable dog profiles. It consists of three main sections:

### Login

1. **Accessing the Login Page:** Start by accessing the app's login page. You'll see a form asking for your name and email.
2. **Entering Details:** Enter your name and email in the respective fields.
3. **Logging In:** Click on the "Login" button to proceed.
4. **Authentication:** If your credentials are correct, you'll be successfully logged in and redirected to the search page. Otherwise, if there's an issue with your details, an error message will display.

### Search

1. **Exploring Dogs:** Once logged in, you'll land on the search page. Here, you can filter dogs based on breeds and age ranges.
2. **Filtering Dogs:** Use the dropdown menus to filter dogs by age. You can also select specific breeds to narrow down your search.
3. **Sorting Results:** Click on the "Breed" or "Age" buttons to sort the displayed dogs in ascending or descending order.
4. **Pagination:** Navigate through multiple dog profiles using the "Next" and "Previous" buttons at the bottom.
5. **Favorites:** Click on the "Go To My Favorites" button to access your favorite dog profiles.

### Favorites

1. **Viewing Favorites:** Access the "Favorites" section to see the list of dogs you've marked as favorites.
2. **Generating a Match:** Click the "Generate My Perfect Match" button to get a recommendation for a perfect dog match based on your favorites.
3. **Removing Favorites:** Remove a dog from your favorites by clicking the respective removal button on each dog card.

Explore, search, save favorites, and discover your ideal furry companion with ease using this app!

## Folder Structure

Fetch-th/
│
├── node_modules/
│
├── public/
│
├── src/
│ ├── assets/
│ │ ├── dogbones.jpg
│ │ └── twodogs.jpg
│ │
│ ├── components/
│ │ ├── Breeds.tsx
│ │ ├── DogCard.tsx
│ │ ├── Favorites.tsx
│ │ ├── Footer.tsx
│ │ ├── Loader.tsx
│ │ ├── Login.tsx
│ │ ├── Logo.tsx
│ │ ├── Logout.tsx
│ │ ├── MatchCard.tsx
│ │ ├── Nav.tsx
│ │ ├── Pagination.tsx
│ │ ├── Search.tsx
│ │ └── SearchResults.tsx
│ │
│ ├── styles/
│ │ ├── breeds.css
│ │ ├── dog-card.css
│ │ ├── favorites.css
│ │ ├── footer.css
│ │ ├── loader.css
│ │ ├── login.css
│ │ ├── match-card.css
│ │ ├── nav.css
│ │ ├── search-results.css
│ │ └── search.css
│ │
│ ├── tests/
│ │ └── testDogAPI.ts
│ │
│ └── utils/
│ ├── dogAPIUtil.ts
│ ├── fetchBreeds.ts
│ └── logout.ts
│
├── .eslintrc.cjs
│
├── .gitignore
│
├── index.html
│
├── netlify.toml
│
├── package-lock.json
│
├── package.json
│
├── README.md
│
├── tsconfig.json
│
├── tsconfig.node.json
│
└── vite.config.ts

## Dependencies

- **react:** ^18.2.0
- **react-dom:** ^18.2.0
- **react-icons:** ^4.12.0
- **react-router-dom:** 6.4
- **@types/react:** ^18.2.37
- **@types/react-dom:** ^18.2.15
- **@typescript-eslint/eslint-plugin:** ^6.10.0
- **@typescript-eslint/parser:** ^6.10.0
- **@vitejs/plugin-react:** ^4.2.0
- **eslint:** ^8.53.0
- **eslint-plugin-react-hooks:** ^4.6.0
- **eslint-plugin-react-refresh:** ^0.4.4
- **typescript:** ^5.2.2
- **vite:** ^5.0.0
