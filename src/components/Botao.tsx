interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {

    // function gerarCor (propColor) {
    //     const cor = props.cor ?? 'gray'
    //     // return `from-${cor}-400 to-${cor}-700`
    //     const cores = {
    //         blue: "from-blue-400 to-blue-700",
    //         green: 'from-green-400 to-green-700',
    //         gray: 'from-gray-400 to-gray-700'
    //     }

    //     return cores[propColor] || cores['blue']
    // }

    const cor = props.cor ?? 'gray'

    return(
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
};
