🚀 DevStack

DevStack is a simple React-based technology stack manager where users can explore popular development technologies and add their favorites to a personal stack.

✨ Features

🔎 Explore Technologies — Browse popular frontend, backend, database, language, and DevOps technologies.

➕ Build Your Stack — Add technologies to your stack and remove them whenever you want.

🔔 User-Friendly Feedback — Get toast notifications when adding or removing technologies.

🛠️ Technologies Used

React.js

TypeScript / JavaScript (ES6+)

Tailwind CSS

DaisyUI

React-Toastify

JSON

Vite

📚 React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to make UI code easier to read and understand.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?

useState lets a component store and update data. In this project, it is used to manage the selected technologies in the user's stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders. I used it to load the technology data from the JSON file when the application starts.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. A unique key helps React efficiently update only the items that have changed.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, when the stack is empty:

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList stack={stack} />
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props.

<StackCard technology={technology} />

A child can send something back by calling a function that the parent passes as a prop.

<StackCard onRemove={handleRemove} />

The child can then call onRemove() when the user clicks a remove button.

📦 Getting Started

Clone the project and install the dependencies:

npm install

Run the development server:

npm run dev