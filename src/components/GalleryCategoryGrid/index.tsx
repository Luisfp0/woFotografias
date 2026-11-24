import weddings from '../../assets//galleryCovers/weddings.webp'
import birthdays from '../../assets/galleryCovers/birthdays.webp'
import photo_shoot from '../../assets/galleryCovers/photo_shoot.webp'
import sports from '../../assets/galleryCovers/sports.webp'
import births from '../../assets/galleryCovers/births.webp'
import products from '../../assets/galleryCovers/products.webp'
import workShops from '../../assets/galleryCovers/workShops.webp'
import pre_wedding from '../../assets/galleryCovers/pre-wedding.webp'
import { Link } from 'react-router-dom'

const categories = [
  { image: weddings, title: 'CASAMENTOS', route: '/gallery/weddings' },
  { image: birthdays, title: 'ANIVERSÁRIOS', route: '/gallery/birthdays' },
  { image: photo_shoot, title: 'ENSAIOS', route: '/gallery/auditions' },
  { image: pre_wedding, title: 'PRÉ-WEDDINGS', route: '/gallery/pre_weddings' },
  { image: products, title: 'PRODUTOS', route: '/gallery/products' },
  { image: workShops, title: 'WORKSHOPS', route: '/gallery/work_shops' },
  { image: sports, title: 'ESPORTES', route: '/gallery/sports' },
  { image: births, title: 'NEWBORN', route: '/gallery/births' },
]

export const GalleryCategoryGrid = () => {
  return (
    <main className="min-h-screen w-full flex justify-center pt-5">
      <div className="grid max-w-300 sm:grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2 md:gap-0">
        {categories.map(({ image, title, route }) => (
          <div key={title} className="group relative">
            <Link to={`${route}`}>
              <img
                src={image}
                alt={title}
                className="w-full max-h-80 object-cover transition group-hover:brightness-50"
              />
              <span
                className="absolute inset-0 flex items-center justify-center text-sm md:text-md lg:text-xl font-semibold 
                text-white md:opacity-0 md:group-hover:opacity-100"
              >
                {title}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
