import assert from "assert";

class BankCustomer {

  private nameCustomer: string;
  private secretCode: string;

  constructor(nameCustomer: string, secretCode: string) {
    this.nameCustomer = nameCustomer;
    this.secretCode = secretCode;
  }

  public getName() : string {
    return this.nameCustomer;
  }
  
  public verifyPinInput(secretCode:string) :boolean {
    if (this.secretCode === secretCode) {
      return true
    } else {
      return false
    }
  }

}

// Tests
const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));

