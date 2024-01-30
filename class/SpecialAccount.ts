import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    this.setBalance(this.getBalance(true) + value +10)
    console.log('Voce depositou ', value," + 10 de bonus, totalizando ",(value+10))
  }
}