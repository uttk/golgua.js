import * as $$ from '../funcs/funcs';

/**
 * @description Golgua Store Class
 */
export class GolguaDataStore {
  /**
   * @param {Types} types Golgua Types Instance
   * @param {Any} defaultValue default value
   */
  constructor(types) {
    this.types = types;
    this.default_value = types.defaultValue();
    this.state = types.defaultValue();
  }

  /**
   * @description Reset state to the default value
   * @return {Any}
   */
  reset() {
    this.state = this.types.defaultValue();
    return this.types.defaultValue();
  }

  /**
   * @description update state
   * @param {any} value update value
   */
  update(value) {
    this.state = $$.clone(value);
  }

  /**
   * @description Return store value
   * @return {Any}
   */
  getValue() {
    return $$.clone(this.state);
  }
}