import { CustomerReviews } from "./sections/CustomerReviews"
import { PartnerShips } from "./sections/partnerships"
import { PortfolioShowcase } from "./sections/PortfolioShowcase"

export const Home = () => {
  return (
    <section className="flex pt-32 flex-col gap-13">
      <PortfolioShowcase />
      <div className="flex flex-col gap-13">
        <CustomerReviews />
        <PartnerShips />
      </div>
    </section>
  )
}