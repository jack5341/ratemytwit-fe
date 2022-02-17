import styled from "styled-components"
import Container from "../container/container"

const WrapInput = styled.div`
    margin-bottom: 40px;
`

const Button = styled.button`
    display: block;
    width: 100%
`

const Warning = styled.div`
    text-align: left;
    font-size: 7px;
    margin-top: 10px
`

const TwitterIcon = styled.i`
    transform: scale(6.5) translate(-80px, -12px) !important;
    position: absolute
`

export default function Share() {
    return (
        <Container>
            <TwitterIcon className="nes-icon twitter is-large"/>
            <p className="title">Rate My Twit</p>
            <WrapInput className="nes-field is-inline">
                <label htmlFor="inline_field">Tweet Link: </label>
                <input type="text" id="inline_field" className="nes-input" placeholder="Max Mustermann" />
            </WrapInput>

            <WrapInput className="nes-field is-inline">
                <label htmlFor="inline_field">Comment: </label>
                <textarea maxLength="260" type="text" id="inline_field" className="nes-input" placeholder="Max Mustermann" />
            </WrapInput>

            <Button type="button" className="nes-btn is-primary">Share</Button>
            <Warning>
                <span className="nes-text is-error">Please be respectfull of your comment!</span>
            </Warning>
        </Container>
    )
}
