    const app = {
      data() {
        return {
          name: 'Pongpichet Tanthanawikrai',
          country: 'Thailand',
          followers: '37',
          projects: '6',
          ranks: '1',
          cover: './images/twilight_sky.jpg',
          profile: './images/profile.jpg'
        }
      }

    }
    var mountedApp = Vue.createApp(app).mount('#app')