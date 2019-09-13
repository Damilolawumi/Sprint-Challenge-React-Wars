# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

<answer> React is a JavaScript library for building user interfaces. 

<answer> When using React.JS different UI parts of the app are separated into 'components'. One component would contain the necessary markup as well as the required JS to make it completely functional. Writing code in this way also makes it very modular, tidy and reusable; the same component could be used at different places in your app or even in an entirely different app.

1. What does it mean to think in react?

<answer> It simply means React  makes you think about apps as you build them.

1. Describe state.

<answer>React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

1. Describe props.

<answer> The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

<answer>  A "side effect" is anything that affects something outside the scope of the function being executed
<answer> for example a network request, which has your code communicating with a third party (and thus making the request, causing logs to be recorded, caches to be saved or updated, all sorts of effects that are outside the function.