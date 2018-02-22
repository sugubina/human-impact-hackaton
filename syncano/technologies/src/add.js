import Syncano from '@syncano/core'

export default (ctx) => {
  const {data, response} = new Syncano(ctx)

  data.technology.crate({
    technology_name: ctx.args.name
  }).then(technologyObj => {
    response.json({msg: `Technology with ID ${technologyObj.id} created!`})
  })
}
