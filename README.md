# Lazylady Project

Lazylady is a Vue.js application that allows users to manage various lists and access real-time information. The application includes features for creating a to-do list, a grocery list, checking currency exchange rates, and viewing weather forecasts based on selected regions.

## Features

- **To-Do List**: Manage tasks with options to add, remove, and mark tasks as complete.
- **Grocery List**: Create and manage a grocery list with the ability to add items and mark them as purchased.
- **Currency Rates**: Fetch and display real-time currency exchange rates, with options to select different currencies.
- **Weather Forecast**: View weather forecasts for selected regions, with methods to fetch and display weather data.
- **Date Picker**: Select dates or deadlines with validation features.

## Project Structure

```
lazylady
├── src
│   ├── components
│   │   ├── TodoList.vue
│   │   ├── GroceryList.vue
│   │   ├── CurrencyRates.vue
│   │   ├── WeatherForecast.vue
│   │   └── DatePicker.vue
│   ├── App.vue
│   ├── main.js
│   └── assets
├── public
│   └── index.html
├── package.json
├── README.md
└── vue.config.js
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/lazylady.git
   ```
2. Navigate to the project directory:
   ```
   cd lazylady
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the application in development mode, use the following command:
```
npm run serve
```
Open your browser and navigate to `http://localhost:8080` to view the application.

## License

This project is licensed under the MIT License.