import wo_logo from "../../../../public/wo_logo.png"

export const Header = () => {
  return (
    <div className="w-full px-16 gap-4 fixed z-1 bg-white">
      <div className="flex items-center w-full">
        <img src={wo_logo} alt="WO Logo" className="h-14 sm:h-14 md:h-16 lg:h-18 cursor-pointer"/>
        <div className="flex gap-6 justify-center w-full">
          <span className="text-xs md:text-sm lg:text-base cursor-pointer font-bold text-black hover:text-gray-500">Home</span>
          <span className="text-xs md:text-sm lg:text-base cursor-pointer font-bold text-black hover:text-gray-600">Galerias</span>
          <span className="text-xs md:text-sm lg:text-base cursor-pointer font-bold text-black hover:text-gray-600">Sobre</span>
          <span className="text-xs md:text-sm lg:text-base cursor-pointer font-bold text-black hover:text-gray-600">Depoimentos</span>
        </div>
      </div>
    </div>
  )
}