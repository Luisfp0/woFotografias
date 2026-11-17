import { useState } from 'react'
import image1 from '../../../../assets/portfolio/image1.jpg'
import image2 from '../../../../assets/portfolio/image2.jpg'
import image3 from '../../../../assets/portfolio/image3.jpg'
import image4 from '../../../../assets/portfolio/image4.jpg'
import image5 from '../../../../assets/portfolio/image5.jpg'
import image6 from '../../../../assets/portfolio/image6.jpg'
import image7 from '../../../../assets/portfolio/image7.jpg'
import image8 from '../../../../assets/portfolio/image8.jpg'
import image9 from '../../../../assets/portfolio/image9.jpg'
import image10 from '../../../../assets/portfolio/image10.jpg'
import image11 from '../../../../assets/portfolio/image11.jpg'
import image12 from '../../../../assets/portfolio/image12.jpg'



import closeIcon from '../../../../assets/svgs/closeIcon.svg'

export const PortfolioShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const handleImageClick = (image: string) => {
    setSelectedImage(image)
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-[0.3px] lg:gap-0 ">
      {selectedImage && (
        <>
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-1 cursor-pointer bg-black peer modal-backdrop"
          />
          <img
            className="fixed z-40 left-1/2 top-1/2  w-90% -translate-x-1/2 -translate-y-1/2 rounded-3xl"
            src={selectedImage}
            alt="Imagem ampliada"
          />
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar imagem ampliada"
            className="fixed right-5 top-5 z-1 h-10 w-10 cursor-pointer hover:scale-125 peer-hover:scale-125 transition-transform duration-200"
          >
            <img src={closeIcon} alt="" className="h-full w-full brightness-0 invert" />
          </button>
        </>
      )}
      <img
        onClick={() => handleImageClick(image1)}
        src={image1}
        className="w-full h-auto hover:brightness-50 cursor-pointer"
        alt="Portfolio Item 1"
      />
      <img
        onClick={() => handleImageClick(image2)}
        src={image2}
        className="w-full h-auto hover:brightness-50 cursor-pointer"
        alt="Portfolio Item 2"
      />
      <img
        onClick={() => handleImageClick(image3)}
        src={image3}
        className="w-full h-auto hover:brightness-50 cursor-pointer"
        alt="Portfolio Item 3"
      />
      <img
        onClick={() => handleImageClick(image4)}
        src={image4}
        className="w-full h-auto hover:brightness-50 cursor-pointer"
        alt="Portfolio Item 4"
      />
      <img
        onClick={() => handleImageClick(image5)}
        src={image5}
        className="w-full h-auto hover:brightness-50 cursor-pointer"
        alt="Portfolio Item 5"
      />
      <img
        onClick={() => handleImageClick(image6)}
        src={image6}
        className="w-full h-auto hover:brightness-50 cursor-pointer"
        alt="Portfolio Item 6"
      />
      <img
        onClick={() => handleImageClick(image7)}
        src={image7}
        className="w-full h-auto hover:brightness-50 cursor-pointer"
        alt="Portfolio Item 7"
      />
      <img
        onClick={() => handleImageClick(image8)}
        src={image8}
        className="w-full h-auto hover:brightness-50 cursor-pointer"
        alt="Portfolio Item 8"
      />
      <img
        onClick={() => handleImageClick(image9)}
        src={image9}
        className="w-full h-auto hover:brightness-50 cursor-pointer"
        alt="Portfolio Item 9"
      />
      <img
        onClick={() => handleImageClick(image10)}
        src={image10}
        className="w-full h-auto hover:brightness-50 cursor-pointer"
        alt="Portfolio Item 10"
      />
      <img
        onClick={() => handleImageClick(image11)}
        src={image11}
        className="w-full h-auto hover:brightness-50 cursor-pointer"
        alt="Portfolio Item 11"
      />
      <img
        onClick={() => handleImageClick(image11)}
        src={image12}
        className="w-full h-auto hover:brightness-50 cursor-pointer"
        alt="Portfolio Item 11"
      />
    </div>
  )
}