import Syncano from '@syncano/core'

export default (ctx) => {
  const {data, response} = new Syncano(ctx)

  data.technology.fields('id','technology_name').list().then(technologyList => {
    response.json({technologies: technologyList})
  })
}
