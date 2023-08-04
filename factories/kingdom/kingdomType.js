import { ElfKingdomFactory, OrcKingdomFactory } from '../kingdom/kingdomFactory.js';

const KingdomTypes = {
	ELF: new ElfKingdomFactory(),
	ORC: new OrcKingdomFactory(),
};

export { KingdomTypes };
