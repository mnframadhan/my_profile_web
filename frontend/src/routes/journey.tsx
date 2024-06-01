import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/journey')({
  component: Journey
})


export function Journey() {

  return (
    <>
    <div className='container'>
      <h1>My Journey</h1>

    </div>
    </>
  )
}