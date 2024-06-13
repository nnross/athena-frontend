import { Outlet } from 'react-router-dom'
// ensin header sit outler sit footer
export default function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}