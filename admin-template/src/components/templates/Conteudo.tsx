interface ConteudoProps{
    children?: any
}

export default function Titulo(props: ConteudoProps){
    return(
        <div>  
            <h1 className="flex flex-col mt-7 dark:text-gray-200">
                {props.children}
            </h1>
        </div>
    )
}