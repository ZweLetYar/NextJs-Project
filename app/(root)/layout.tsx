import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="text-4xl">Nav bar</nav>
      {children}
    </div>
  );
}

export default layout;
