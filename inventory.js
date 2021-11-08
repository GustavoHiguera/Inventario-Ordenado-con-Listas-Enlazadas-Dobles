export default class Inventory{
    constructor(){
        this.start=null;
        //Es null porque comienza vacío
    }

    //Añadir producto al inventario
    add(product){
        let temp=null;
        if(this.start==null){
            this.start=product;
        }else if(product.getCode() < this.start.getCode()){
            temp=this.start;
            product.next=temp;
            temp.before=product;
            this.start=product;
        }else{
            temp=this.start;
            while(temp.next!=null && temp.getCode() < product.getCode()){
                temp=temp.next;
            }
            if(product.getCode() < temp.getCode()){
                product.next=temp;
                product.before=temp.before;
                temp.before.next=product;
                temp.before=product;
            }else if(product.getCode()>temp.getCode()){
                product.before=temp;
                temp.next=product;
            }
        }
        console.log(this._getLength());
    }    
            

    //Borrar producto del inventario mediante el código
    delete(code){
        let deleted= null;

        if(!this.start){
            return deleted;
            //Si no hay ninguno, no puede borrar nada
        }else if(this.start.getCode()==code){
            deleted=this.start;
            this.start=this.start.next
            this.start.before=null;
            deleted.next=null;
            return deleted;
            //Si el que inicia es el que se va a borrar, entonces se pone el siguiente como el que inicia
            //Además se elimina su siguiente, así borrando cualquier vínculo
        } else{
            //Variables temporales para recorrer la lista
            let an=this.start;
            let ac=this.start.next;

            while(ac!=null){
                if(ac.getCode()==code){
                    an.next=an.next.next;
                    ac.next.before=an;
                    deleted=ac;
                    deleted.next=null;
                    deleted.before=null;
                    return deleted;
                }else{
                    an=ac;
                    ac=ac.next;
                }
            }
            console.log(this._getLength())
            return deleted;
        }
    }

    //Busca el producto mediante el código
    search(code){
        if(!this.start){
            return null;
        }else{
            let temp=this.start;
            while(temp!=null){
                if(temp.getCode()==code){
                    return temp;
                }
                temp=temp.next;
            }
            return null;
        }
    }

    //Lista los productos que se encuentran en el inventario
    list(){
        let text='';
        let temp=this.start;
        //Si no hay productos no hay nada que listar
        if(temp == null){
            return text='No hay algún producto registrado';
        }
        while(temp!=null){
            text += temp.getInfo() + "</br>" ;
            temp=temp.next;
        }
        return text;
    }


    //Método Recursivo para listar de forma inversa los productos que se encuentran en el inventario
    InverseList(){
        if(!this.start){
            return '<p>No hay algún producto registrado</p>';
        }else{
            return this._listarRec(this.start);
            
        }
    }

    //Método auxiliar para lograr la recursividad
    _listarRec(node){
        if(node.next==null){
            return node.getInfo();
        }else{
            return `<br>${this._listarRec(node.next)}</br> <br>${node.getInfo()}`;
        }
    }
    
    //Método auxiliar para obtener el largo de la lista
    _getLength(){
        let count=0;
        if(!this.start){
            return count;
        }else{
            let temp=this.start;
            while(temp!=null){
                count++
                temp=temp.next;
            }
            
            return count;
        }
    }

}
