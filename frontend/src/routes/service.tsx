import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/service')({
  component: Service
})

function Service() {
  return (
    <div className="container flex sm: flex-col md:flex-row mt-10 px-10 gap-4">
      <h3>Hello</h3>
      </div>
  )
}