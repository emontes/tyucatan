import React from "react"
import styled from "styled-components"
import Categories from "./Categories"
import Title from "../Banner/Title"
const BannerCategories = () => {
  return (
    <Wrapper>
      <Title title="Categorias" />
      <Categories />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .category {
    font-size: 1rem;
    color: var(--clr-grey-5);
    text-transform: capitalize;
    display: block;
    padding: 0.5rem 0 0.5rem 1rem;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    border-radius: var(--radius);
  }
  .category:hover {
    background: var(--clr-grey-10);
  }
`
export default BannerCategories
