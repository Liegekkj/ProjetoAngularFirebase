import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  perfil: any = {
    foto: null,
    nome: null,
    profissao: null,
    nome_usuario: null,
    idioma: null,
    localidade: null,
    data_inicio: null,
    biografia: null,
    estatisticas: {
      curtidas: 0,
      seguindo: 0,
      amigos: 0,
    },
    postagens: [
      {
        foto: '',
        nome: 'Pyke',
        nome_usuario: '@pyke',
        texto: '',
        data: '12/03/2025 14:00'
      },
      {
        foto: '',
        nome: 'Pyke',
        nome_usuario: '@pyke',
        texto: 'dsad',
        data: '12/03/2025 15:00'
      }
      
    ]
  }


  constructor(){}

}
