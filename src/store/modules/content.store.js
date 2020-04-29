/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  subject: 'Melbourne’s Juiciest Internet',
  top: {
    header: 'Melbourne’s Juiciest Internet',
    text: 'We are the Aussie ISP who doesn’t act like it. We’ve ditched the NBN, removed our data caps and lowered our prices for affordable fibre you can feel good about. Imagine, no more dropouts or pauses. Heck! No more resetting the router. Humblebrag. This is Melbourne’s best internet. What are you going to do about it?',
    button: 'Get Fibre and Never Look Back'
  },
  info: {
    header: 'Fibre Is A Better Experience Every Time You Log On',
    text: 'Don’t feel like sharing? We’ll give you enough bandwidth to support every user and device under your roof. It’s simple. Just pull the plug on your old tech, give us a call, and you’ll be surfing at lightspeed before you know it. You’ll unlock 4K entertainment, accelerate your downloads and inject clarity into your video calls. Nothing beats fibre.',
    offer: [
      {
        blackText: 'Get 3 months for free and pay no install fees. 12-month contract.',
        greenText: 'Committed'
      },
      {
        blackText: 'Pay $220 for the fibre connection and leave us whenever you want. No contract.',
        greenText: 'Flexible'
      }
    ]
  },
  userForm: {
    title: 'Meet Melbourne’s New Net',
    messagePlaceholder: 'Enquiry*',
    button: 'Go Lightspeed'
  },
  howToConnect: {
    header: 'Fibre Optics',
    text: 'The Futureproof Internet Melbourne Needed Yesterday',
    items: [
      {
        title: 'Stream Like You Own It',
        text: 'Live it up with 4K Netflix on every screen in the house. No congestion to slow you down or data caps to stop you.'
      },
      {
        title: 'Game in Real-Time',
        text: 'Low latency and unmatched reliability lowers the artificial reaction time constraints and gives you an edge.'
      },
      {
        title: 'Video-Call Like You’re There',
        text: 'Symmetrical uploads speed as fast as your downloads, inject clarity into your Zoom and FaceTime calls. You’ll communicate without skips, splutters or pauses.'
      }
    ]
  },
  testimonials: {
    header: 'The Social Proof That We Rock. Thanks, Melbourne',
    button: 'See Some Prices'
  },
  faq: {
    header: 'We’ve Answered Some Common Questions',
    button: 'Get Fibre and Never Look Back',
    items: [
      {
        question: 'How can you sell fibre internet in Melbourne?',
        answer: 'Answer 1...'
      },
      {
        question: 'Is This NBN Fibre?',
        answer: 'Answer 2...'
      },
      {
        question: 'How Reliable is Pineapple Net Internet?',
        answer: 'Answer 3...'
      },
      {
        question: 'How Can Pineapple Net Sell Faster Speeds For Cheaper Than The NBN?',
        answer: 'Answer 4...'
      },
      {
        question: 'Do I Need Fibre?',
        answer: 'Answer 4...'
      }
    ]
  },
  footer: {
    topHead: 'READY TO GET STARTED?',
    topText: 'Leave your inquiry and we\'ll get back to you within 24 hours on business days'
  }
}

const getters = {
  editorEndpoint: (state, getters, rootState) => `${rootState.host}/content`
}

const mutations = {
  //
}

const actions = {
  async GET_DATA ({ getters, commit }) {
    return true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
