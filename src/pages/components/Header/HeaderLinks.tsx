import Links from "./Links";

interface style {
    className?:string
}


export default function HeaderLinks({className}:style){
    return (
        <nav className={`lg:absolute lg:inset-y-0 lg:left-0 lg:right-0 flex flex-col lg:flex-row items-center justify-center`}>
            <ul className={`flex gap-5`}>
                <Links title="Home" link={"/"}></Links>
                <Links title="Agende seu horário" link={"/aboutMe"}></Links >
                <Links title="Depoimentos" link={"/projects"}></Links >
                <Links title="Contato" link={"/contact"}></Links >
            </ul>      
        </nav>
        
    )
}