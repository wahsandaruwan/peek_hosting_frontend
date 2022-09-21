const MobileMenu = () => {
  return (
    <>
      <ul className="absolute top-[105px] left-0 w-full bg-blue-200 px-8">
        <li className="border-b-2 border-zinc-200 w-full text-center">Home</li>
        <li className="border-b-2 border-zinc-200 w-full text-center">About</li>
        <li className="border-b-2 border-zinc-200 w-full text-center">
          Hosting
        </li>
        <li className="border-b-2 border-zinc-200 w-full text-center">
          Domain
        </li>
        <li className="border-b-2 border-zinc-200 w-full text-center">SSL</li>
        <li className="border-b-2 border-zinc-200 mb-3 w-full text-center">
          Contact
        </li>
        <div className="flex justify-center my-5">
          <button className="mr-3">Login</button>
          <button>Register</button>
        </div>
      </ul>
    </>
  )
}
export default MobileMenu
