import useEmblaCarousel from "embla-carousel-react"
import type { CarouselProps } from "./types"
import Autoplay from 'embla-carousel-autoplay'
import { useEffect } from "react"

export const Carousel = ({ loop = true, children }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop }, [Autoplay( { delay: 5000, stopOnInteraction: false })])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.plugins().autoplay?.play()
  }, [emblaApi])

  return (
    <div className="flex items-center justify-center w-full">
      <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="flex">
          {children}
        </div>
      </div>
    </div>
  )
}