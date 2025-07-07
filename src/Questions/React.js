const reactQuestions = [
  {
    question: "What is the virtual DOM?",
    options: [
      "Browser DOM",
      "A copy of the real DOM",
      "Fake DOM",
      "Actual DOM",
    ],
    correctAnswer: 1,
  },
  {
    question: "What hook is used to manage state in functional components?",
    options: ["useState", "useEffect", "useRef", "useContext"],
    correctAnswer: 0,
  },
  {
    question: "Which method is used to render a React component into the DOM?",
    options: [
      "React.renderComponent()",
      "ReactDOM.mount()",
      "React.attach()",
      "ReactDOM.render()",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is JSX?",
    options: [
      "A JavaScript library",
      "A syntax extension for JavaScript",
      "A CSS preprocessor",
      "A database language",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "How do you pass data from a parent component to a child component?",
    options: ["Using state", "Using context API", "Using refs", "Using props"],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of `key` prop in React lists?",
    options: [
      "To style the list item",
      "To uniquely identify list items for efficient updates",
      "To define the order of items",
      "To link to external data",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which lifecycle method is invoked immediately after a component is mounted?",
    options: [
      "componentWillMount()",
      "render()",
      "componentDidMount()",
      "componentDidUpdate()",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is a Higher-Order Component (HOC)?",
    options: [
      "A component that renders another component",
      "A component with higher priority",
      "A function that takes a component and returns a new component",
      "A component for advanced styling",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the purpose of `setState()` in class components?",
    options: [
      "To update the component's props",
      "To add new methods to the component",
      "To fetch data from an API",
      "To update the component's state and re-render the component",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which of these is NOT a valid way to define a component in React?",
    options: [
      "Class component",
      "HTML component",
      "Functional component",
      "Pure component",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the Context API used for?",
    options: [
      "For handling HTTP requests",
      "For creating animations",
      "For sharing data that can be considered 'global' for a tree of React components",
      "For managing component styling",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "What does `useEffect` hook typically replace in class components?",
    options: [
      "setState, forceUpdate",
      "shouldComponentUpdate, getDerivedStateFromProps",
      "render, constructor",
      "componentDidMount, componentDidUpdate, componentWillUnmount",
    ],
    correctAnswer: 3,
  },
  {
    question: "How do you handle events in React?",
    options: [
      "Using inline JavaScript",
      "Using event listeners attached directly to DOM elements",
      "Using jQuery event handlers",
      "Using synthetic events",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is controlled component in React forms?",
    options: [
      "An input element whose value is controlled by React state",
      "An input element that controls other elements",
      "A component that cannot be modified",
      "A component that has no state",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is an uncontrolled component in React forms?",
    options: [
      "An input element that controls other elements",
      "An input element whose value is managed by the DOM itself",
      "A component that can be easily modified",
      "A component that has all its state managed by React",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of `React.memo`?",
    options: [
      "To create a memoization table",
      "To prevent re-renders of a functional component if its props haven't changed",
      "To remember the last state",
      "To store data in local storage",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which hook is used for performing side effects in functional components?",
    options: ["useState", "useContext", "useReducer", "useEffect"],
    correctAnswer: 3,
  },
  {
    question: "What is a Fragment in React?",
    options: [
      "A small piece of a component",
      "A library for animations",
      "A component that displays a fragment of text",
      "A way to group multiple elements without adding an extra node to the DOM",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the default port for React development server?",
    options: ["8080", "5000", "3000", "80"],
    correctAnswer: 2,
  },
  {
    question: "How do you create a new React project?",
    options: [
      "npm create-react-app my-app",
      "yarn create react-app my-app",
      "npm init react-app my-app",
      "npx create-react-app my-app",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "What is the significance of the `render()` method in class components?",
    options: [
      "It handles component state",
      "It updates the component's props",
      "It performs side effects",
      "It's responsible for displaying the component's UI",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is prop drilling in React?",
    options: [
      "A technique for optimizing performance",
      "A method for debugging",
      "Passing data from a parent component down to deeply nested child components",
      "A way to manage global state",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Which of the following is used to optimize functional components?",
    options: ["useReducer", "useRef", "useMemo", "useCallback"],
    correctAnswer: 2,
  },
  {
    question: "What is Redux commonly used for in React applications?",
    options: ["Routing", "Styling", "Authentication", "State management"],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of `useReducer` hook?",
    options: [
      "To manage simple state",
      "To fetch data",
      "To optimize component rendering",
      "To manage complex state logic in functional components",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the role of Babel in a React project?",
    options: [
      "To manage project dependencies",
      "To optimize image assets",
      "To manage CSS styles",
      "To compile JSX and ES6+ JavaScript into browser-compatible JavaScript",
    ],
    correctAnswer: 3,
  },
  {
    question: "What are React Router's main components?",
    options: [
      "<Nav>, <Page>, <Switch>",
      "<Link>, <Route>, <BrowserRouter>",
      "<Path>, <Url>, <Redirect>",
      "<Anchor>, <Hyperlink>, <View>",
    ],
    correctAnswer: 1,
  },
  {
    question: "How do you prevent a function component from re-rendering?",
    options: [
      "Using `shouldComponentUpdate`",
      "Using `componentDidUpdate`",
      "Using `forceUpdate`",
      "Using `React.memo`",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of `ReactDOM.createPortal()`?",
    options: [
      "To create a new DOM element",
      "To create a component library",
      "To manage component lifecycle",
      "To render children into a DOM node that exists outside the DOM hierarchy of the parent component",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is server-side rendering (SSR) in React?",
    options: [
      "Rendering React components on the client-side",
      "Rendering React components using WebGL",
      "Rendering React components as static files",
      "Rendering React components on the server and sending the HTML to the client",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the 'dependency array' in `useEffect` for?",
    options: [
      "To list all dependencies of the component",
      "To define the order of execution",
      "To store the result of the effect",
      "To specify when the effect should re-run",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which of the following is a way to handle multiple inputs in React forms?",
    options: [
      "Creating a separate state for each input",
      "Using `useState` for all inputs",
      "Using `useRef` for all inputs",
      "Using a single state object and updating specific properties",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of `useRef` hook?",
    options: [
      "To manage component state",
      "To perform side effects",
      "To optimize rendering",
      "To access DOM elements or React components directly",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is a custom hook in React?",
    options: [
      "A built-in React hook",
      "A hook for customizing component styles",
      "A hook for database operations",
      "A function whose name starts with 'use' and that may call other hooks",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the typical flow of data in a React application?",
    options: [
      "Bidirectional data flow",
      "Circular data flow",
      "Random data flow",
      "Unidirectional data flow",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is a 'Pure Component' in React?",
    options: [
      "A component that only renders once",
      "A component that has no side effects",
      "A component that only uses pure functions",
      "A class component that implements `shouldComponentUpdate` with a shallow prop and state comparison",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of `error boundaries` in React?",
    options: [
      "To define boundaries for component rendering",
      "To prevent network errors",
      "To handle user input errors",
      "To catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which tool is commonly used for state management in large React applications?",
    options: ["jQuery", "Lodash", "Moment.js", "Redux"],
    correctAnswer: 3,
  },
  {
    question: "What is the `StrictMode` in React used for?",
    options: [
      "To enforce strict JavaScript syntax",
      "To speed up rendering",
      "To make components immutable",
      "To highlight potential problems in an application during development",
    ],
    correctAnswer: 3,
  },
  {
    question: "What are 'synthetic events' in React?",
    options: [
      "Events created by users",
      "Browser native events",
      "Events generated by the server",
      "Cross-browser wrapper around the browser's native event system",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is a 'componentDidUpdate' lifecycle method used for?",
    options: [
      "To perform actions immediately after a component is mounted",
      "To clean up resources before component unmounts",
      "To handle initial data fetching",
      "To perform actions after a component updates",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "What is the difference between a controlled and uncontrolled component?",
    options: [
      "Controlled components are for inputs, uncontrolled are for outputs",
      "Controlled components are faster, uncontrolled are slower",
      "No significant difference",
      "Controlled components have their state managed by React, uncontrolled components by the DOM",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of `BrowserRouter` in React Router?",
    options: [
      "To manage server-side routing",
      "To create hash-based routing",
      "To navigate between components without changing the URL",
      "To keep your UI in sync with the URL using the HTML5 history API",
    ],
    correctAnswer: 3,
  },
  {
    question: "How do you write a comment in JSX?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "",
      "{/* This is a comment */} ",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the primary benefit of using React?",
    options: [
      "Simplifies database interactions",
      "Enables faster network requests",
      "Provides built-in authentication",
      "Efficiently updates the UI by minimizing direct DOM manipulation",
    ],
    correctAnswer: 3,
  },
  {
    question: "What are React 'hooks'?",
    options: [
      "Functions for creating animations",
      "Functions for database queries",
      "Functions for styling components",
      "Functions that let you hook into React state and lifecycle features from function components",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which package contains the `ReactDOM.render()` method?",
    options: ["react", "react-scripts", "react-router-dom", "react-dom"],
    correctAnswer: 3,
  },
  {
    question: "What is the concept of 'component composition' in React?",
    options: [
      "Combining multiple components into a single file",
      "Breaking down a single component into smaller functions",
      "Arranging components in a linear fashion",
      "Building complex UI by combining simpler, independent components",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is a 'callback ref' in React?",
    options: [
      "A ref that uses a string to identify the DOM node",
      "A ref that is automatically managed by React",
      "A ref used for event handling",
      "A function that receives the DOM element or component instance as its argument",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of `PropTypes` in React?",
    options: [
      "To define the type of component",
      "To declare the type of state",
      "To define CSS properties",
      "To validate the props passed to a component",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "What is the difference between `setState` and directly modifying state in a class component?",
    options: [
      "`setState` is synchronous, direct modification is asynchronous",
      "No difference, both work the same",
      "`setState` is for props, direct modification is for state",
      "`setState` updates the state and re-renders, direct modification does not",
    ],
    correctAnswer: 3,
  },
];
export default reactQuestions;
