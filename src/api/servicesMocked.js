import axios from 'axios'

export default {
  login(user) {
    return axios.post(`${process.env.VUE_APP_BASE_URL}login`, user);
  },
  getEventData(user) {
    let sbus = [
      {
        name: 'SBU-Western-Southern-Europe',
        children: [
          {
            name: 'BUs',
            children: [
              {
                name: 'Event 1',
                duration: "30m"
              },
              {
                name: 'Event 2',
                duration: "120m"
              }
            ],
          },
        ],
      },
      {
        name: 'SBU-Portugal',
        children: [
          {
            name: 'BUs',
            children: [
              {
                name: 'Event 3',
                duration: "30m"
              },
              {
                name: 'Event 4',
                duration: "120m"
              }
            ],
          },
        ],
      },
      {
        name: 'SBU-Canada',
        children: [
          {
            name: 'BUs',
            children: [
              {
                name: 'Event 10',
                duration: "120m"
              },
              {
                name: 'Event 20',
                duration: "120m"
              }
            ],
          },
        ],
      },
    ]
    return sbus
  },
}