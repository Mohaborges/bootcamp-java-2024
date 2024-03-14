/*
Añade dos de 🍟 al siguiente array. Esta vez, lo deberás de hacer realizando una sola llamada al método push():
*/

const dinner = ['🍔', '🌭']; 
//Output: ['🍔', '🌭']
//Expected output: ['🍔', '🌭', '🍟', '🍟']

// Agregar dos elementos de 🍟 al array dinner
dinner.push(...Array(2).fill('🍟'));

console.log(dinner); // Output: ['🍔', '🌭', '🍟', '🍟']
