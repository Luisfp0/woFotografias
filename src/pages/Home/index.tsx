import { CustomerReviews } from "./sections/CustomerReviews"
import { PartnerShips } from "./sections/partnerships"
import { PortfolioShowcase } from "./sections/PortfolioShowcase"

export const Home = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-18 flex flex-col gap-13">
      <PortfolioShowcase />
      <CustomerReviews />
      <PartnerShips />
    </section>
  )
}