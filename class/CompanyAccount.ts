import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value:number): void => {
    if(this.validateStatus()){
      console.log('Voce está pegando um empréstimo de ',value)
      this.setBalance(this.getBalance(true)+value)
    }
    else{
      throw new Error("Impossível realizar empréstimo")
    }
  }
}
