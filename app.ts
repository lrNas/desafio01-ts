import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log("Nome na conta:",peopleAccount.getName())
peopleAccount.getBalance()
peopleAccount.deposit(100)
peopleAccount.withdraw(90)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log("Nome na conta:",companyAccount.getName())
companyAccount.getBalance()
companyAccount.deposit(200)
companyAccount.getLoan(100)
companyAccount.withdraw(280)

const specialAccount: SpecialAccount = new SpecialAccount("Fundo imobiliário DIO",1023123)
console.log("Nome na conta:",specialAccount.getName())
specialAccount.getBalance()
specialAccount.deposit(100)
specialAccount.withdraw(100)