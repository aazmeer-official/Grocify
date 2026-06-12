import ButtonMain from "../utils/ButtonMain"
const RightHero = () => {
  return (
    <div>
      <h4 className=" inline-block font-bold text-sm text-orange-500 px-3 py-1.5 bg-orange-100 rounded-2xl ">Fresh from Organic</h4>
      <h1 className="font-extrabold text-4xl md:text-5xl lg:text-7xl text-wrap w-full max-w-xl mt-5 mb-2">Tasty Organic <span className="text-orange-400">Fruits</span> & <span className="text-orange-400">Veggies </span> In Your City</h1>
      <p className="w-full max-w-sm mb-5">We're a hyper-local startup committed to providing the best organic produce</p>
      <ButtonMain text="Shop Now"/>
    </div>
  )
}

export default RightHero
