import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout>
    <section className="error-page">
      <div className="page-center">
        <span>404</span>
        <h3>Lo sentimos, no pudimos encontrar la página solicitada.</h3>
        <Link to="/" className="btn">
          ir al inicio
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
