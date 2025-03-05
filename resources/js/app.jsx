import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
            <h1>Hello, Laravel with React!</h1>
        </div>
    );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
