interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: React.ReactNode
    onClick?: () => void
}

export default function Botao({children, className, cor, onClick}:BotaoProps){

    const color = cor ?? 'gray'
    
    return(
        <button onClick={onClick} className={`bg-gradient-to-r from-${color}-400 to-${color}-700
            text-white px-4 py-2 rounded-md 
            ${className}
        `}>
            {children}
        </button>
    )
}