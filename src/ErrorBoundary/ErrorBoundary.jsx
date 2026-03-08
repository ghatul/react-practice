import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}


/*

Error boundaries only catch errors during rendering, lifecycle methods, and constructors. They do not catch errors inside asynchronous code like setTimeout, setInterval, or event handlers.

React Error Boundaries only catch errors in:

✔ Rendering
✔ Lifecycle methods
✔ Constructors

They DO NOT catch errors in:

❌ setTimeout
❌ setInterval
❌ async/await
❌ Event handlers

So your boundary will never catch this error.


React documentation clearly states that Error Boundaries only catch errors in:

✅ Rendering
✅ Lifecycle methods
✅ Constructors of child components

They do NOT catch errors in:

❌ Event handlers (onClick, onChange, etc.)
❌ setTimeout / setInterval
❌ Async code (fetch, async/await)
❌ Server-side rendering

Error Boundaries do not catch errors in event handlers. To handle this, we store the error in state and throw it during render so the Error Boundary can catch it.

*/