// index.js
class TaxCalculator {
  // private field
  #rate = 15;

  constructor() {
    this.state = 'TX';
    this.exempt = false;
  }

  // private methods
  #calculateExempt(multiplier) {
    return multiplier * this.#rate;
  }

  #calculateNonExempt(multiplier) {
    return multiplier * this.#rate;
  }

  // public method
  calculate() {
    if (this.exempt) {
      return this.#calculateExempt(1.37);
    } else {
      return this.#calculateNonExempt(5.72);
    }
  }
}

module.exports = TaxCalculator;
