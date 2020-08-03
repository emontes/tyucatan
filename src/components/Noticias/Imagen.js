import React from 'react'
import Image from "gatsby-image"

const Imagen = ({imagen}) => {
    console.log("Props de Imagen: ", imagen)
    
    
    if (imagen[0]) {
        var fluid = imagen[0].formats.small.childImageSharp.fluid
        if (imagen[0].formats.large) {
            fluid = imagen[0].formats.large.childImageSharp.fluid
        } else {
            if (imagen[0].formats.medium) {
                fluid = imagen[0].formats.medium.childImageSharp.fluid
            }
        }
        return (
            <Image
            className="image"
            fluid={fluid}
            alt={imagen[0].alternativeText}
          />
        )
    }
    return <></>

    
}

export default Imagen
