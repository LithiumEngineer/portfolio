const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-screen h-[100px] bg-gradient-to-r from-indigo-700 to-purple-900">
      <div className="ml-10 text-white">Kevin Kang</div>
      <div className="flex ">
        <div className="px-5 mx-5 text-md text-white rounded-lg py-2 opacity-70 bg-opacity-0 hover:cursor-pointer bg-violet-950 hover:opacity-100 hover:bg-opacity-100 duration-700">
          PROJECTS
        </div>
        <div className="px-5 mx-5 text-md text-white rounded-lg py-2 opacity-70 bg-opacity-0 hover:cursor-pointer bg-violet-950 hover:opacity-100 hover:bg-opacity-100 duration-700">
          EXPERIENCE
        </div>
        <div className="px-5 mx-5 text-md text-white rounded-lg py-2 opacity-70 bg-opacity-0 hover:cursor-pointer bg-violet-950 hover:opacity-100 hover:bg-opacity-100 duration-700">
          RESUME
        </div>
      </div>
    </div>
  )
}
export default Navbar
