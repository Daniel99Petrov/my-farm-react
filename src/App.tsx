import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import SignInForm from "./components/forms/Global/SignInForm";
import PrivateRoutes from "./utils/PrivateRoutes";
import HomePage from "./pages/Home/HomePage";
import FarmsPage from "./pages/Farm/FarmsPage/FarmsPage";
import FieldsPage from "./pages/Field/FieldsPage/FieldsPage";
import ProcessingPage from "./pages/Processing/ProcessingPage";
import FarmDetailsPage from "./pages/Farm/FarmDetailsPage/FarmDetailsPage";
import CreateFarmPage from "./pages/Farm/CreateFarmPage/CreateFarmPage";
import FieldDetailsPage from "./pages/Field/FieldDetailsPage/FieldDetailsPage";
import CreateFieldPage from "./pages/Field/CreateFieldPage/CreateFieldPage";
import MachinesPage from "./pages/Machine/MachinesPage/MachinesPage";
import CreateMachinePage from "./pages/Machine/CreateMachinePage/CreateMachinePage";
import MachineDetailsPage from "./pages/Machine/MachineDetailsPage/MachineDetailsPage";
import CropsPage from "./pages/Crop/CropsPage/CropsPage";
import ProcessingTypesPage from "./pages/ProcessingType/ProcessingTypesPage/ProcessingTypesPage";
import SoilsPage from "./pages/Soil/SoilsPage/SoilPage";
import CreateSoilPage from "./pages/Soil/CreateSoilPage/CreateSoilPage";
import CreateProcessingTypePage from "./pages/ProcessingType/CreateProcessingTypePage/CreateProcessingTypePage";
import CreateCropPage from "./pages/Crop/CreateCropPage/CreateCropPage";
import CreateProcessingPage from "./pages/Processing/CreateProcessingPage/CreateProcessingPage";
import { routes } from "./routes/routes";
import { AuthProvider } from "./contexts/AuthContext";

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
    <AuthProvider>
      <GlobalStyle />
      <MainHolder>
        <Header />
        <Routes>
        {/* <Route element={<PrivateRoutes />}> */}
            <Route path={routes.welcome} element={<HomePage />} />
            <Route path={routes.farm} element={<FarmsPage />} />
            <Route path={routes.farmDetails} element={<FarmDetailsPage />} />
            <Route path={routes.createFarm} element={<CreateFarmPage />} />
            <Route path={routes.field} element={<FieldsPage />} />
            <Route path={routes.fieldDetails} element={<FieldDetailsPage />} />
            <Route path={routes.createField} element={<CreateFieldPage />} />
            <Route path={routes.machine} element={<MachinesPage />} />
            <Route path={routes.machineDetails} element={<MachineDetailsPage />} />
            <Route path={routes.createMachine} element={<CreateMachinePage />} />
            <Route path={routes.processing} element={<ProcessingPage />} />
            <Route path={routes.createProcessing} element={<CreateProcessingPage />} />
            <Route path={routes.processingType} element={<ProcessingTypesPage />} />
            <Route path={routes.createProcessingType} element={<CreateProcessingTypePage />} />
            <Route path={routes.crop} element={<CropsPage />} />
            <Route path={routes.createCrop} element={<CreateCropPage />} />
            <Route path={routes.soil} element={<SoilsPage />} />
            <Route path={routes.createSoil} element={<CreateSoilPage />} />
          {/* </Route> */}
          <Route path={routes.signIn} element={<SignInForm />} />
        </Routes>
      </MainHolder>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
