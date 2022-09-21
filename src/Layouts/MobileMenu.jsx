const MobileMenu = () => {
  return (
    <>
      <ul className="absolute top-[80px] left-0 w-full bg-blue-200 px-8 text-center">
        <li className="border-b-2 border-zinc-200 w-full mx-0">Home</li>
        <li className="border-b-2 border-zinc-200 w-full mx-0">About</li>
        <li className="border-b-2 border-zinc-200 w-full mx-0">Hosting</li>
        <li className="border-b-2 border-zinc-200 w-full mx-0">Domain</li>
        <li className="border-b-2 border-zinc-200 w-full mx-0">SSL</li>
        <li className="border-b-2 border-zinc-200 mb-3 w-full mx-0">Contact</li>
        <div className="flex justify-center my-5">
          <button className="mr-3">Login</button>
          <button>Register</button>
        </div>
      </ul>
    </>
  )
}
export default MobileMenu
