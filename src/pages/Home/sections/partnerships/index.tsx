import leveLogo from "../../../../assets/partnerShips/leve.png"
import geneseLogo from "../../../../assets/partnerShips/genese.png"
import outsideLogo from "../../../../assets/partnerShips/outside.png"
import tmaisLogo from "../../../../assets/partnerShips/tmais.png"

const logoClassName = "h-15 w-23 object-contain transition-transform duration-200 hover:scale-110 sm:h-20 sm:w-32 md:h-24 md:w-36"

export const PartnerShips = () => { 

  return (
    <section className="flex flex-col w-full items-center justify-center gap-10 pb-5 px-5">
      <h1 className="text-lg sm:text-2xl font-bold">Parcerias</h1>
      <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        <li>
          <a href="https://turbomais.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={tmaisLogo} className={logoClassName} alt="Turbomais Logo" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/geneseturismo/" target="_blank" rel="noopener noreferrer">
            <img src={geneseLogo} className={logoClassName} alt="Genese Logo" />
          </a>
        </li>
        <li>
          <a href="https://levesupermercado.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={leveLogo} className={logoClassName} alt="Leve logo" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/outsideadventureanapolis/" target="_blank" rel="noopener noreferrer">
            <img src={outsideLogo} className={logoClassName} alt="Outside Logo" />
          </a>
        </li>
      </ul>
    </section>
  )
}