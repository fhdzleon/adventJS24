/* 
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. 
Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

*/

/* 
createFrame(['midu', 'madeval', 'educalvolpz'])

   ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************
*/

function createFrame(names) {
  let longer = 0;

  for (let i = 0; i < names.length; i++) {
    if (names[i].length > longer) {
      longer = names[i].length;
    }
  }

  const border = "*".repeat(longer + 4);
  const frameNames = names.map((name) => `* ${name.padEnd(longer)} *`);

  return [border, ...frameNames, border].join("\n");
}

// version corta de chat GPT:

function createFrame2(names) {
  const longer = Math.max(...names.map((name) => name.length));
  const border = "*".repeat(longer + 4);
  const frameNames = names.map((name) => `* ${name.padEnd(longer)} *`);

  return [border, ...frameNames, border].join("\n");
}

console.log(createFrame(["midu", "abcdefstaoqq", "madeval", "educalvolpz"]));
console.log(createFrame(["zoe abigail", "felipe", "Karla"]));

console.log(createFrame2(["zoe abigail", "Lilo", "Morgan el apestoso jack"]));
