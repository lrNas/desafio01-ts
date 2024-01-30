import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.getName()
peopleAccount.deposit(100)
peopleAccount.getBalance()
peopleAccount.withdraw(90)
peopleAccount.getBalance()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getName()
companyAccount.deposit(200)
companyAccount.getBalance()
companyAccount.getLoan(100)
companyAccount.getBalance()
companyAccount.withdraw(280)
companyAccount.getBalance()

const specialAccount: SpecialAccount = new SpecialAccount("Fundo imobiliário DIO",1023123)
specialAccount.getName()
specialAccount.deposit(100)
specialAccount.getBalance()
specialAccount.withdraw(100)
specialAccount.getBalance()