//App.tsx

import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MapView from "./MapView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="App">
          <MapView />
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}