import { PortfolioShowcase } from '../../components/PortfolioShowcase'
import image1 from '../../assets/galleryPreWeddingsImages/image1.jpg'
import image2 from '../../assets/galleryPreWeddingsImages/image2.jpg'
import image3 from '../../assets/galleryPreWeddingsImages/image3.jpg'
import image4 from '../../assets/galleryPreWeddingsImages/image4.jpg'
import image5 from '../../assets/galleryPreWeddingsImages/image5.jpg'
import image6 from '../../assets/galleryPreWeddingsImages/image6.jpg'
import image7 from '../../assets/galleryPreWeddingsImages/image7.jpg'
import image8 from '../../assets/galleryPreWeddingsImages/image8.jpg'
import image9 from '../../assets/galleryPreWeddingsImages/image9.jpg'
import image10 from '../../assets/galleryPreWeddingsImages/image10.jpg'
import image11 from '../../assets/galleryPreWeddingsImages/image11.jpg'
import image12 from '../../assets/galleryPreWeddingsImages/image12.jpg'
import image13 from '../../assets/galleryPreWeddingsImages/image13.jpg'
import image14 from '../../assets/galleryPreWeddingsImages/image14.jpg'
import image15 from '../../assets/galleryPreWeddingsImages/image15.jpg'

export const GalleryPreWeddings = () => {
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
    image11,
    image12,
    image13,
    image14,
    image15,
  ]
  return (
    <main className="min-h-screen w-full flex justify-center pt-15 md:pt-18 lg:pt-22 pb-2">
      <PortfolioShowcase
        gridConfig="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        portfolioImages={images}
        title="Pré-wedding"
      />
    </main>
  )
}
