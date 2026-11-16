import wo_logo from "../../../../public/wo_logo.png"

export const Header = () => {
  return (
    <div className="w-full px-16 gap-4 fixed z-1 bg-white">
      <div className="flex items-center w-full">
        <img src={wo_logo} alt="WO Logo" className="h-14 sm:h-14 md:h-16 lg:h-18 cursor-pointer"/>
        <nav className="flex w-full justify-center" aria-label="Navegação principal">
          <ul className="flex gap-6">
            <li><a className="text-xs font-bold md:text-sm lg:text-base" href="#home">Home</a></li>
            <li><a className="text-xs font-bold md:text-sm lg:text-base" href="#gallery">Galerias</a></li>
            <li><a className="text-xs font-bold md:text-sm lg:text-base" href="#about">Sobre</a></li>
            <li><a className="text-xs font-bold md:text-sm lg:text-base" href="#testimonials">Depoimentos</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}