(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
        Fuerza[Fuerza["superman"] = 100] = "superman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
export {};
//# sourceMappingURL=app.js.map