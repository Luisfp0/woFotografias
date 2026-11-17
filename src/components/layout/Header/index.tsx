import wo_logo from "../../../../public/wo_logo.png"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div className="w-full px-16 gap-4 fixed z-1 bg-white">
      <div className="flex items-center w-full">
        <img src={wo_logo} alt="WO Logo" className="h-14 sm:h-14 md:h-16 lg:h-18 cursor-pointer"/>
        <nav className="flex w-full justify-center" aria-label="Navegação principal">
          <ul className="flex gap-6">
            <li><Link className="text-xs font-bold md:text-sm lg:text-base" to="/home">Home</Link></li>
            <li><Link className="text-xs font-bold md:text-sm lg:text-base" to="/gallery">Galeria</Link></li>
            <li><Link className="text-xs font-bold md:text-sm lg:text-base" to="/about">Sobre</Link></li>
            <li><Link className="text-xs font-bold md:text-sm lg:text-base" to="/testimonials">Depoimentos</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}