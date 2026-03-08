import React, { useEffect } from 'react';

class MyError extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.log('error hai static', error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Caught error:', error, info);
    if (error) {
      console.log('error hai', error);
      //this.setState({ hasError: true });
    }
  }

  render() {
    if (this.state.hasError) {
      return <h2> Something went wrong </h2>;
    }
    return this.props.children;
  }
}

const TestError = () => {
  const [error, setError] = React.useState(null);

  if (error) {
    throw error;
  }

  const handleClick = () => {
    setError(new Error('Component crashed!'));
  };

  return (
    <div>
      <h3 onClick={handleClick}> Test componenet </h3>{' '}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1> My Error </h1>
      <MyError>
        <TestError />
      </MyError>
    </div>
  );
};

export default App;
