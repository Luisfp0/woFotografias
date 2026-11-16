import leveLogo from "../../../../assets/partnerShips/leve.png"
import geneseLogo from "../../../../assets/partnerShips/genese.png"
import outsideLogo from "../../../../assets/partnerShips/outside.png"
import tmaisLogo from "../../../../assets/partnerShips/tmais.png"

export const PartnerShips = () => { 
  return (
    <section className="flex flex-col w-full items-center justify-center gap-22 pb-10 px-5">
      <h1 className="text-2xl font-bold">Parcerias</h1>
      <ul className="flex gap-10 items-center">
        <li>
          <a href="https://turbomais.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={tmaisLogo} className="hover:scale-110 transition-transform duration-200" alt="Turbomais Logo" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/geneseturismo/" target="_blank" rel="noopener noreferrer">
            <img src={geneseLogo} className="hover:scale-110 transition-transform duration-200" alt="Genese Logo" />
          </a>
        </li>
        <li>
          <a href="https://levesupermercado.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={leveLogo} className="hover:scale-110 transition-transform duration-200" alt="Leve logo" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/outsideadventureanapolis/" target="_blank" rel="noopener noreferrer">
            <img src={outsideLogo} className="hover:scale-110 transition-transform duration-200" alt="Outside Logo" />
          </a>
        </li>
      </ul>
    </section>
  )
}