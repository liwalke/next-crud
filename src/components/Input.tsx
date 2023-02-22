interface InputProps {
    text: string
    type?: 'text' | 'number'
    value: any
    readOnly?: boolean
    onChange?: (value: any) => void
}

export default function Input (props: InputProps) {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-3">{props.text}</label>
            <input 
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.readOnly}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    bg-blue-50 px-4 py-2
                    border border-blue-200 rounded-lg
                    focus:outline-none ${props.readOnly ? '' : 'focus:bg-white focus:border-blue-400'}
                `}
            />
        </div>
    )
}