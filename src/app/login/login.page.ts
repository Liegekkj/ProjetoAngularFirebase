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

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private userService: UserService
  ) {}

  async login() {
    const user = this.userService.usuarios.find(u => u.usuario === this.usuario && u.senha === this.senha);
    if (user) {
      this.userService.usuarioLogado = user;
      this.navCtrl.navigateForward('/home');
    } else {
      this.erroLogin = 'Usuário ou senha incorretos!';
    }
  }
}
