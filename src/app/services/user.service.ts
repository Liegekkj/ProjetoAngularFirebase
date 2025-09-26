import { Injectable } from '@angular/core';

export interface Usuario {
  nome: string;
  usuario: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usuarios: Usuario[] = [
    { nome: 'Admin', usuario: 'admin', senha: '123456' }
  ];

  usuarioLogado: Usuario | null = null;

  adicionarUsuario(nome: string, usuario: string, senha: string) {
    this.usuarios.push({ nome, usuario, senha });
  }

  validarLogin(usuario: string, senha: string): Usuario | undefined {
    const user = this.usuarios.find(u => u.usuario === usuario && u.senha === senha);
    if (user) this.usuarioLogado = user;
    return user;
  }
}
