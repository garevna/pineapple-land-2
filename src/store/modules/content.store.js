/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  top: {
    header: 'Heading Title',
    text: 'Some text will be here... Some text will be here... Some text will be here... Some text will be here... Some text will be here...',
    button: 'CTA'
  },
  info: {
    header: 'Heading Title',
    text: 'Some text will be here... Some text will be here... Some text will be here... Some text will be here... Some text will be here...',
    offer: [
      {
        blackText: 'information about',
        greenText: 'offer'
      },
      {
        blackText: 'information about',
        greenText: 'offer'
      }
    ]
  },
  userForm: {
    title: 'Title about offer',
    messagePlaceholder: '',
    button: 'CTA'
  },
  howToConnect: {
    header: 'Title around Optic Fibre',
    text: 'Some text here... Some text here... Some text here... Some text here...',
    items: [
      {
        title: 'Benefit 1',
        text: 'Some text here... Some text here... Some text here... Some text here...'
      },
      {
        title: 'Benefit 2',
        text: 'Some text here... Some text here... Some text here... Some text here...'
      },
      {
        title: 'Benefit 3',
        text: 'Some text here... Some text here... Some text here... Some text here...'
      }
    ]
  },
  testimonials: {
    header: 'Title around reviews',
    button: 'CTA'
  },
  faq: {
    header: 'Title around FAQ',
    button: 'CTA',
    items: [
      {
        question: 'Question 1',
        answer: 'Answer 1...'
      },
      {
        question: 'Question 2',
        answer: 'Answer 2...'
      },
      {
        question: 'Question 3',
        answer: 'Answer 3...'
      },
      {
        question: 'Question 4',
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
