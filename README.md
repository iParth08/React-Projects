# Play with React

> Learn by building React projects

## Table of Contents

- [Play with React](#play-with-react)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Utils - Use It Wherever](#utils---use-it-wherever)
  - [Project - 1 : Random Color Generator](#project---1--random-color-generator)
  - [Project - 2 : Password Generator](#project---2--password-generator)
  - [Project - 3 : Currency Converter](#project---3--currency-converter)

## Getting Started

> [!TIP]
> How to set up your development environment

1. Run `npm create vite@latest` in your terminal.
2. Run `npm install` to download the dependencies.
3. Run `npm run dev` to start the development server.
4. Set up **Tailwind** using the [tailwind-vite-guide](https://tailwindcss.com/docs/guides/vite)
5. Clean the given code and you are ready to go.

## Utils - Use It Wherever

> 1 : HoverTip --  
> _This little component holds name and functions of the project made as well as hints for the concepts used in the project._

```JSX
  const HoverTip = ({ project, description }) => {
    return (
      <div class="hover-wrap">
        <h3>
          What to learn from :
          <span>{project}</span>
        </h3>

        <div class="details">
          {description.map((line) => {
            const [key, value] = line.split(": ");
            return (
              <p class="key">
                <span >{key.trim()}</span> : <i>{value.trim()}</i>
              </p>
            )
          })}
        </div>
      </div>
    )
  }
```

**HoverTip** : It takes two props

- project : a string
- description - an array of strings, which is mapped to the _key_ and _value_ of the _HoverTip_.

## Project - 1 : Random Color Generator

A simple project to generate random colors using hsl color scheme.
It also has an array of colors which is used to generate color buttons.
Background color is changed when you click on any of the color buttons, as well as name or hsl code is displayed on the screen

> [!IMPORTANT]  
> **What to learn from it :**
>
> - State of a component
> - Conditional Rendering
> - Event Handling
> - Math.random() and Math.floor()
> - Sending Props and map

- `useState` : color is used for background color, it is updated from an array of colors when any button is clicked or random color generator function, when **surpriseMe** is clicked.
- **randomColorGenerator** : function to generate random color using hsl color style and `Math.random()`
- `map` : use of map to generate color-buttons
- **Conditional Rendering** : _HoverTip_ is rendered conditionally when an icon is clicked.
- **Props** : Props are send to the _HoverTip_ component as an object having a string and an array of strings.

## Project - 2 : Password Generator

A simple project to generate a random password having options to adjust length and include special characters, Upper and Lower case as well as numbers.

> [!IMPORTANT]   
> **What to learn from it :**
>
> - State of a component
> - Conditional Rendering
> - Event Handling with useEffect
> - useCallback
> - useRef
> - Copy to Clipboard
> - Math.random() and Math.floor()
> - setTimeout
> - Sending Props and map

- `useState` : for password, passwordLength, includeUppercase, includeNumbers, includeSymbols,
- `useRef` : for refering the generated password in the input field
- **copyToClipboard** : function to copy to clipboard the generated password
- **generatePassword** : function to generate password using strings and random index, looped for the length of the password
- `useCallback` : to memoize the generatePassword function for optimization along with all dependencies to the function
- `useEffect` : to call the generatePassword function when the state changes

```JSX
// Remember : true false values can not be directly rendered in html, so will be convert it to strings using string literals

  <p>
    Symbols :{" "}
    <span style={includeSymbols ? { color: "green" } : { color: "red" }}>
      {`${includeSymbols}`}
    </span>
  </p>

```

## Project - 3 : Currency Converter
A basic project to convert between currencies using current exchange rates.
Current rates are fetched from an API.

> [!IMPORTANT]   
> **What to learn from it :**
>
> - Fetching API
> - Custom Hooks
> - Function and classNames as props
> - Mapping using Object.keys
> - Sending Props and map
> - Component Reusability

- **useCurrencyInfo** : custom hook to fetch exchange rates from API
- **InputCurrency** : component to display input currency (customizable with props)
- `Object.keys` : to get the keys of an object for mapping select options
- *CurrencyShorts* : Custom Object to limit the options to choose from, and provide country-currency names
- **swapCurrencies** : function to swap input and output currencies and selected options

> [!NOTE]
> API URL : `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
> 
```JSX
// useEffect is used here to fetch exchange rates on page load and when currency selection changes
    useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((data) => setCurrencyInfo(data[currency]));
  }, [currency]);
  
```