import ButtonMain from "../utils/ButtonMain"
const RightHero = ({pillText,blackTextOne,orangeTextOne,blackTextTwo,OrangeTextTwo,BlackTextThree, pText, buttonText,size}) => {
  return (
    <div>
      <h4 className="inline-block font-bold text-sm text-orange-500 px-3 py-2 bg-orange-100 rounded-2xl">{pillText}</h4>
      <h1 className={`font-extrabold text-5xl md:text-5xl lg:text-${size}xl text-wrap w-full max-w-xl mt-5 mb-2 py-2`}>{blackTextOne} <span className="text-orange-400">{orangeTextOne}</span> {blackTextTwo} <span className="text-orange-400">{OrangeTextTwo} </span> {BlackTextThree}</h1>
      <p className="w-full max-w-sm mb-5 py-2">{pText}</p>
      <ButtonMain text={buttonText}/>
    </div>
  )
}

export default RightHero
