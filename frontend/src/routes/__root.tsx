import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { ModeToggle } from '@/components/mode-toggle'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="container py-2 flex justify-between items-center">

        <div className='flex gap-4'>

        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/service" className="[&.active]:font-bold">
          Services
        </Link>
        <Link to="/journey" className="[&.active]:font-bold">
          My Journey
        </Link>
        </div>
        <ModeToggle></ModeToggle>
      </div>
      <hr />
      <Outlet />
    </>
  ),
})


