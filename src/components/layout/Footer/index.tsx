import instagramIcon from "../../../assets/svgs/instagram.svg"

export const Footer = () => {
  return (
    <div className="flex items-center justify-flex-start px-17 py-6 sm:py-7 bg-black">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-1">
          <span className="text-white font-bold text-xs lg:text-base">Wo Fotografia </span>
          <span className="text-white text-xs lg:text-base"> / Contato</span>
        </div>
        <a href="https://www.instagram.com/wo.fotografia/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram Icon" className="h-3 w-3 sm:h-4 sm:w-4 invert hover:scale-120 transition-transform duration-200" />
        </a>
      </div>
    </div>
  )
}