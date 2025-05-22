class BankAccount {
    readonly accountNumber: string
    public ownerName: string
    private balance: number = 0
    static bankName: string = "Bank"


    constructor(name: string, acountNum: string) {
        this.ownerName = name
        this.accountNumber = acountNum
    }

    getBalance() {
        console.log(this.balance)
        return this.balance
    }

    deposit(amount: number) {
        this.balance += amount
    }
    withdraw(amount: number) {
        this.balance -= amount
    }

    get getName(): string {
        return this.ownerName
    }

    set editName(name: string) {
        this.ownerName = name
    }

}

const person = new BankAccount("John", "2093458938")
person.getBalance()
person.editName = "JOhn Doe"

console.log(person.getName)


