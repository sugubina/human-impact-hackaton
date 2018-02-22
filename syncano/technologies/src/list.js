import Syncano from '@syncano/core'

export default (ctx) => {
  const {data, response} = new Syncano(ctx)

  data.technology.list().then(technologyList => {
    response.json({technologies: technologyList})
  })
}
