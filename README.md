# Cycode Coding Challenge
![screen](https://github.com/Vl4d1s/cycode-coding-challenge/assets/42187212/a362f69f-1f84-404b-895d-ef49bba69dc9)

* **State Management** - To manage the state between different pages, I chose to use the Context API solution. This solution will handle data fetching as well as organize and store user data.

* **Styling** - Instead of using design system libraries like `MUI`, which I usually do, I decided to challenge myself and implement the functionality on my own. Although I am aware that `styled-components` can reduce the amount of CSS code and allow for component reusability, since this exercise is broad and I haven't worked with `styled-components` before, I preferred to go with `css-modules`.

* **Custom Hooks** - I created some custom hooks to encapsulate shared logic between components.

* **Shared Logic** - While there are similarities in the dropdowns' logic, there are also differences. Therefore, my decision was to separate them into individual components.

* **Data Fetching** - The data is retrieved from the public folder.

* **Performance** - There were several tasks such as data caching, lazy loading, debounce on search, etc... Once again considering the wide scope of this challenge, I chose to utilize  React's memoization techniques to prevent unnecessary re-renders of components, especially those that are data-heavy (dropdowns)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Make sure you are running Node.js version 18 or higher.



