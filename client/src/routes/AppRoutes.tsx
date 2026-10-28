import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboardPage";
import RetailerLayout from "../layouts/RetailerLayout";
import RetailerDashboard from "../pages/retailer/RetailerDashboard";
import SupplierLayout from "../layouts/SupplierLayout";
import SupplierDashboard from "../pages/supplier/SupplierDashboardPage";
import ForgotPassword from "../pages/auth/ForgotPassword";
import KycOnboarding from "../pages/auth/KycOnboarding";
import MarketplaceHome from "../pages/home/MarketplaceHome";
import AiSearch from "../pages/retailer/AiSearch";
import ProductDetail from "../pages/retailer/ProductDetail";
import CartPage from "../pages/retailer/CartPage";
import CheckoutPage from "../pages/retailer/CheckoutPage";
import OrdersPage from "../pages/retailer/RetailerOrdersPage";
import InventoryPage from "../pages/retailer/InventoryPage";
import SupplierDashboardPage from "../pages/supplier/SupplierDashboardPage";
import ProductsPage from "../pages/supplier/ProductsPage";
import AINegotiationPage from "../pages/supplier/AINegotiationPage";
import RetailerOrdersPage from "../pages/retailer/RetailerOrdersPage";
import SupplierOrdersPage from "../pages/supplier/SupplierOrdersPage";
import LogisticsPage from "../pages/supplier/LogisticsPage";
import PayoutsPage from "../pages/supplier/PayoutsPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import KycQueuePage from "../pages/admin/KycQueuePage";
import UsersPage from "../pages/admin/UsersPage";
import RevenuePage from "../pages/admin/RevenuePage";
import FraudPage from "../pages/admin/FraudPage";
import FraudCaseDetail from "../pages/admin/FraudCaseDetail";
import SettingsPage from "../pages/retailer/SettingsPage";
import SuppliersPage from "../pages/retailer/SuppliersPage";
import PaymentsPage from "../pages/retailer/PaymentsPage";
import SupplierForecastingPage from "../pages/supplier/Forecasting";
import TransactionsPage from "../pages/admin/Transactions";
import ProtectedRoute from "../components/common/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes  */}
        <Route path="/" element={<MarketplaceHome />} />
        <Route path="/marketplace" element={<MarketplaceHome />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Auth & Onboarding Flow */}
        <Route path="/onboarding/kyc" element={<KycOnboarding />} />

        {/* Retailer Workspace Routes */}
        <Route element={<ProtectedRoute allowedRoles={["retailer"]} />}>
          <Route path="/retailer/dashboard" element={<RetailerDashboard />} />
          <Route path="/retailer/ai-search" element={<AiSearch />} />
          <Route path="/retailer/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/retailer/checkout" element={<CheckoutPage />} />
          <Route path="/retailer/orders" element={<RetailerOrdersPage />} />
          <Route path="/retailer/inventory" element={<InventoryPage />} />
          <Route path="/retailer/settings" element={<SettingsPage />} />
          <Route path="/retailer/suppliers" element={<SuppliersPage />} />
          <Route path="/retailer/payments" element={<PaymentsPage />} />
          {/* Default fallback route (Redirects to Settings or Fraud page) */}
          {/* <Route path="*" element={<Navigate to="/retailer/settings" replace />} /> */}
        </Route>

        {/* Admin Routes  */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/kyc" element={<KycQueuePage />} />
          <Route path="/admin/users" element={<UsersPage />} />
          <Route path="/admin/revenue" element={<RevenuePage />} />
          <Route path="/admin/transactions" element={<TransactionsPage />} />
          <Route path="/admin/fraud" element={<FraudPage />} />
          {/* Dynamic Fraud Case Detail View */}
          <Route path="/admin/fraud/:caseId" element={<FraudCaseDetail />} />
        </Route>

        {/* Fallback redirect */}
        {/* <Route path="*" element={<Navigate to="/admin/fraud" replace />} /> */}

        {/* Supplier Routes  */}
        <Route element={<ProtectedRoute allowedRoles={["supplier"]} />}>
          <Route
            path="/supplier/dashboard"
            element={<SupplierDashboardPage />}
          />
          <Route path="/supplier/products" element={<ProductsPage />} />
          <Route
            path="/supplier/ai-negotiation"
            element={<AINegotiationPage />}
          />
          <Route path="/supplier/orders" element={<SupplierOrdersPage />} />
          <Route path="/supplier/logistics" element={<LogisticsPage />} />
          <Route path="/supplier/payouts" element={<PayoutsPage />} />
          <Route
            path="/supplier/forecasting"
            element={<SupplierForecastingPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
