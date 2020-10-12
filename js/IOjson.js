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
            return (p1.identifiant === id);
        });
        return p1;
    }

    get1AColor(id){
        return this.get1A(id).famille;
    }

    getImg(id){
        return this.get1A(id).path;
    }

    getMessage(id){
        return this.get1A(id).message;
    }

    getContact(id){
        return this.get1A(id).contact;
    }



}

