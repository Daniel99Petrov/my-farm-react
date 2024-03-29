import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Global/header/Header";
import FarmsPage from "./pages/Farm/FarmsPage/FarmsPage";
import FieldsPage from "./pages/Field/FieldsPage/FieldsPage";
import ProcessingPage from "./pages/Processing/ProcessingPage/ProcessingPage";
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
import { routes } from "./static/routes/routes";
import { AuthProvider } from "./contexts/AuthContext";
import Error from "./pages/Error/Error";
import UpdateMachinePage from "./pages/Machine/UpdateMachinePage/UpdateMachinePage";
import UpdateFarmPage from "./pages/Farm/UpdateFarmPage/UpdateFarmPage";
import UpdateFieldPage from "./pages/Field/Update/UpdateFieldPage";
import GrowingPeriodDetailsPage from "./pages/GrowingPeriod/GrowingPeriodDetailsPage/GrowingPeriodDetailsPage";
import CreateGrowingPeriodPage from "./pages/GrowingPeriod/CreateGrowingPeriodPage/CreateGrowingPeriodPage";
import { GlobalStyle, MainHolder } from "./ui_elements/CommonStyledElements";
import SignUpPage from "./pages/Auth/SignUpPage/SingUpPage";
import SignInPage from "./pages/Auth/SingInPage/SingInPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <MainHolder>
          <Header />
          <Routes>
            {/* <Route element={<PrivateRoutes />}> */}
            <Route path={routes.farm} element={<FarmsPage />} />
            <Route path={routes.farmDetails} element={<FarmDetailsPage />} />
            <Route path={routes.createFarm} element={<CreateFarmPage />} />
            <Route path={routes.updateFarm} element={<UpdateFarmPage />} />
            <Route path={routes.field} element={<FieldsPage />} />
            <Route path={routes.fieldDetails} element={<FieldDetailsPage />} />
            <Route path={routes.createField} element={<CreateFieldPage />} />
            <Route path={routes.updateField} element={<UpdateFieldPage />} />
            <Route path={routes.machine} element={<MachinesPage />} />
            <Route
              path={routes.machineDetails}
              element={<MachineDetailsPage />}
            />
            <Route
              path={routes.updateMachine}
              element={<UpdateMachinePage />}
            />
            <Route
              path={routes.createMachine}
              element={<CreateMachinePage />}
            />
            <Route
              path={routes.growingPeriodDetails}
              element={<GrowingPeriodDetailsPage />}
            />
            <Route
              path={routes.createGrowingPeriod}
              element={<CreateGrowingPeriodPage />}
            />
            <Route path={routes.processing} element={<ProcessingPage />} />
            <Route
              path={routes.createProcessing}
              element={<CreateProcessingPage />}
            />
            <Route
              path={routes.processingType}
              element={<ProcessingTypesPage />}
            />
            <Route
              path={routes.createProcessingType}
              element={<CreateProcessingTypePage />}
            />
            <Route path={routes.crop} element={<CropsPage />} />
            <Route path={routes.createCrop} element={<CreateCropPage />} />
            <Route path={routes.soil} element={<SoilsPage />} />
            <Route path={routes.createSoil} element={<CreateSoilPage />} />
            <Route path={routes.notFound} element={<Error />} />
            {/* </Route> */}
            <Route path={routes.signIn} element={<SignInPage />} />
            <Route path={routes.signUp} element={<SignUpPage />} />
          </Routes>
        </MainHolder>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
