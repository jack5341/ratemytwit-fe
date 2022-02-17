import styled from "styled-components"

const ContainerBox = styled.div`
    margin: 65px auto 0 auto;
    max-width: 1000px;
`

export default function Container({children}) {
  return <ContainerBox className="nes-container with-title is-centered">{children}</ContainerBox>
}
