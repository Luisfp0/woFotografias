import { PortfolioShowcase } from '../../components/PortfolioShowcase'
import image1 from '../../assets/galleryWeddingsImages/image1.jpg'
import image2 from '../../assets/galleryWeddingsImages/image2.jpg'
import image3 from '../../assets/galleryWeddingsImages/image3.jpg'
import image4 from '../../assets/galleryWeddingsImages/image4.png'
import image5 from '../../assets/galleryWeddingsImages/image5.jpg'
import image6 from '../../assets/galleryWeddingsImages/image6.jpg'
import image7 from '../../assets/galleryWeddingsImages/image7.jpg'
import image8 from '../../assets/galleryWeddingsImages/image8.jpg'
import image9 from '../../assets/galleryWeddingsImages/image9.jpg'

export const GalleryWeddings = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ]
  return (
    <main className="min-h-screen w-full flex justify-center pt-15 md:pt-18 lg:pt-22 pb-2">
      <PortfolioShowcase
        gridConfig="columns-1 sm:columns-2 md:columns-3 lg:columns-4 "
        portfolioImages={images}
        title="Casamentos"
      />
    </main>
  )
}
