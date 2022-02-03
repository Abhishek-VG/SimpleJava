class ATM {
    // variable
    public static int bank_balance = 10000;
    // variable
    public static int bank_pin = 2424;

    public static void main(String ...args) {
        System.out.println("Welcome to bank...");
        ATM_BALANCE_CHECK(2424);
        System.out.println("==================INSIDE ATM WITHDRAW start===================");
        // variable
        int collectedMoney = ATM_WITHDRAW(2424, 1000);
        System.out.println("Collected Money = "+ collectedMoney);
        System.out.println("==================INSIDE ATM WITHDRAW end===================");
        ATM_BALANCE_CHECK(2424);
    }

    public static int ATM_WITHDRAW(int pin, int money) {
        System.out.println("Read card");
        System.out.println("PIN ENTERED= "+ pin);
        System.out.println("MONEY REQUESTED= "+ money);
        if(pin == bank_pin) {
            if (bank_balance >= money) {
                bank_balance = bank_balance - money;
                return money;
            } else {
                System.out.println("BADDI MAGNE DUD ILLA");
                return 0;
            }
        } else {
            System.out.println("Incorrect PIN entered");
            return 0;
        }
    }

    public static void ATM_BALANCE_CHECK(int pin) {
        System.out.println("==================INSIDE ATM BAL CHECK start===================");
        if(pin == bank_pin) {
            System.out.println("Your bank balance is "+ bank_balance);
        } else {
            System.out.println("Incorrect PIN entered");
        }
        System.out.println("==================INSIDE ATM BAL CHECK start===================");
    }
}