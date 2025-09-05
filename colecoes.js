let numeros = [5, 8, 2, 9, 3];
console.log("Array original:", numeros);
console.log(numeros[0]); // Acessa o primeiro elemento
console.log(numeros[2]); // Acessa o terceiro elemento

let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva"); // Adiciona "uva" ao final do array
frutas.unshift("morango"); // Adiciona "morango" ao início do array
console.log(frutas);

frutas.forEach((frutas,index) => {
    console.log(`ídice ${index} : ${frutas}`);
})

let misto = [42, "texto", true, null ,{chave : "valor"}, [1, 2, 3, ], frutas]; // Array com diferentes tipos de dados
console.log(misto);
console.log("Array misto:", misto.length); // Tamanho do array
console.log(misto[misto.length - 1]); // Acessa o último elemento

for (let i = 0; i<misto.length; i++) {
    console.log(`Fruta no índice ${i}: ${misto[i]}`);// Itera sobre o array misto
}

for(let fruta of frutas) {
    console.log(fruta); // Itera sobre o array frutas
}

for(let indice in frutas) {
    console.log(`índice ${indice} : ${frutas[indice]}`); // Itera sobre os índices do array frutas
}

//frutas.pop(); // Remove o último elemento
//frutas.shift(); // Remove o primeiro elemento
frutas.splice(1, 3); // Remove 1 elemento a partir do índice 1
console.log(frutas);

let mapa = new Map();
mapa.set("nome", "João");
mapa.set("altura", 1.75);

console.log(mapa.get("nome")); // Acessa o valor associado à chave "nome"
console.log(mapa.has("altura")); // Verifica se a chave "altura" existe

mapa.delete("nome"); // Remove a chave "nome"
mapa.clear(); // Remove todos os elementos do mapa
console.log(mapa.size); // Tamanho do mapa

let conjunto = new Set([1, 2, 3, 4, 5, 6]);// Cria um conjunto
console.log(conjunto)
conjunto.add(7); // Adiciona o valor 7 ao conjunto
conjunto.delete(3); // Remove o valor 3 do conjunto

conjunto.forEach(valor => console.log(valor)); // Itera sobre os valores do conjunto

let pessoa = {
    nome: "Ana",
    idade: 28,
    profissao: "Engenheira",
    endereco: {
        cidade: "São Paulo",
         estado: "SP"
    }
}

console.log(pessoa.nome); // Acessa a propriedade "nome"
console.log(pessoa["idade"]); // Acessa a propriedade "idade" usando notação de colchetes
console.log(pessoa.endereco.cidade); // Acessa a propriedade "cidade" dentro de "endereco"

delete pessoa.profissao; // Remove a propriedade "profissao"
    