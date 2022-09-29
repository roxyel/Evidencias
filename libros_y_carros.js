class Publicacion{
    constructor(titulo, precio){
        this._titulo=titulo;
        this._precio=precio;
    }

    set titulo(titulo){
        this._titulo=titulo;
    }

    get titulo(){
        return this._titulo;
    }

    set precio(precio){
        this._precio=precio;
    }

    get precio(){
        return this._precio;
    }
}

class Libro extends Publicacion{
    constructor(titulo, precio){
        super(titulo, precio);
    }
}

const ap1=new Publicacion('Cien años de soledad', 100000);
console.log(ap1.titulo);
console.log(ap1.precio);


//--------------------------------------------------------------------

class Carro{
    constructor(marca, precio, color, modelo){
        this._marca=marca;
        this._precio=precio;
        this._color=color;
        this._modelo=modelo;
    }

    set marca(marca){
        this._marca=marca;
    }

    get marca(){
        return this._marca;
    }

    set precio(precio){
        this._precio=precio;
    }

    get precio(){
        return this._precio;
    }

    set color(color){
        this._color=color;
    }

    get color(){
        return this._color;
    }

    set modelo(modelo){
        this._modelo=modelo;
    }

    get modelo(){
        return this._modelo;
    }

}

class Ferrari extends Carro{
    constructor(marca, precio, color, modelo){
        super(marca, precio, color, modelo);
    }
}

const ap2=new Carro('bugatti', 100000, 'negro', '2011');
console.log(ap2.marca);
console.log(ap2.precio);
console.log(ap2.color);
console.log(ap2.modeo);


