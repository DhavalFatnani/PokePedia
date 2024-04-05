import { React, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="App"></div>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
