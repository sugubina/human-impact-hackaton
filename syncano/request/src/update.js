import Syncano from '@syncano/core'

export default (ctx) => {
  const {response,data} = new Syncano(ctx)

  if (ctx.args.issueId && ctx.args.status) {
    data.requests.update(ctx.args.issueId, {status: ctx.args.status})
      .then(requestObj => {
        response.json({
          message: `Issue with id: ${requestObj.id} updated with status: ${requestObj.status}`
        })
      })
  } else {
    response.json({
      message: 'You have to send "issueId" and "status" arguments!'
    }, 400)
  }
}
