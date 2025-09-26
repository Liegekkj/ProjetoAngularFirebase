import { Component, OnInit } from '@angular/core';
import { UserService, Usuario } from '../services/user.service';

interface Postagem {
  foto: string | null;
  nome: string;
  nome_usuario: string;
  texto: string;
  data: string;
}

interface Perfil {
  foto: string | null;
  nome: string;
  nome_usuario: string;
  profissao: string;
  idioma: string;
  localidade: string;
  data_inicio: string;
  biografia: string;
  estatisticas: {
    curtidas: number;
    seguindo: number;
    amigos: number;
  };
  postagens: Postagem[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  perfil!: Perfil;

  constructor(private userService: UserService) {}

  ngOnInit() {
    const user: Usuario | null = this.userService.usuarioLogado;

    this.perfil = {
      foto: null,
      nome: user?.nome || 'Usuário',
      nome_usuario: user?.usuario || 'usuario',
      profissao: 'Programador',
      idioma: 'Português',
      localidade: 'Tatuí / SP',
      data_inicio: 'Janeiro de 2020',
      biografia: '',
      estatisticas: { curtidas: 0, seguindo: 0, amigos: 0 },
      postagens: []
    };
  }

  adicionarFoto() {
    this.perfil.foto = 'https://picsum.photos/200';
  }

  removerFoto() {
    this.perfil.foto = null;
  }

  editarBiografia() {
    const novaBio = prompt('Digite sua biografia:', this.perfil.biografia);
    if (novaBio !== null) this.perfil.biografia = novaBio;
  }

  novaPostagem() {
    const texto = prompt('Digite o texto da postagem:');
    if (texto) {
      const postagem: Postagem = {
        foto: null,
        nome: this.perfil.nome,
        nome_usuario: this.perfil.nome_usuario,
        texto: texto,
        data: new Date().toLocaleString()
      };
      this.perfil.postagens.unshift(postagem);
    }
  }

  removerPostagem(postagem: Postagem) {
    this.perfil.postagens = this.perfil.postagens.filter(p => p !== postagem);
  }
}
