import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { ModeToggle } from '@/components/mode-toggle'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="py-2 flex justify-between w-full shadow items-center">

        <div className='flex gap-4 px-24'>
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/service" className="[&.active]:font-bold">
            Services
          </Link>
        </div>
        <div className='px-24'>
          <ModeToggle></ModeToggle>
        </div>
      </div>
      <hr />
      <Outlet />
    </>
  ),
})


