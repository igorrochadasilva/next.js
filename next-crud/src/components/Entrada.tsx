interface EntradaProps{
    tipo?: 'text' | 'number'
    text: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada({className,text, tipo, valor, somenteLeitura, valorMudou}:EntradaProps){
    return(
        <div className={`flex flex-col ${className}`}>
            <label className="mb-4" htmlFor="">{text}</label>
            <input 
                type={tipo ?? 'text'} 
                value={valor} 
                readOnly={somenteLeitura}
                onChange={e => valorMudou?.(e.target.value)}
                className={`border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100
                    px-4 py-2
                    ${somenteLeitura ? '' : 'focus:bg-white' }
                `}
                />
        </div>
    )
}