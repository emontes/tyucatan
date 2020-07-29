import React from "react"
import styled from "styled-components"
import About from "./About"
import Categories from "../Noticias/BannerCategories"



const Banner = () => {
  return (
    <Wrapper>
      <About title="Noticias" description="Noticias de Turismo en Yucatán"/>
      <Categories />
      
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  row-gap: 1rem;
  @media (min-width: 576px) {
    & {
      grid-template-columns: repeat(auto-fit, 200px);
      column-gap: 3rem;
    }
  }
`

export default Banner
