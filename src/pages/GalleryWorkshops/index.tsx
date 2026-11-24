import { PortfolioShowcase } from '../../components/PortfolioShowcase'
import image1 from '../../assets/galleryWorkShopImages/image1.jpg'
import image2 from '../../assets/galleryWorkShopImages/image2.jpg'
import image3 from '../../assets/galleryWorkShopImages/image3.jpg'
import image4 from '../../assets/galleryWorkShopImages/image4.jpg'
import image5 from '../../assets/galleryWorkShopImages/image5.jpg'
import image6 from '../../assets/galleryWorkShopImages/image6.jpg'
import image7 from '../../assets/galleryWorkShopImages/image7.jpg'
import image8 from '../../assets/galleryWorkShopImages/image8.jpg'
import image9 from '../../assets/galleryWorkShopImages/image9.jpg'
import image10 from '../../assets/galleryWorkShopImages/image10.jpg'
import image11 from '../../assets/galleryWorkShopImages/image11.jpg'
import image12 from '../../assets/galleryWorkShopImages/image12.jpg'
import image13 from '../../assets/galleryWorkShopImages/image13.jpg'
import image14 from '../../assets/galleryWorkShopImages/image14.jpg'
import image15 from '../../assets/galleryWorkShopImages/image15.jpg'

export const GalleryWorkshops = () => {
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
        title="Workshops"
        compactFirstRows
      />
    </main>
  )
}
