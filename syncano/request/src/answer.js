import Syncano from '@syncano/core'

export default (ctx) => {
  const {response,data} = new Syncano(ctx)

  if (ctx.args.requestId && ctx.args.commentatorId && (ctx.args.answer || ctx.args.helpUrl)) {
    data.answers.create({requestId: ctx.args.requestId, commentatorId: ctx.args.commentatorId, answer: ctx.args.answer, helpUrl: ctx.args.helpUrl})
      .then(answer => {
        response.json({
          message: `Answer with id: ${answer.id} added by ${answer.commentatorId} to topic: ${answer.requestId}`
        })
      })
  } else {
    response.json({
      message: 'You have to send "requestId", "commentqatorId" and "helpUrl" or "answer arguments!'
    }, 400)
  }
}
