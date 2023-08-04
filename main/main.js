import { App } from '../factories/kingdom/app.js';
import { KingdomTypes } from '../factories/kingdom/kingdomType.js';

// ----------------------------[Create Kingdoms]-------------------------------//
const elves = new App();
elves.createKingdom(KingdomTypes.ELF);
const elvesArmy = elves.getArmy().getDescription();
const elvesCastle = elves.getCastle().getDescription();
const elvesKing = elves.getKing().getDescription();

const orcish = new App();
orcish.createKingdom(KingdomTypes.ORC);
const orcishArmy = orcish.getArmy().getDescription();
const orcishCastle = orcish.getCastle().getDescription();
const orcishKing = orcish.getKing().getDescription();


// ----------------------------[Print Kingdoms]--------------------------------//
console.log('Elf Kingdom');
console.log('Army:\t', elvesArmy);
console.log('Castle:\t', elvesCastle);
console.log('King:\t', elvesKing);

console.log('\nOrc Kingdom');
console.log('Army:\t', orcishArmy);
console.log('Castle:\t', orcishCastle);
console.log('King:\t', orcishKing);
