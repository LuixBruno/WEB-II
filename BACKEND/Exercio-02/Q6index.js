async function primeiraPromesaesolvida(promises) {
    return Promise.race(promises);
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolvida!"), 3000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolvida!"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolvida!"), 1000));

primeiraPromessaResolvida([promise1, promise2, promise3])
    .then((resultado) => console.log("Primeira resolvida:", resultado))
    .catch((erro) => console.log("Erro:", erro.message));
