import { PortfolioShowcase } from '../../components/PortfolioShowcase'
import image1 from '../../assets/galleryAuditionsImages/image1.jpg'
import image2 from '../../assets/galleryAuditionsImages/image2.jpg'
import image3 from '../../assets/galleryAuditionsImages/image3.jpg'
import image4 from '../../assets/galleryAuditionsImages/image4.jpg'
import image5 from '../../assets/galleryAuditionsImages/image5.jpg'
import image6 from '../../assets/galleryAuditionsImages/image6.jpg'
import image7 from '../../assets/galleryAuditionsImages/image7.jpg'
import image8 from '../../assets/galleryAuditionsImages/image8.jpg'
import image9 from '../../assets/galleryAuditionsImages/image9.jpg'

export const GalleryAuditions = () => {
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
        title="Ensaios"
      />
    </main>
  )
}
