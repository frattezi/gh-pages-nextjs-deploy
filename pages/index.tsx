import styled from 'styled-components'

const Title = styled.h1`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 50px;
`

export default function Home() {
  return <Title>How to deploy Nextjs to Github Pages with GA</Title>
}
