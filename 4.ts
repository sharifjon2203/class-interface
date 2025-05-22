class BankAccount {
    readonly accountNumber: string
    public ownerName: string
    private balance: number = 0
    static bankName: string = "Bank"


    constructor(name: string, acountNumber: string) {
        this.ownerName = name
        this.accountNumber = accountNumber
    }

    getBalance() {
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

    set editName(name: string): boolean {
        this.ownerName = name
        return this.ownerName
    }

}

const person = new BankAccount("John", "2093458938")
person.getBalance()

