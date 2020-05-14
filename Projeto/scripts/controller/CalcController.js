class CalcController {

    //Criando o método construtor
    //this = 
    //._ = private
    constructor() {

        this._operation = [];//guarda os valores inseridos na calculadora

        this._locale = "pt-br";//definindo local

        this._displayCalcEl = document.querySelector('#display');//seleciona o HTML do ID referenciado
        this._dateEl = document.querySelector('#data');//seleciona o HTML do ID referenciado
        this._hourEl = document.querySelector('#hora');//seleciona o HTML do ID referenciado

        this._currentDate;

        this.initialize();//chamando o metodo que inicia eventos
        this.initButtonsEvents();//chamando o metodo que inicia os botões
    }

    initialize() {
        this.setDisplayDateTime();
        setInterval(() => {
            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        }, 1000);
    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    clearAll() {
        this._operation = [];
    }
    clearEntry() {
        this._operation.pop();
    }
    setLastOperation(value) {
        this._operation[this._operation.length - 1] = value;
    }
    getLastOperation() {
        return this._operation[this._operation.length - 1];
    }
    isOperator(value) {
        return (['+', '-', '*', '/', '%'].indexOf(value) > -1);

    }
    addOperation(value) {
        console.log('A', value, isNaN(this.getLastOperation()));
        if (isNaN(this.getLastOperation())) {
            //string
            if (this.isOperator(value)) {
                //trocar o operador
                this.setLastOperation(value)
            }
            else if (isNaN(value)) {
                console.log(value);
            } else {
                this._operation.push(value);
            }

        } else {
            //number
            if (this.isOperator(value)) {
                this._operation.push(value);
            } else {
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));
            }

        }
        console.log(this._operation);
    }
    setError() {
        this.displayCalc = "Error";
    }
    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            case 'divisao':
                this.addOperation('/');
                break;
            case 'multiplicacao':
                this.addOperation('*');
                break;
            case 'porcento':
                this.addOperation('%');
                break;
            case 'igual':

                break;
            case 'ponto':
                this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();

        }
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, "click drag", e => {
                let textBtn = btn.className.baseVal.replace("btn-", "");
                console.log(this.execBtn(textBtn));
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });

        });

    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
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