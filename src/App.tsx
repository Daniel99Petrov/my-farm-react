import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import SignInForm from "./components/forms/SignInForm";
import PrivateRoutes from "./utils/PrivateRoutes";
import HomePage from "./pages/HomePage";
import FarmsPage from "./pages/Farm/FarmsPage";
import FieldsPage from "./pages/FieldsPage";
import ProcessingsPage from "./pages/ProcessingsPage";
import FarmDetailsPage from "./pages/Farm/FarmDetails/FarmDetailsPage";

const MainHolder = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  div, input, section {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MainHolder>
        <Header />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/farm" element={<FarmsPage />} />
            <Route path="/farm/:farmId" element={<FarmDetailsPage />} />
            <Route path="/field" element={<FieldsPage />} />
            <Route path="/processing" element={<ProcessingsPage />} />
          </Route>
          <Route path="/user/signin" element={<SignInForm />} />
        </Routes>
      </MainHolder>
    </BrowserRouter>
  );
}

export default App;
