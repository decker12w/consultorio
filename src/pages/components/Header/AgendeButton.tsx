interface style {
    className?:string
}
const desktop = ` lg:flex lg:justify-center lg:items-center lg:bg-white lg:h-16 lg:w-64 lg:rounded-3xl lg:font-carro lg:lowercase`
const mobile = `hidden`

export default function AgendeButton({className}:style){
    return (
        
        <div>
            <button className={`${mobile} ${desktop}`}>Agende seu Horário</button>
        </div>
        
    )
}