class App {
	constructor() {
		this.kingdom = null;
	}

	createKingdom(factory) {
		this.kingdom = factory;
	}

	getCastle() {
		return this.kingdom.createCastle();
	}

	getKing() {
		return this.kingdom.createKing();
	}

	getArmy() {
		return this.kingdom.createArmy();
	}
}

export { App };
