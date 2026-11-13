import { CustomerReviews } from "./sections/CustomerReviews"
import { PortfolioShowcase } from "./sections/PortfolioShowcase"

export const Home = () => {
  return (
    <section className="flex pt-32 flex-col">
      <PortfolioShowcase />
      <CustomerReviews />
    </section>
  )
}