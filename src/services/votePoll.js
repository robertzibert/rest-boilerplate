import Poll from '../models/poll'
import voteHandler from '../realTime/voteHandler'

export default async function ({ _id }, vote) {
  const voteResult = await Poll.updateOne({ _id }, { $inc: { totalVotes: 1, ...vote } }, { upsert: true })
  const {
    _doc: { firstOption, secondOption, thirdOption, fourthOption }
  } = await Poll.findById(_id)

  voteHandler.emit(_id, { firstOption, secondOption, thirdOption, fourthOption })
  return { voteResult }
}
