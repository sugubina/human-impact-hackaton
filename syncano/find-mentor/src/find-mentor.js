import Syncano from '@syncano/core'

export default (ctx) => {
  const {response,data} = new Syncano(ctx)

  if (ctx.args.technology && ctx.args.substantiation && ctx.args.mentorId && ctx.args.participantId) {
    data.mentoring.create({technology: ctx.args.technology,substantiation: ctx.args.substantiation, 
      participantId: ctx.args.participantId, mentorId: ctx.args.mentorId, status: 'open' })
      .then(findMentorObj => {
        response.json({
          message: `Request mentoring to: ${findMentorObj.mentorId} submitted`
        })
      })
  } else {
    response.json({
      message: 'You have to send "technology", "substantiation", "mentorId" and "participantId" arguments!'
    }, 400)
  }
}
