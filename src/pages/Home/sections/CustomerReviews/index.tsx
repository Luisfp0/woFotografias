import deividVeras from "../../../../assets/reviews/deividVeras.jpg"
import romeriaCavalcante from "../../../../assets/reviews/romeriaCavalcante.jpeg"

import { Carousel } from "../Carousel"

export const CustomerReviews = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center w-full gap-10 px-5">
      <h1 className="text-2xl font-bold text-center">Clientes estão dizendo</h1>
        <Carousel> 
          <article className="flex-[0_0_100%] ">
            <div className="mx-auto flex flex-col items-center gap-10 max-w-2xl">
              <img src={deividVeras} className="w-40 h-40 rounded-full" />
              <span className="text-xs text-center px-5">
                O trabalho do Wanderson é um agregador de valor aos eventos, gravando memorias em fotografias 
                registradas com o olhar de quem tem a sensibilidade para captar a emoção das pessoas.
              </span>
              <span className="text-xs font-semibold">DEIVID VERAS</span>
            </div>
          </article>
          <article className="flex-[0_0_100%] ">
            <div className="mx-auto flex flex-col items-center gap-10 max-w-2xl">
              <img src={romeriaCavalcante} className="w-40 h-40 rounded-full" />
              <span className="text-xs text-center px-5">
                As fotos do meu baby ficaram lindas. Superaram minhas expectativas. Ótimo profissional, super indico!
              </span>
              <span className="text-xs font-semibold">ROMERIA CAVALCANTE</span>
            </div>
          </article>
      </Carousel>
    </div>  
  )
}