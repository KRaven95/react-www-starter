import React, { useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
  sidebarPosition: "left" | "right";
  layoutType: "A" | "B" | "C";
};

const Layout: React.FC<LayoutProps> = ({ children, sidebarPosition, layoutType }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleCollapseSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarWidth = isSidebarCollapsed ? "64px" : "240px";
  const sidebarHeight = layoutType === "C" ? "calc(100vh - 64px)" : "100vh";
  const contentHeight = layoutType === "A" ? `calc(${sidebarHeight} - 64px)` : "100vh";

  const sidebar = (
    <div
      style={{
        width: sidebarWidth,
        height: sidebarHeight,
        position: "fixed",
        top: layoutType === "C" ? "64px" : 0,
        bottom: 0,
        [sidebarPosition]: 0,
        backgroundColor: "#f0f0f0",
        transition: "width 0.3s ease-in-out",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "0",
          right: "0",
          textAlign: "center",
          fontSize: "1.5rem"
        }}
      >
        {isSidebarCollapsed ? (
          <button onClick={handleCollapseSidebar}>»</button>
        ) : (
          <button onClick={handleCollapseSidebar}>«</button>
        )}
      </div>
    </div>
  );

  const navbar = (
    <div
      style={{
        height: "64px",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#333",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem"
      }}
    >
      <div>Logo</div>
      <div>Menu</div>
    </div>
  );

  const content = (
    <div
      style={{
        marginLeft: sidebarPosition === "left" ? sidebarWidth : 0,
        marginRight: sidebarPosition === "right" ? sidebarWidth : 0,
        height: contentHeight,
        backgroundColor: "#fff",
        padding: "1rem"
      }}
    >
      {children}
    </div>
  );

  if (layoutType === "A") {
    return (
      <>
        {sidebar}
        <div style={{ marginTop: "64px" }}>
          {navbar}
          {content}
        </div>
      </>
    );
  } else if (layoutType === "B") {
    return (
      <>
        {navbar}
        <div style={{ display: "flex" }}>
          {sidebar}
          {content}
        </div>
      </>
    );
  } else {
    return (
      <>
        {navbar}
        <div style={{ display: "flex", height: "100vh" }}>
          {sidebar}
          {content}
        </div>
      </>
    );
  }
};

export default Layout;
