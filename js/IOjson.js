class IOjson{

    /**
     * It is used to read and write in json files.
     */


    /**
     * @param {string} file the file to read or write.
     */
    constructor(json) {
        let strListJson = JSON.stringify(json);
        this._json = JSON.parse(strListJson);
    }

    // ---------------------------------------- Get all place elements ------------------------------- //

    getAll1A(){
        return this._json.PremiereAnnee
    }

    get1A(id){
        let liste = this.getAll1A();
        let p1 = liste.find( (p1) => {
            return (p1.id === id);
        });
        return p1;
    }

    get1AColor(id){
        return this.get1A(id).color;
    }

    getImg(id){
        return this.get1A(id).img;
    }

    getEnigme(id){
        return this.get1A(id).enigme;
    }

    getAdresse(id){
        return this.get1A(id).adresse;
    }



}

