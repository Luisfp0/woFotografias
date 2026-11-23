export interface SelectedImage {
  image: string;
  index: number;
}

export interface PortfolioShowcaseProps {
  portfolioImages: string[]
  gridConfig?: string
  title?: string
  hasAmplify?: boolean
}
