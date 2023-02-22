interface ButtonProps {
    cor?: 'blue' | 'green' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Button (props: ButtonProps) {
    const color = props.cor ?? 'gray'

    return (
        <button
            onClick={props.onClick}
            className={`
            bg-${color}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}