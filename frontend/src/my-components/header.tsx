
export function Header({title="Header"} ) {

    return (
        <div className="container py-5 ">
          <h3 className='font-bold text-2xl hover:underline'>{title}</h3>
        </div>
    )
}
