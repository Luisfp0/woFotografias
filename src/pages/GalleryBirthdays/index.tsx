import { PortfolioShowcase } from '../../components/PortfolioShowcase'
import image1 from '../../assets/galleryBirthdaysImages/image1.jpg'
import image2 from '../../assets/galleryBirthdaysImages/image2.jpg'
import image3 from '../../assets/galleryBirthdaysImages/image3.jpg'
import image4 from '../../assets/galleryBirthdaysImages/image4.jpg'
import image5 from '../../assets/galleryBirthdaysImages/image5.jpg'
import image6 from '../../assets/galleryBirthdaysImages/image6.jpg'
import image7 from '../../assets/galleryBirthdaysImages/image7.jpg'
import image8 from '../../assets/galleryBirthdaysImages/image8.jpg'
import image9 from '../../assets/galleryBirthdaysImages/image9.jpg'
import image10 from '../../assets/galleryBirthdaysImages/image10.jpg'

export const GalleryBirthdays = () => {
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
    image10,
  ]
  return (
    <main className="min-h-screen w-full flex justify-center pt-15 md:pt-18 lg:pt-22 pb-2">
      <PortfolioShowcase
        gridConfig="columns-1 sm:columns-2 md:columns-3 lg:columns-4 "
        portfolioImages={images}
        title="Aniversários"
      />
    </main>
  )
}
