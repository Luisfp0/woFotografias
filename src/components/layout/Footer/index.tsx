import instagramIcon from "../../../assets/svgs/instagram.svg"

export const Footer = () => {
  return (
    <div className="flex items-center justify-flex-start px-17 py-7 bg-black">
      <div className="flex justify-between w-full">
        <div className="flex gap-1 ">
          <span className="text-white font-bold text-xs">Wo Fotografia </span>
          <span className="text-white text-xs"> / Contato</span>
        </div>
        <a href="https://www.instagram.com/wo.fotografia/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram Icon" className="h-4 w-4 invert hover:scale-120 transition-transform duration-200" />
        </a>
      </div>
    </div>
  )
}