import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Dashboard from "./Pages/Dashboard";
import Supplier from "./Pages/Supplier";
import ChangePassword from "./Pages/ChangePassword";
import Notification from "./Pages/Notification";
import PermissionCheck from "./Pages/PermissionCheck";
import Permission from "./Pages/Permission";
import AddManually from "./Pages/AddManually";
import AddEmployee from "./Pages/AddEmployee";
import ViewEmployee from "./Pages/ViewEmployee";
import Chat from "./Pages/Chat";
import Analysis from "./Pages/Analysis";
import Sell from "./Pages/Sell";
import MedicineRequest from "./Pages/MedicineRequest";
import Returns from "./Pages/Returns";
import AddReturn from "./Pages/AddReturn";
import EditReturn from "./Pages/EditReturn";
import NewGeneratePo from "./Pages/NewGeneratePo";
import EditGeneratePo from "./Pages/EditGeneratePo";
import EditProfile from "./Pages/EditProfile";
import Error from "./Pages/Error";
import InventoryList from "./Pages/InventoryList";
import NewAnalysis from "./Pages/NewAnalysis";
import PrescriptionsBar from "./Pages/PrescriptionsBar";
import PrescriptionDetails from "./Pages/PrescriptionDetails";
import AddPrescriptionDetails from "./Pages/AddPrescriptionDetails";
import ScanPrescriptionDetails from "./Pages/ScanPrescriptionDetails";
import Employee from "./Pages/Employee";
import Profile from "./Pages/Profile";
import GenerateList from "./Pages/GenerateList";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ForgotPassword";
import Otp from "./Auth/Otp";
import SetPassword from "./Auth/SetPassword";
import CreateAccount from "./Auth/CreateAccount";
import CreateAccountImage from "./Auth/CreateAccountImage";
import CreateAccountAddress from "./Auth/CreateAccountAddress";
import CreateAccountUpload from "./Auth/CreateAccountUpload";
import CreateAccountPerson from "./Auth/CreateAccountPerson";
import ApproveProfile from "./Pages/ApproveProfile";
import ProtectedRoute from "./ProtectedRoute";
import Wating from "./Auth/Waiting";
import H1Medicine from "./Pages/H1Medicine";
import XMedicine from "./Pages/XMedicine";
import HMedicine from "./Pages/HMedicine";
import OtherMedicine from "./Pages/OtherMedicine";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,

      children: [
        // -----------------------------
        // 🔒 PROTECTED ROUTES
        // -----------------------------
        { index: true, element: <ProtectedRoute component={Dashboard} /> },

        { path: "/dashboard", element: <ProtectedRoute component={Dashboard} /> },

        { path: "/sell", element: <ProtectedRoute component={Sell} /> },

        { path: "/prescriptions-bar/:id", element: <ProtectedRoute component={PrescriptionsBar} /> },

        { path: "/prescriptions-detail/:id", element: <ProtectedRoute component={PrescriptionDetails} /> },

        { path: "/add-prescriptions-detail", element: <ProtectedRoute component={AddPrescriptionDetails} /> },

        { path: "/scan-prescriptions-detail/:id", element: <ProtectedRoute component={ScanPrescriptionDetails} /> },

        { path: "/add-manually", element: <ProtectedRoute component={AddManually} /> },

        { path: "/supplier", element: <ProtectedRoute component={Supplier} /> },

        { path: "/generate-list", element: <ProtectedRoute component={GenerateList} /> },

        { path: "/new-generate", element: <ProtectedRoute component={NewGeneratePo} /> },

        { path: "/edit-generate", element: <ProtectedRoute component={EditGeneratePo} /> },

        { path: "/returns", element: <ProtectedRoute component={Returns} /> },

        { path: "/add-return", element: <ProtectedRoute component={AddReturn} /> },

        { path: "/edit-return", element: <ProtectedRoute component={EditReturn} /> },

        { path: "/analysis", element: <ProtectedRoute component={Analysis} /> },

        { path: "/new-analysis", element: <ProtectedRoute component={NewAnalysis} /> },

        { path: "/inventory", element: <ProtectedRoute component={InventoryList} /> },

        { path: "/chat", element: <ProtectedRoute component={Chat} /> },

        { path: "/profile", element: <ProtectedRoute component={Profile} /> },

        { path: "/approve-profile", element: <ProtectedRoute component={ApproveProfile} /> },

        { path: "/edit-profile", element: <ProtectedRoute component={EditProfile} /> },

        { path: "/employee", element: <ProtectedRoute component={Employee} /> },

        { path: "/add-employee", element: <ProtectedRoute component={AddEmployee} /> },

        { path: "/view-employee/:name/:id", element: <ProtectedRoute component={ViewEmployee} /> },

        { path: "/permission-check/:name/:id", element: <ProtectedRoute component={PermissionCheck} /> },

        { path: "/permission", element: <ProtectedRoute component={Permission} /> },

        { path: "/change-password", element: <ProtectedRoute component={ChangePassword} /> },

        { path: "/notification", element: <ProtectedRoute component={Notification} /> },

        { path: "/medicine-request", element: <ProtectedRoute component={MedicineRequest} /> },

        { path: "/wating-for-approval", element: <ProtectedRoute component={Wating} /> },
        { path: "/h1", element: <ProtectedRoute component={H1Medicine} /> },
        { path: "/h", element: <ProtectedRoute component={HMedicine} /> },
        { path: "/x", element: <ProtectedRoute component={XMedicine} /> },
        { path: "/other-medicine", element: <ProtectedRoute component={OtherMedicine} /> },


        // -----------------------------
        // 🔓 PUBLIC ROUTES
        // -----------------------------
        { path: "/login", element: <Login /> },
        { path: "/forgot-password", element: <ForgotPassword /> },
        { path: "/otp", element: <Otp /> },
        { path: "/set-password", element: <SetPassword /> },
        { path: "/create-account", element: <CreateAccount /> },

        // If these should be protected (same as second example), wrap them
        { path: "/create-account-image", element: <ProtectedRoute component={CreateAccountImage} /> },
        { path: "/create-account-address", element: <ProtectedRoute component={CreateAccountAddress} /> },
        { path: "/create-account-person", element: <ProtectedRoute component={CreateAccountPerson} /> },
        { path: "/create-account-upload", element: <ProtectedRoute component={CreateAccountUpload} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
