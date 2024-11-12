function tempo(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));

  }

tempo(1000).then(() => {
  console.log()
})