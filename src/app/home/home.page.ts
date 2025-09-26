import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  perfil: any;

  constructor(private userService: UserService) {
    const user = this.userService.usuarioLogado;
    this.perfil = {
      foto: null,
      nome: user?.nome,
      nome_usuario: user?.usuario,
      profissao: 'Programador',
      idioma: 'Português',
      localidade: 'Tatuí / SP',
      data_inicio: 'Janeiro de 2020',
      biografia: '',
      estatisticas: { curtidas: 0, seguindo: 0, amigos: 0 },
      postagens: []
    };
  }

  adicionarFoto() { this.perfil.foto = 'https://picsum.photos/200'; }
  removerFoto() { this.perfil.foto = null; }
  editarBiografia() {
    const novaBio = prompt('Digite sua biografia:', this.perfil.biografia);
    if (novaBio !== null) this.perfil.biografia = novaBio;
  }
  novaPostagem() {
    const texto = prompt('Digite o texto da postagem:');
    if (texto) {
      this.perfil.postagens.unshift({
        foto: null,
        nome: this.perfil.nome,
        nome_usuario: this.perfil.nome_usuario,
        texto: texto,
        data: new Date().toLocaleString()
      });
    }
  }
  removerPostagem(postagem: any) {
    this.perfil.postagens = this.perfil.postagens.filter((p: any) => p !== postagem);
  }
}
