import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.page.html',
  styleUrls: ['./view-form.page.scss'],
})
export class ViewFormPage implements OnInit {
  data = [ {
    "anexo" : "Anexo 07",
    "facu_corta" : "FISS",
    "facultad" : "Facultad de Ingeniería Industrial y de Sistemas",
    "id" : 1,
    "tramites" : [ {
      "codigo_pago" : "10712",
      "comentarios" : [ "Se recomienda pagar en caja", "Oficina de Servicios Académicos - OSA", "El documento se entrega a mesa de partes", "Sacar una copia del FUT para el cargo" ],
      "costo_tramite" : "5",
      "dependencia" : "Oficina de Servicios Académicos",
      "descripcion" : "El siguiente trámite es para obtener tu constancia de orden de mérito.",
      "id" : 1,
      "lugar_pago" : [ "Caja de la Facultad", "Banco de Comercio" ],
      "nombre_tramite" : "Constancia de orden de mérito",
      "requisitos" : [ "Solicitud de Formato Único de Trámite (FUT)", "Recibo cancelado por derecho a trámite" ]
    }, {
      "codigo_pago" : "10512",
      "comentarios" : [ "Se recomienda pagar en caja", "Oficina de Servicios Académicos - OSA", "El documento se entrega a mesa de partes", "Sacar una copia del FUT para el cargo" ],
      "costo_tramite" : "5",
      "dependencia" : "Oficina de Servicios Académicos",
      "descripcion" : "El siguiente trámite es para obtener tu constancia de notas.",
      "id" : 2,
      "lugar_pago" : [ "Caja de la Facultad", "Banco de Comercio" ],
      "nombre_tramite" : "Constancia de notas",
      "requisitos" : [ "Solicitud de Formato Único de Trámite (FUT)", "Recibo cancelado por derecho a trámite" ]
    }, {
      "codigo_pago" : "10312",
      "comentarios" : [ "Se recomienda pagar en caja", "Oficina de Servicios Académicos - OSA", "El documento se entrega a mesa de partes", "Sacar una copia del FUT para el cargo" ],
      "costo_tramite" : "5",
      "dependencia" : "Oficina de Servicios Académicos",
      "descripcion" : "El siguiente trámite es para obtener tu constancia de estudios.",
      "id" : 3,
      "lugar_pago" : [ "Caja de la Facultad", "Banco de Comercio" ],
      "nombre_tramite" : "Constancia de estudios",
      "requisitos" : [ "Solicitud de Formato Único de Trámite (FUT)", "Recibo cancelado por derecho a trámite", "Copia de ficha de matrícula o boleta de notas" ]
    }, {
      "codigo_pago" : "10412",
      "comentarios" : [ "Se recomienda pagar en caja", "El documento se entrega a mesa de partes", "Sacar una copia del FUT para el cargo", "(*) Sistemas, Industrial, Transporte" ],
      "costo_tramite" : "5",
      "dependencia" : "Escuela profesional de Ingeniería (*)",
      "descripcion" : "El siguiente trámite es para obtener tu constancia de matrícula.",
      "id" : 4,
      "lugar_pago" : [ "Caja de la Facultad", "Banco de Comercio" ],
      "nombre_tramite" : "Constancia de matrícula",
      "requisitos" : [ "Solicitud de Formato Único de Trámite (FUT)", "Recibo cancelado por derecho a trámite" ]
    }, {
      "codigo_pago" : "-",
      "comentarios" : [ "El documento se entrega a mesa de partes", "Sacar una copia del FUT para el cargo", "(*) Sistemas, Industrial, Transporte" ],
      "costo_tramite" : "0",
      "dependencia" : "Escuela profesional de Ingeniería (*)",
      "descripcion" : "El siguiente trámite es para obtener una copia del plan de estudio.",
      "id" : 5,
      "nombre_tramite" : "Plan de Estudio",
      "requisitos" : [ "Solicitud de Formato Único de Trámite (FUT)", "Copia de tabla de equivalencia de su año correspondiente" ]
    }, {
      "codigo_pago" : "16212",
      "comentarios" : [ "El recibo de pago se entrega al profesor del curso en el cual se rendirá el examen de aplazado" ],
      "costo_tramite" : "10",
      "dependencia" : "Escuela profesional de Ingeniería (*)",
      "descripcion" : "El siguiente trámite es para obtener el derecho de rendir el examen de aplazados.",
      "id" : 6,
      "lugar_pago" : [ "Caja de la Facultad", "Banco de Comercio" ],
      "nombre_tramite" : "Derecho de examen de aplazado (Por curso)",
      "requisitos" : [ "Recibo cancelado por curso" ]
    }, {
      "codigo_pago" : "15312",
      "comentarios" : [ "El documento se entrega a mesa de partes", "Sacar una copia del FUT para el cargo", "(*) Sistemas, Industrial, Transporte" ],
      "costo_tramite" : "10",
      "dependencia" : "Escuela profesional de Ingeniería (*)",
      "descripcion" : "El siguiente trámite es para obtener la convalidación de asignaturas.",
      "id" : 7,
      "lugar_pago" : [ "Caja de la Facultad", "Banco de Comercio" ],
      "nombre_tramite" : "Convalidación de asignatura (Por curso)",
      "requisitos" : [ "Solicitud de Formato Único de Trámite (FUT)", "Constancia de ingreso a la UNFV", "Certificado de estudios en original, de la facultad de origen", "Silabos de las asignaturas, visadas por el director de la escuela profesional de la facultad de origen", "Recibo cancelado por derecho a trámite", "Recibo cancelado por derecho a convalidación por curso" ]
    }, {
      "codigo_pago" : "-",
      "comentarios" : [ "El documento se entrega a mesa de partes", "Sacar una copia del FUT para el cargo", "Oficina de Servicios Académicos - OSA" ],
      "costo_tramite" : "0",
      "dependencia" : "Escuela profesional de Ingeniería (*)",
      "descripcion" : "El siguiente trámite es para obtener la constancia de tercio superior.",
      "id" : 8,
      "nombre_tramite" : "Constancia de Tercio Superior",
      "requisitos" : [ "Solicitud de Formato Único de Trámite (FUT)", "Copia de ficha de matrícula" ]
    }, {
      "codigo_pago" : "14612",
      "comentarios" : [ "El documento se entrega a mesa de partes", "Sacar una copia del FUT para el cargo", "(*) Sistemas, Industrial, Transporte", "Se hace el pago por curso" ],
      "costo_tramite" : "3",
      "dependencia" : "Escuela profesional de Ingeniería (*)",
      "descripcion" : "El siguiente trámite es para rectificar un curso matrículado, poder cambiar de sección o retirarse del curso.",
      "id" : 9,
      "lugar_pago" : [ "Caja de la Facultad", "Banco de Comercio" ],
      "nombre_tramite" : "Rectificación de matrícula (Por curso)",
      "requisitos" : [ "Solicitud de Formato Único de Trámite (FUT)", "Copia de ficha de matrícula", "Ficha de rectificación de matrícula visada por el consejero responsable", "Recibo cancelado por derecho de rectificación de curso" ]
    }, {
      "codigo_pago" : "14112",
      "comentarios" : [ "El documento se entrega a mesa de partes", "Sacar una copia del FUT para el cargo", "(*) Sistemas, Industrial, Transporte", "La reserva de matrícula dura 1 año" ],
      "costo_tramite" : "5",
      "dependencia" : "Escuela profesional de Ingeniería (*)",
      "descripcion" : "El siguiente trámite es para reservar la matrícula.",
      "id" : 10,
      "lugar_pago" : [ "Caja de la Facultad", "Banco de Comercio" ],
      "nombre_tramite" : "Reserva de matrícula",
      "requisitos" : [ "Solicitud de Formato Único de Trámite (FUT)", "Copia de ficha de matrícula (Solo primer año)", "Recibo cancelado por derecho de trámite" ]
    } ],
    "universidad" : "Universidad Nacional Federico Villarreal"
  } ]
  id = null;
  dataIndex = null;
  titleHead = null;
  constructor(private activeR: ActivatedRoute, public alertController: AlertController) { }

  async AlertRequisitos() {
    const alert = await this.alertController.create({
      header: 'Requisitos',
      message: this.bodyHtmlR(),
      buttons: ['OK']
    });

    await alert.present();
  }
  async AlertLugar() {
    const alert = await this.alertController.create({
      header: 'Lugar de Pago',
      message: this.bodyHtmlL(),
      buttons: ['OK'],
      cssClass: 'alertcss',
    });

    await alert.present();
  }
  async AlertSugerencias() {
    const alert = await this.alertController.create({
      header: 'Sugerencias',
      message: this.bodyHtmlS(),
      buttons: ['OK']
    });

    await alert.present();
  }
  bodyHtmlS(){
    var body = '<center><img src="./assets/img/suge.png"></center>'
    body += '<ul>'
    for (var i=0;i<this.dataIndex.comentarios.length;i++){
      body +='<li>'+this.dataIndex.comentarios[i]+'</li>'
    }
    body+='</ul>'
    return body
  }
  bodyHtmlL(){
    var body = '<center><img src="./assets/img/lugar.png"></center>'
    body += '<ul>'
    for (var i=0;i<this.dataIndex.lugar_pago.length;i++){
      body +='<li>'+this.dataIndex.lugar_pago[i]+'</li>'
    }
    body+='</ul>'
    return body
  }
  bodyHtmlR(){
    var body = '<center><img src="./assets/img/reque.png"></center>'
    body += '<ul>'
    for (var i=0;i<this.dataIndex.requisitos.length;i++){
      body +='<li>'+this.dataIndex.requisitos[i]+'</li>'
    }
    body+='</ul>'
    return body
  }
  ngOnInit() {
    this.id = this.activeR.snapshot.paramMap.get("id");
    this.dataIndex = this.data[0].tramites[this.id-1]
    this.titleHead = this.data[0].tramites[this.id-1].nombre_tramite
  }
  
}
