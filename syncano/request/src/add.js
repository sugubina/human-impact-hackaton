import Syncano from '@syncano/core'

export default (ctx) => {
  const {response,data} = new Syncano(ctx)

  if (ctx.args.technology && ctx.args.requestType && ctx.args.description && ctx.args.urlCode && ctx.args.userId) {
    data.requests.create({technology: ctx.args.technology,requestType: ctx.args.requestType
      ,description: ctx.args.description, urlCode: ctx.args.urlCode, userId: ctx.args.userId, mentorId: ctx.args.mentorId, status: 'open' })
      .then(requestObj => {
        response.json({
          message: `Issue with id: ${requestObj.id} added`
        })
      })
  } else {
    response.json({
      message: 'You have to send "technology", "technology", "description", "urlCode" and "userId" arguments!'
    }, 400)
  }
}
