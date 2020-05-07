class CalcController {

    //Criando o método construtor
    constructor() {

        this._locale = "pt-br"

        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._hourEl = document.querySelector('#hora');

        this._currentDate;

        this.initialize();
    }

    initialize() {
        this.setDisplayDateTime();
        setInterval(() => {
            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        }, 1000);
    }

    get displayTime() {
        return this._hourEl.innerHTML;
    }
    get displayDate() {
        return this._dateEl.innerHTML;
    }


    set displayTime(value) {
        return this._hourEl.innerHTML = value;
    }
    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    //Método GET
    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }
    //Método SET
    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    //Métodos GET e SET _currentDate
    get currentDate() {
        return new Date;
    }
    set currentDate(value) {
        this._currentDate = value;
    }
}