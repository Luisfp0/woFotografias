import { CustomerReviews } from "./sections/CustomerReviews"
import { PartnerShips } from "./sections/partnerships"
import { PortfolioShowcase } from "../../components/PortfolioShowcase"
import image1 from '../../assets/portfolio/image1.jpg'
import image2 from '../../assets/portfolio/image2.jpg'
import image3 from '../../assets/portfolio/image3.jpg'
import image4 from '../../assets/portfolio/image4.jpg'
import image5 from '../../assets/portfolio/image5.jpg'
import image6 from '../../assets/portfolio/image6.jpg'
import image7 from '../../assets/portfolio/image7.jpg'
import image8 from '../../assets/portfolio/image8.jpg'
import image9 from '../../assets/portfolio/image9.jpg'
import image10 from '../../assets/portfolio/image10.jpg'
import image11 from '../../assets/portfolio/image11.jpg'
import image12 from '../../assets/portfolio/image12.jpg'

export const Home = () => {
  const portfolioImages = [image1, image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12]

  return (
    <section className="pt-14 md:pt-16 lg:pt-18 flex flex-col gap-13">
      <PortfolioShowcase portfolioImages={portfolioImages}/>
      <CustomerReviews />
      <PartnerShips />
    </section>
  )
}