import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Layout/Sidebar";

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (open) => {
    setSidebarOpen(open);
  };

  return (
    <div>
      <IconButton onClick={() => toggleSidebar(true)}>
        <MenuIcon />
      </IconButton>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main style={{ marginLeft: "240px", padding: "20px" }}>
        <h1>Main Content</h1>
        <p>This is where your main content goes.</p>
      </main>
    </div>
  );
};

export default Layout;
