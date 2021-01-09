module.exports = {
  outputDir: 'dist',
  'transpileDependencies': [
    'vuetify'
  ],
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess (context) {
        context.html = context.html.replace('http://localhost:8000', 'https://www.zed-iot.com')
        return context
      }
    }
  }
}
