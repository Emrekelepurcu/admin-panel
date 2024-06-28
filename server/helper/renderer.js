import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom/server'
import { createFetchRequest } from '@serverHelper'
import { Provider } from 'react-redux'
import serialize from 'serialize-javascript'
import routes from '@routes/routes'

let handler = createStaticHandler(routes)

export default async (req, res, store) => {
  let fetchRequest = createFetchRequest(req, res)
  let context = await handler.query(fetchRequest)
  let router = createStaticRouter(handler.dataRoutes, context)
  const content = renderToString(
    <Provider store={store}>
      <StaticRouterProvider router={router} context={context} />
    </Provider>
  )
  return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
      </head>
      <body>
        <div id="root" style="height: 100vh">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="/build/main.js"></script>
      </body>
    </html>
  `
}
