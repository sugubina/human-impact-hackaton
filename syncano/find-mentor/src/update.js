import Syncano from '@syncano/core'

export default (ctx) => {
  const {response,data} = new Syncano(ctx)

  if (ctx.args.reqId && ctx.args.status) {
    data.mentoring.update(ctx.args.reqId, {status: ctx.args.status})
      .then(requestObj => {
        response.json({
          message: `Issue with id: ${requestObj.id} updated with status: ${requestObj.status}`
        })
      })
  } else {
    response.json({
      message: 'You have to send "reqId" and "status" arguments!'
    }, 400)
  }
}
