import Syncano from '@syncano/core'

export default (ctx) => {
  const {response,data} = new Syncano(ctx)

  if (ctx.args.technology && ctx.args.requestType && ctx.args.description && ctx.args.urlCode && ctx.args.participantId) {
    data.requests.create({technology: ctx.args.technology,requestType: ctx.args.requestType
      ,description: ctx.args.description, urlCode: ctx.args.urlCode, participantId: ctx.args.participantId, mentorId: ctx.args.mentorId, status: 'open' })
      .then(requestObj => {
        response.json({
          message: `Issue with id: ${requestObj.id} added`
        })
      })
  } else {
    response.json({
      message: 'You have to send "technology", "technology", "description", "urlCode" and "participantId" arguments!'
    }, 400)
  }
}
