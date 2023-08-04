import express from "express";
import viagens from "./viagensRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Teste"})
  })

  app.use(
    express.json(),
    viagens
  )
}

export default routes