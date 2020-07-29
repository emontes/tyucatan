import React from 'react'
import Noticia from './Noticia'
import Banner from '../Banner/IndexNoticias'

const Noticias = ( {noticias, title="Titulo Noticias"}) => {
    return (
        <section className="posts">
      
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        <article>
         {noticias.map(noticia => {
             return <Noticia key={noticia.id} {...noticia} />
         })}
          
        </article>
        <article>
        
          <Banner />
        </article>
      </div>
    </section>
    )
}

export default Noticias
