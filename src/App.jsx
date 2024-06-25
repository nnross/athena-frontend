import { Outlet } from 'react-router-dom';
import React from 'react';
// ensin header sit outler sit footer
export default function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
