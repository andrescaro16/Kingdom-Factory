import { ElfCastle, ElfKing, ElfArmy } from './creatures/elf.js';
import { OrcCastle, OrcKing, OrcArmy } from './creatures/orc.js';

class KingdomFactory {
	createArmy() {}
	createCastle() {}
	createKing() {}
}

class ElfKingdomFactory extends KingdomFactory {
	createArmy() {
		return new ElfArmy();
	}
	createCastle() {
		return new ElfCastle();
	}
	createKing() {
		return new ElfKing();
	}
}

class OrcKingdomFactory extends KingdomFactory {
	createArmy() {
		return new OrcArmy();
	}
	createCastle() {
		return new OrcCastle();
	}
	createKing() {
		return new OrcKing();
	}
}

export { ElfKingdomFactory, OrcKingdomFactory };
