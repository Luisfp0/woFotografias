import image1 from '../../../../assets/portfolio/image1.jpg'

export const PortfolioShowcase = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-[0.3px] lg:gap-0 ">
      <img src={image1} className="w-full h-auto hover:brightness-50 cursor-pointer" alt="Portfolio Item 1" />
      <img src={image1} className="w-full h-auto hover:brightness-50 cursor-pointer" alt="Portfolio Item 2" />
      <img src={image1} className="w-full h-auto hover:brightness-50 cursor-pointer" alt="Portfolio Item 3" />
      <img src={image1} className="w-full h-auto hover:brightness-50 cursor-pointer" alt="Portfolio Item 4" />
      <img src={image1} className="w-full h-auto hover:brightness-50 cursor-pointer" alt="Portfolio Item 5" />
      <img src={image1} className="w-full h-auto hover:brightness-50 cursor-pointer" alt="Portfolio Item 6" />
      <img src={image1} className="w-full h-auto hover:brightness-50 cursor-pointer" alt="Portfolio Item 7" />
      <img src={image1} className="w-full h-auto hover:brightness-50 cursor-pointer" alt="Portfolio Item 8" />
      <img src={image1} className="w-full h-auto hidden lg:block hover:brightness-50 cursor-pointer" alt="Portfolio Item 9" />
      <img src={image1} className="w-full h-auto hidden lg:block hover:brightness-50 cursor-pointer" alt="Portfolio Item 10" />
      <img src={image1} className="w-full h-auto hidden lg:block hover:brightness-50 cursor-pointer" alt="Portfolio Item 10" />
      <img src={image1} className="w-full h-auto hidden lg:block hover:brightness-50 cursor-pointer" alt="Portfolio Item 10" />
    </div>
  )
}