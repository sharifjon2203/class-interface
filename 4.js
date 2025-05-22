var BankAccount = /** @class */ (function () {
    function BankAccount(name, acountNumber) {
        this.balance = 0;
        this.ownerName = name;
        this.accountNumber = accountNumber;
    }
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    Object.defineProperty(BankAccount.prototype, "getName", {
        get: function () {
            return this.ownerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "editName", {
        set: function (name) {
            this.ownerName = name;
            return true;
        },
        enumerable: false,
        configurable: true
    });
    BankAccount.bankName = "Bank";
    return BankAccount;
}());
var person = new BankAccount("John", "2093458938");
person.getBalance();
