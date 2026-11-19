import { useState } from 'react'
import type { PortfolioShowcaseProps, SelectedImage } from './types'
import { CloseIcon } from '../../assets/svgs/CloseIcon'
import { NextIcon } from '../../assets/svgs/nextIcon'

export const PortfolioShowcase = ({ portfolioImages, className }: PortfolioShowcaseProps) => {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null)

  const handleNextPrevImage = (nextPrev: 'next' | 'prev') => {
    if (!selectedImage) return

    const offset = nextPrev === 'next' ? 1 : -1
    const nextIndex = (selectedImage.index + offset + portfolioImages.length) % portfolioImages.length

    setSelectedImage({ image: portfolioImages[nextIndex], index: nextIndex })
  }

  return (
    <div className={`${className ? className : "grid grid-cols-2 lg:grid-cols-4"} w-full gap-[0.3px] lg:gap-0`}>
        {selectedImage &&
        <>
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-1 cursor-pointer bg-black peer modal-backdrop"
          />
          <img
            className="fixed z-1 left-1/2 top-1/2 w-md sm:w-lg md:w-2xl lg:w-4xl -translate-x-1/2 -translate-y-1/2 rounded-3xl"
            src={selectedImage.image}
            alt="Imagem ampliada"
          />
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar imagem ampliada"
            className="
            fixed right-5 top-5 z-1 h-10 w-10 
            cursor-pointer text-white 
            transition-transform duration-200
            peer-hover:text-black
            peer-hover:scale-125"
          >
          <CloseIcon className="h-full w-full hover:scale-125 hover:text-black" />
          </button>
          <button onClick={() => {handleNextPrevImage("next")}} 
            className="z-2 
            fixed top-1/2 right-5 rotate-180
            transition-transform duration-200
            hover:scale-125
            -translate-x-1/2 -translate-y-1/2
            hover:cursor-pointer">
            <NextIcon className="h-15 w-15 text-white hover:text-black hover:scale-125" />
          </button>
          <button onClick={() => {handleNextPrevImage("prev")}} 
            className="z-2
            fixed top-1/2 left-15 
            transition-transform duration-200
            hover:scale-125
            -translate-x-1/2 -translate-y-1/2
            hover:cursor-pointer">
            <NextIcon className="h-15 w-15 text-white hover:text-black hover:scale-125" />
          </button>
        </>
        }
      {portfolioImages.map((image, index) => {
        return (
          <img
            onClick={() => setSelectedImage({image, index})}
            src={image}
            key={index}
            className="w-full max-h-84 object-cover hover:brightness-50 cursor-pointer"
            alt={`Portfolio Item ${index}`}
          />
        )
      })}
    </div>
  )
}