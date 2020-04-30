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
        blackText: 'Pay $99 for the fibre connection and leave us whenever you want. No contract.',
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
        answer: 'Pineapple Net retail a new and independent fibre optic network operated by a local company called DGtek.<br>Over this superior network, we can offer speeds up to 1Gbps and provide our customers with an unbelievably reliable internet connection.<br>Their network was switched on in 2016. Currently, it is only available in Melbourne.<br>We make this network available to Melbourne’s homes and businesses. We’re the friendly face that will help you get set up and keep you happy as you send data at blistering speeds over fibre thanks to DGtek.'
      },
      {
        question: 'Is This NBN Fibre?',
        answer: 'Absolutely not. DGtek fibre is lightyears ahead of the NBN.<br>It’s cheaper, faster and honestly, little guys like us, who want to bring something different to Australia’s internet game could never afford to sell this service on the NBN.<br>DGtek has no CVC, which means you always get the speeds you paid for.<br>DGtek’s network is much newer than the connection type that our coverage area is stuck with.  In stark contrast to the 30 year old infrastructure the NBN bought of Telstra, DGtek’s fibre is all brand new.<br>We like that we can help our customers, escape the constant repairs and maintenance of the NBN whilst getting every other benefits of fibre. And we like that we hardly ever need to troubleshoot problems or deal with outages that are beyond our control.'
      },
      {
        question: 'How Reliable is Pineapple Net Internet?',
        answer: 'The figures don’t lie. Since 2016, DGtek’s fibre network has maintained a 99.9% uptime.<br>Fibre has greater tensile strength and durability than copper and HFC technologies. It works better than copper in hot conditions - the Australian summer- and it’s a cleaner connection to the home.<br>You can remove that extra box the NBN gave you from the kitchen bench.<br>DGtek is pedantic about their installs. They use better than best practice, and it’s a welcome change for most of our customers who only recently went through the NBN’s contractor horror show.<br>We’ll sum up by saying, it’s extremely reliable.'
      },
      {
        question: 'How Can Pineapple Net Sell Faster Speeds For Cheaper Than The NBN?',
        answer: 'If we charged what other ISPs charged we’d feel bad.<br>By not reselling the NBN, we’ve seriously cut back on overheads.<br>It’s a lot cheaper to retail DGtek. The pricing is simpler and predictable and there are no download taxes, rebates or schemes.<br>That’s why we can supply internet cheaper, and we pass our savings down to you. It’s the Pineapple thing to do.'
      },
      {
        question: 'Do I Need Fibre?',
        answer: 'Of course, you don’t need fibre, just like you didn’t need ADSL before it. Remember when the internet was all static webpages and emails? Back then dial-up did the job just fine. But the internet changed, and a similar change is happening now.'
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
