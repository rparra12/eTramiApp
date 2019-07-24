import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,public alertController: AlertController) {}

  enterList(){
    this.router.navigateByUrl("/list");
  }
  async AlertHome() {
    const alert = await this.alertController.create({
      header: 'Ver trámites',
      message: this.bodyHtml(),
      buttons: [{
        text: 'Entrar',
        handler: () => {
          this.router.navigateByUrl("/list");
        }
      },
      {
        text: 'Cerrar',
        role: 'cancel',
        cssClass: 'secondary',
      }]
    });

    await alert.present();
  }
  bodyHtml(){
    var body = '<center><img src="./assets/img/unfv-logo.jpg"></center>'
    body += '<p>A continuacion se mostraran la lista de tramites de pregrado de la UNFV</p>'
    return body
  }
}

