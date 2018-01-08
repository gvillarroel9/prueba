import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Producto } from '../../../models/producto';
import { ProductoService } from '../../../services/producto/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  alerts: any = [];
  productosLista: Producto[];
  productoNuevo:any={};
  mostrarFormulario:boolean = false;
  esNuevoProducto:boolean;
  public confirmarEliminadoId;
  public bloque = 0;
  public pagActual=1;

  constructor(private route:ActivatedRoute, private _productoService:ProductoService) { }
  
  ngOnInit() {
    /* cargamos los usuarios almacenados */ 
    //this.getProductosPagina(1);
    this.getProductos();
  }

  getProductosPagina(pagina){
    this.pagActual = pagina;
    this._productoService.getProductosPagina(pagina-1)
                                .subscribe((response:Producto[])=>{
                                  this.productosLista = response;
                                },
                                (err: any)=>{
                                  console.log("Error en productosComponent.",err);
                                });
  }
  getProductos(){
    this._productoService.getProductos()
                                .subscribe((response:Producto[])=>{
                                  console.log(response);
                                  this.productosLista = response;
                                },
                                (err: any)=>{
                                  console.log("Error en productosComponent.",err);
                                });
  }
  
  onDeleteProducto(id){
    console.log("ID: " + id);
    this._productoService.deleteProducto(id).subscribe(
      res => {
        console.log(res);
        this.getProductosPagina(1);  
      },
      err => {
        this.mostrarMensaje("<strong>Error. </strong>El producto no pudo ser eliminado.","danger");
        console.log(<any>err);
      }
    );
  }
  confirmarEliminar(id){
    this.confirmarEliminadoId = id;
  }
  cancelarEliminar(){
    this.confirmarEliminadoId = null;
  }
  incrementarBloquePag(){
    this.bloque+=5;
  }
  decrementarBloquePag(){
    this.bloque-=5;
  }

  mostrarMensaje(mensaje: string, tipo: string): void {
    /*tipo: 'danger', 'info', 'success'*/
    this.alerts.push({
      type: tipo,
      msg: mensaje,
      timeout: 3000
    });
  }
}
