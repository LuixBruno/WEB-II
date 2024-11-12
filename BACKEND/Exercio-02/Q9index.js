function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function teste() {
    console.log('Olá');
    await sleep(3000); 
    console.log('Mensagem após 3 segundos');
  }
  
  teste();