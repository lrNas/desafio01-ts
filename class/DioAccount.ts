export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    console.log('Voce está depositando ', value)
    this.setBalance(this.balance + value)
  }

  withdraw = (value: number): void => {
    if (this.balance >= value) {
      console.log('Voce está sacando ', value)
      this.setBalance(this.balance - value)
    } else {
      throw new Error('Saldo insuficiente')
    }
  }

  getBalance = (response: boolean=false): any => {
    if (response) {
      return this.balance
    }else{
      console.log('Saldo atual ',this.balance)
    }
  }

  protected setBalance = (value: number): void => {
    if (this.validateStatus()) {
      this.balance = value
      console.log("Saldo atualizado ", this.balance)
    }
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
