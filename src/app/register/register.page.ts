import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nome = '';
  usuario = '';
  email = '';
  senha = '';
  confirmarSenha = '';
  erroRegistro = '';

  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private userService: UserService) {}

  async registrar() {
    if (!this.nome || !this.usuario || !this.email || !this.senha || !this.confirmarSenha) {
      this.erroRegistro = 'Preencha todos os campos!';
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      this.erroRegistro = 'As senhas não coincidem!';
      return;
    }

    const existente = this.userService.usuarios.find(u => u.usuario === this.usuario);
    if (existente) {
      this.erroRegistro = 'Usuário já existe!';
      return;
    }

    this.userService.adicionarUsuario(this.nome, this.usuario, this.senha);
    this.erroRegistro = '';

    const alert = await this.alertCtrl.create({
      header: 'Registro concluído',
      message: 'Sua conta foi criada com sucesso!',
      buttons: ['OK']
    });
    await alert.present();

    this.navCtrl.navigateForward('/login');
  }
}
