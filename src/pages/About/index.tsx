import { Link } from "react-router-dom"
import profilePicture from "../../assets/about/profilePicture.jpg"

export const About = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center pt-20">
      <div className="grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-16 px-5">
        <div className="flex w-full flex-col items-start gap-10">
          <div className="flex w-full flex-col gap-10">
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-neutral-500">
              <span className="h-px w-8 bg-neutral-900" />
              SOBRE O FOTÓGRAFO
            </p>
            <h1 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              A emoção da conquista merece ser lembrada
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-base text-neutral-600 sm:text-lg">
                Sou Wanderson, fotógrafo esportivo em Goiânia.
              </p>
              <p className="max-w-lg text-start text-base text-neutral-600 sm:text-lg">
                Mais do que o resultado, registro a dedicação, a emoção e a
                história por trás de cada prova
              </p>
            </div>
            <p className="text-sm font-medium text-neutral-500">
              Wanderson Oliveira <span className="mx-2">·</span> 28 anos
              <span className="mx-2">·</span> Goiânia, GO
            </p>
          </div>
          <div className="flex w-full flex-wrap justify-center gap-3 md:w-auto">
            <Link
              to="/gallery"
              className="bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
            >
              Ver galerias
            </Link>
            <a
              href="https://www.instagram.com/wo.fotografia/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-300 px-6 py-3 text-sm font-semibold transition-colors hover:border-black"
            >
              Instagram
            </a>
          </div>
        </div>
        <figure className="relative mx-auto w-full max-w-lg lg:mx-0">
          <img
            src={profilePicture}
            alt="Wanderson em um evento esportivo"
            className="rounded-lg aspect-4/5 w-full object-cover object-center"
          />
          <figcaption className="absolute bottom-4 left-4 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em]">
            Fotografia esportiva <span className="text-neutral-400">/</span>{" "}
            Goiânia
          </figcaption>
        </figure>
      </div>

    </section>
  )
}
