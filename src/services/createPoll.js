import Poll from '../models/poll'

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
  const poll = await Poll.create(pollFormatted)
  return poll
}
