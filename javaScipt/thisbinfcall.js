function getSalary() {
    return this.companyName+ " " +this.salary + "rs";
}

firstCmp = {
    companyName: "Google",
    salary: 2000000
}

secondCmp = {
    companyName: "Microsof",
    salary: 4000000
}

getSalary()

getSalary.call()


//============2
function getSalary(name, age, gender) {
    return name + " AGE: " +age+ " GENDER "+gender+". "+this.companyName+ " " +this.salary + "rs";
 }

firstCmp = {
    companyName: "Google",
    salary: 2000000
}

getSalary("Joanes", 23,"M") // 'Joanes AGE: 23 GENDER M. undefined undefinedrs'

getSalary.call(firstCmp) // 'undefined AGE: undefined GENDER undefined. Google 2000000rs'

getSalary.call(firstCmp, "JONAS", 23, "Male") // 'JONAS AGE: 23 GENDER Male. Google 2000000rs'

// ====== APPLY

function getSalary(firstName, age, gender) {
    return firstName + " AGE: " +age+ " GENDER "+gender+". "+this.companyName+ " " +this.salary + "rs";
 }

 getSalary.apply(firstCmp, ["JONAS", 23, "Male"]) // 'JONAS AGE: 23 GENDER Male. Google 2000000rs'

 // === BIND
 function getSalary(firstName, age, gender) {
    return firstName + " AGE: " +age+ " GENDER "+gender+". "+this.companyName+ " " +this.salary + "rs";
 }

 myComp = {
    companyName: "HERKAN SOFT SOL LTD",
    salary: 9927398472837498327498237723849
}
 mySal = getSalary.bind(myComp, "Jyoeta", 26, "F") // return s a funciton which always associates with myCinoy

 mySal();// 'Jyoeta AGE: 26 GENDER F. HERKAN SOFT SOL LTD 9.927398472837498e+30rs'


// 2
function Bank(name, state, city, branch) {
    console.log(`parent=RBI | Bank name = ${name} | state=${state} | city=${city} | branch=${branch}`)
}
canaraReg = Bank.bind(undefined, "CANARA")
canaraReg()
caranaKAR = canaraReg.bind(undefined, "Karnataka");
caranaKAR();
caranaBnglr = caranaKAR.bind(undefined, "Benagluru")
caranaBnglr()
caranaSarajapurrd = caranaBnglr.bind(undefined, "Sarajapura road");
caranaSarajapurrd()
