import React from "react"

import MainTemplate from "../templates/main"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <MainTemplate>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </MainTemplate>
)

export default NotFoundPage
