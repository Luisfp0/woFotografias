import wo_logo from "../../../public/wo_logo.png"

export const Header = () => {
  return (
    <div className="w-full px-17 py-8 flex items-center gap-4 fixed z-100">
      <div className="flex items-center w-full">
        <img src={wo_logo} alt="WO Logo" className="h-18 cursor-pointer"/>
        <div className="flex gap-6 justify-center w-full">
          <span className="text-1xl cursor-pointer font-bold text-black hover:text-gray-500">Home</span>
          <span className="text-1xl cursor-pointer font-bold text-black hover:text-gray-600">Galerias</span>
          <span className="text-1xl cursor-pointer font-bold text-black hover:text-gray-600">Sobre</span>
          <span className="text-1xl cursor-pointer font-bold text-black hover:text-gray-600">Depoimentos</span>
        </div>
      </div>
    </div>
  )
}