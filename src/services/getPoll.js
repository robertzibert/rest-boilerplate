import Poll from '../models/poll'

export default async function ({ _id }) {
  const poll = await Poll.findOne({ _id })
  return { poll }
}
