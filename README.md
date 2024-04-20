# Play with React

> Learn by building React projects

## Table of Contents

- [Play with React](#play-with-react)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Utils - Use It Wherever](#utils---use-it-wherever)
  - [Project - 2 : Password Generator](#project---2--password-generator)

## Getting Started

> [!TIP] How to set up your development environment

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

## Project - 2 : Password Generator

A simple project to generate random colors using hsl color scheme.
It also has an array of colors which is used to generate color buttons.
Background color is changed when you click on any of the color buttons, as well as name or hsl code is displayed on the screen

> [!IMPORTANT] > **What to learn from it :**
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
