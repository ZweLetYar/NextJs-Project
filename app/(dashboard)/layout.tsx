import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <aside className="text-4xl text-teal-700">Side Nav bar</aside>
      {children}
    </div>
  );
}

export default layout;
