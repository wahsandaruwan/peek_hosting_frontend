const MobileMenu = () => {
  return (
    <>
      <ul className="absolute top-[105px] left-0 w-full bg-blue-200 px-8">
        <li className="border-b-2 border-zinc-200 w-full">Home</li>
        <li className="border-b-2 border-zinc-200 w-full">About</li>
        <li className="border-b-2 border-zinc-200 w-full">Hosting</li>
        <li className="border-b-2 border-zinc-200 w-full">Domain</li>
        <li className="border-b-2 border-zinc-200 w-full">SSL</li>
        <li className="border-b-2 border-zinc-200 mb-3 w-full">Contact</li>
        <div className="flex justify-center my-5">
          <button className="mr-3">Login</button>
          <button>Register</button>
        </div>
      </ul>
    </>
  )
}
export default MobileMenu
