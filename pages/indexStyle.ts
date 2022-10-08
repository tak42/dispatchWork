import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  min-height: 100%;
`

export const Main = styled.main`
  display: flex;
  height: 100%;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  line-height: 1.15;
  text-align: left;

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`

export const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
`

export const Works = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-top: 3rem;
`

export const Card = styled.a`
  padding: 1.5rem;
  margin: 1rem;
  color: inherit;
  text-align: left;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  :hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }

  h2 {
    margin: 0 0 1rem;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`

export const Report = styled.div`
  width: 1000px;
  margin: 5px;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;

  a {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
`
export const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`
