import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/examples')({
  component: () => <div>Hello /examples!</div>
})