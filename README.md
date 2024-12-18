# Dishcovery

Dishcovery is a web application that allows users to search and discover various food recipes. This application is built using modern technologies such as React.js and Vite, and it leverages the [TheMealDB API](https://www.themealdb.com/api.php) to provide recipe data. 🍽️

## Features

- 🔍 Search for recipes by name.
- 📋 Display detailed recipes, including ingredients and instructions.
- 🖼️ Food images to help with visualization.
- ⚡ Fast response thanks to Vite and React.js technologies.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces. ⚛️
- **Vite**: A modern build tool for fast front-end development. 🚀
- **TheMealDB API**: A data source for food recipes. 🍴

## Installation

Follow these steps to run the project locally:

1. Ensure you have Node.js and npm installed on your computer. 🖥️
2. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
3. Navigate to the project directory:
   ```bash
   cd dishcovery
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Run the application:
   ```bash
   npm run dev
   ```
6. Open your browser and access `http://localhost:5173` to view the application. 🌐

## API Usage

Dishcovery uses the [TheMealDB API](https://www.themealdb.com/api.php) to fetch recipe data. Please refer to the API documentation to understand the available endpoints.

Example usage of the search endpoint:
```bash
https://www.themealdb.com/api/json/v1/1/search.php?s=<meal_name>
```

