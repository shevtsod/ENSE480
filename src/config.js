export default {
  // Metadata
  name: 'ENSE480',
  repository: 'https://github.com/shevtsod/ENSE480',
  author: {
    name: 'Daniel Shevtsov',
    github: {
      username: '@shevtsod',
      url: 'https://github.com/shevtsod'
    }
  },

  // Application-wide theme
  theme: {
    palette: {
      primary: '#732C2C',
      secondary: '#33090F',
      tertiary: '#AAAAAA',
      primaryText: '#ffffff',
      secondaryText: '#ffffff',
      tertiaryText: '#000000'
    },
    sizes: {
      mobile: '768px'
    }
  },

  // Neural Network settings
  network: {
    defaultLayers: [2, 3, 4, 2]
  }
}
