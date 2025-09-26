import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  senha: string = '';
  erroLogin: string = '';

  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private userService: UserService) {}

  login() {
    const user = this.userService.validarLogin(this.usuario, this.senha);
    if (user) {
      this.erroLogin = '';
      this.navCtrl.navigateRoot('/home');
    } else {
      this.erroLogin = 'Usuário ou senha inválidos!';
    }
  }

  async esqueciSenha() {
    const alert = await this.alertCtrl.create({
      header: 'Esqueci minha senha',
      message: 'Entre em contato com o suporte.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
