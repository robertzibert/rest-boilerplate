import Poll from '../models/poll'

export default async function () {
  const recentPolls = await Poll.find({}).sort({ createdAt: -1 })
  const topThree = await Poll.find({ totalVotes: { $gt: 0 } })
    .sort({ totalVotes: -1 })
    .limit(3)
  return { recentPolls, topThree }
}
