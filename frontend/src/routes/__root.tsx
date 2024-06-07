import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="py-2 flex justify-between w-full shadow items-center bg-indigo-50">
        <div className='px-24'>
          <Link to='/'>
            <h3 className='text-xl font-semibold'>MilenialSolusindo</h3>
          </Link>
          
        </div>

        <div className='flex gap-4 '>
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/service" className="[&.active]:font-bold">
            Services
          </Link>
        </div>
        <div className='px-24'>
          <Button>Login</Button>
        </div>
      </div>
      <Outlet />
    </>
  ),
})


