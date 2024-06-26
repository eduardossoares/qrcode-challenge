"use strict";
class BankAccount {
}
class FisicPerson extends BankAccount {
    openAccount(data) {
        console.log(`Parabéns ${data.name}, sua nova conta P.Física foi criada com sucesso!`);
    }
}
class JuridicPerson extends BankAccount {
    openAccount(data) {
        console.log(`Parabéns ${data.name}, sua nova conta PJ foi criada com sucesso!`);
    }
}
const joana = new FisicPerson();
const mario = new JuridicPerson();
joana.openAccount({
    name: "Joana",
    number: 1,
    adress: "Avenida 10",
});
mario.openAccount({
    name: "Mario",
    number: 1,
    adress: "Bairro Centro",
});
