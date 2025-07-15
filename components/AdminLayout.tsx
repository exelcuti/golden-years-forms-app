import React from "react";
import { Navigate, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Home, FileText, Settings, LogOut, ArrowLeft } from "lucide-react";
import { ColorModeToggle } from "./ColorModeToggle";

const AdminLayout = () => {
  const { currentUser, logout } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we're viewing a form (for back button on mobile)
  const isViewingForm = location.pathname.match(/\/admin\/forms\/[^/]+$/);
  const isEditingForm = location.pathname.includes('/admin/forms/') && location.pathname.endsWith('/edit');

  if (!currentUser) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* Mobile Top Navigation */}
      <div className="md:hidden bg-healthcare-700 text-white p-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {(isViewingForm || isEditingForm) ? (
              <Button 
                variant="ghost" 
                className="text-white hover:bg-healthcare-600/50 p-0"
                onClick={() => navigate("/admin/forms")}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </Button>
            ) : (
              <h1 className="font-semibold">RCFE Admin</h1>
            )}
          </div>
          <div className="flex items-center gap-1">
            <ColorModeToggle />
            <Button 
              variant="ghost" 
              className="text-white hover:bg-healthcare-600/50" 
              onClick={logout}
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-56 md:flex-col md:fixed md:inset-y-0 bg-healthcare-700 text-white">
        <div className="flex-1 flex flex-col pt-4 pb-2 overflow-y-auto">
          <div className="px-3">
            <h1 className="font-semibold text-lg mb-4">RCFE Admin</h1>
          </div>
          <nav className="flex-1 px-2 space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-healthcare-600/50"
              onClick={() => navigate("/admin/dashboard")}
            >
              <Home className="mr-2 h-5 w-5" />
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-healthcare-600/50"
              onClick={() => navigate("/admin/forms")}
            >
              <FileText className="mr-2 h-5 w-5" />
              Forms
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-healthcare-600/50"
              onClick={() => navigate("/admin/settings")}
            >
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
          </nav>
        </div>
        <div className="p-3">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white hover:bg-healthcare-600/50"
            onClick={logout}
          >
            <LogOut className="mr-2 h-5 w-5" />
            Log Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:pl-56">
        {/* Mobile Bottom Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around z-10">
          <Button 
            variant="ghost" 
            className="flex-1 py-2 rounded-none" 
            onClick={() => navigate("/admin/dashboard")}
          >
            <div className="flex flex-col items-center">
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Dashboard</span>
            </div>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-1 py-2 rounded-none" 
            onClick={() => navigate("/admin/forms")}
          >
            <div className="flex flex-col items-center">
              <FileText className="h-5 w-5" />
              <span className="text-xs mt-1">Forms</span>
            </div>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-1 py-2 rounded-none" 
            onClick={() => navigate("/admin/settings")}
          >
            <div className="flex flex-col items-center">
              <Settings className="h-5 w-5" />
              <span className="text-xs mt-1">Settings</span>
            </div>
          </Button>
        </div>

        <main className="p-4 pb-20 md:p-6 md:pb-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
