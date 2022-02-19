import styled from "styled-components"

const Buttons = styled.button`
    display: block;
    width: 100%
`

export default function Button(p) {
    return (
        <Buttons type={p.type || "button"} className={"nes-btn is-primary " + p.classes}>{p.children}</Buttons>
    )
}

