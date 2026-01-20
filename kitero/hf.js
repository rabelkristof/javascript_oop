class Tanyer {
    /**
     *  @param {string} color
     */
    constructor(color) {
        this.color = color;
    }
}

class KisTanyer extends Tanyer {
    /**
     * @param {string} color
     * @param {string} howSmall
     */
    constructor(color, howSmall) {
        super(color);
        this.howSmall = howSmall;
    }
}

class NagyTanyer extends Tanyer {
    /**
     * @param {string} color
     * @param {string} howBig
     */
    constructor(color, howBig) {
        super(color);
        this.howBig = howBig;
    }
}

class Pohar {
    /**
     * @param {string} color
     */
    constructor(color) {
        this.color = color;
    }
}

const tanyer = new Tanyer("sarga");
const kisTanyer = new KisTanyer("piros", "valamennyire");
const kisTanyer2 = new KisTanyer("piros", "kicsiket");
const nagyTanyer = new NagyTanyer("zold", "nagyon nagyon");
const pohar = new Pohar("atlatszo");

/**
 * @param {string} color
 */
function Tanyer2(color) {
    this.color = color;
}

/**
 * @param {string} color
 * @param {string} howSmall
 */
function KisTanyer2(color, howSmall) {
    this.howSmall = howSmall;
    Tanyer2.call(this, color);
}

Object.setPrototypeOf(KisTanyer2.prototype, Tanyer2.prototype);

/**
 * @param {string} color
 * @param {string} howBig
 */
function NagyTanyer2(color, howBig) {
    this.howBig = howBig;
    Tanyer2.call(this, color);
}

Object.setPrototypeOf(NagyTanyer2.prototype, Tanyer2.prototype);

/**
 * @param {string} color
 */
function Pohar2(color) {
    this.color = color;
}

const tanyer2 = new Tanyer2("sarga2");
const kisTanyer3 = new KisTanyer2("piros2", "nagyon");
const KisTanyer4 = new KisTanyer2("piros2", "kozepesen");
const nagyTanyer2 = new NagyTanyer2("zold2", "kicsit");
const pohar2 = new Pohar2("atlatszo2");