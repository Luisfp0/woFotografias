import wo_logo from "../../../../public/wo_logo.png"
import { Link } from "react-router-dom"

export const Header = () => {  
  return (
    <div className="w-full px-16 gap-4 fixed z-1 bg-white">
      <div className="flex items-center w-full">
        <Link to="/home" aria-label="Página inicial">
          <img
            src={wo_logo}
            alt="WO Fotografia"
            className="h-14 cursor-pointer hover:scale-110 md:h-16 lg:h-18"
          />
        </Link>
        <nav className="flex w-full justify-center" aria-label="Navegação principal">
          <ul className="flex gap-6 text-xs font-bold md:text-sm lg:text-base">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/gallery">Galeria</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/testimonials">Depoimentos</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}