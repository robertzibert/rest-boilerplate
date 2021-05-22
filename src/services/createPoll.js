import Poll from '../models/poll'
import ApiError from '../utils/ApiError'

export default async function ({ title, firstOption, secondOption, thirdOption, fourthOption }) {
  const pollFormatted = {
    question: title,
    firstOption: {
      title: firstOption
    },
    secondOption: {
      title: secondOption
    },
    thirdOption: {
      title: thirdOption
    },
    fourthOption: {
      title: fourthOption
    }
  }

  const pollsWithSameQuestion = await Poll.countDocuments({ question: title })
  if (pollsWithSameQuestion > 0) throw new ApiError(400, 'Duplicated Poll')
  const poll = await Poll.create(pollFormatted)
  return poll
}
