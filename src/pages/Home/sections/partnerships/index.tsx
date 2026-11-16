import leveLogo from "../../../../assets/partnerShips/leve.png"
import geneseLogo from "../../../../assets/partnerShips/genese.png"
import outsideLogo from "../../../../assets/partnerShips/outside.png"
import tmaisLogo from "../../../../assets/partnerShips/tmais.png"

export const PartnerShips = () => { 
  return (
    <section className="flex flex-col w-full items-center justify-center gap-22">
      <h1 className="text-2xl font-bold">Parcerias</h1>
      <ul className="flex gap-5 items-center">
        <li>
          <a href="https://turbomais.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={tmaisLogo} alt="Turbomais Logo" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/geneseturismo/" target="_blank" rel="noopener noreferrer">
            <img src={geneseLogo} alt="Genese Logo" />
          </a>
        </li>
        <li>
          <a href="https://levesupermercado.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={leveLogo} alt="Leve logo" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/outsideadventureanapolis/" target="_blank" rel="noopener noreferrer">
            <img src={outsideLogo} alt="Outside Logo" />
          </a>
        </li>
      </ul>
    </section>
  )
}