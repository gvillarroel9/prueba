import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GLOBAL } from '../../global';
import { Producto } from '../../models/producto';

@Injectable()
export class ProductoService {
  headers: Headers;
  headersTemp: Headers;
  public url: string;
  public cantRegPagina:number;
  public pagActual:number;

  constructor(private _http:Http) { 
    this.url = GLOBAL.url;
    this.cantRegPagina= GLOBAL.cantRegPagina;
    this.headers = new Headers({ 'Content-Type': 'application/json' });
  }
  getProductos(){
    return this._http.get(this.url + 'productos')
                    .map((res:Response) => {
                            return (res.json());
                        })
                    .catch(this.manejarError);
  }
  getProductosPagina(pagina:number){
    return this._http.get(this.url + 'productos?_start='+ (pagina*this.cantRegPagina) +'&_limit='+this.cantRegPagina)
                    .map((res:Response) => {
                            return (res.json());
                        })
                    .catch(this.manejarError);
  }
  getProducto(id){
    return this._http.get(this.url + 'productos/'+id)
                     .map(res => res.json());
  }
  addProducto(producto:Producto){
    let json = JSON.stringify(producto);
    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url+'productos', json, {headers:headers})
                    .map(res => res.json());
   }
   editProducto(id, producto:Producto){
    let json = JSON.stringify(Producto);
    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.put(this.url+'productos/'+id, json, {headers:headers})
                    .map(res => res.json());
   }
   deleteProducto(id){
     return this._http.delete(this.url+'productos/'+id)
                      .map(res => res.json());
   }

  private manejarError(error: HttpErrorResponse) {
    console.error('Error en servidor:', error);
    if (error.error instanceof Error) {
        let errMessage = error.error.message;
        return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js servidor error');
  }

}
