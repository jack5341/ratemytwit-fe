import styled from "styled-components"

const WrapInput = styled.div`
    margin-bottom: 40px;
`

export function Input(p) {
    return (
        <WrapInput className="nes-field is-inline">
            <label htmlFor="inline_field">{p.label}</label>
            <input type={p.type || "text"} maxLength={p.maxlenght} id="inline_field" className={"nes-input " + p.classes} placeholder={p.placeholder || "Max Mustermann"} />
        </WrapInput>
    )
}

export function TextArea(p) {
    return (
        <WrapInput className="nes-field is-inline">
            <label htmlFor="inline_field">{p.label}</label>
            <textarea maxLength={p.maxlenght || 260} id="inline_field" className={"nes-input " + p.classes} placeholder={p.placeholder || "Max Mustermann"} />
        </WrapInput>
    )
}
