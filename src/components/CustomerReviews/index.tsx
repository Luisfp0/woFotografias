import deividVeras from "../../assets/reviews/deividVeras.jpg"

export const CustomerReviews = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 gap-10">
      <h1 className="text-2xl font-bold">Clientes estão dizendo</h1>
      <div className="flex flex-col items-center justify-center gap-10 max-w-2xl">
        <img src={deividVeras} className="w-40 h-40 rounded-full" />
        <span className="text-xs text-center">
          O trabalho do Wanderson é um agregador de valor aos eventos, gravando memorias em fotografias 
          registradas com o olhar de quem tem a sensibilidade para captar a emoção das pessoas.
        </span>
        <span className="text-xs font-semibold">Deivid Veras</span>
      </div>
    </div>  
  )
}