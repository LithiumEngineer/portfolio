const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-[70px] bg-gradient-to-r from-indigo-700 to-purple-900">
      <div className="ml-10 text-white">Kevin Kang</div>
      <div className="flex ">
        <div className="px-5 mx-5 text-white opacity-70 hover:cursor-pointer hover:opacity-100 duration-500">
          Projects
        </div>
        <div className="px-5 mx-5 text-white opacity-70 hover:cursor-pointer hover:opacity-100 duration-500">
          Experience
        </div>
        <div className="px-5 mx-5 text-white opacity-70 hover:cursor-pointer hover:opacity-100 duration-500">
          Resume
        </div>
      </div>
    </div>
  )
}
export default Navbar
