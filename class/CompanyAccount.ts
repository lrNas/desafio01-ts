import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value:number): void => {
    if(this.validateStatus()){
      this.setBalance(this.getBalance(true)+value)
      console.log('Voce pegou um empréstimo')
    }
    else{
      throw new Error("Impossível realizar empréstimo")
    }
  }
}
