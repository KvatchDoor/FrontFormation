browsers: ['ChromeHeadlessCI'],
  customLaunchers: {
  ChromeHeadlessCI: {
    base: 'ChromeHeadless',
      flags: ['--no-sandbox']
  }
}
