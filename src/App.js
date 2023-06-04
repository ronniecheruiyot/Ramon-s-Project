import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/home";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./styles/theme";
import Products from "./pages/products";

function App() {
  return (
      <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </ThemeProvider>
  );
}

export default App;
