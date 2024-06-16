import { renderer } from '@serverHelper'
import { store } from '@/state/store'
import routes from '@routes/routes'
import { matchRoutes } from 'react-router-dom'

export default ({ app }) => {
  app.get('*', async (req, res) => {
    const storeData = store()
    const matchedRoute = matchRoutes(routes, req.path)

    if (!matchedRoute) {
      res.send('404')
      return
    }

    const promises = matchedRoute
      .map(({ route }) => {
        return route.loadData ? route.loadData(storeData) : null
      })
      .map((promise) => {
        if (promise) {
          return new Promise((resolve, reject) => {
            promise.then(resolve).catch(resolve)
          })
        }
      })

    Promise.all(promises).then(async () => {
      const content = await renderer(req, res, storeData)
      res.send(content)
    })
  })
}
