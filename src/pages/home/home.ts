import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chain } from '@angular/compiler';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      "Abelha",
      "Avestruz",
      "Baleia",
      "Búfalo",
      "Camelo",
      "Cavalo",
      "Dinheiro",
      "Diablotim",
      "Elefante",
      "Falcão",
      "Gato",
      "Hamster",
      "Impala",
      "Jaguar",
      "Javali",
      "Jumento",
      "Suricate",
      "Tamanduá",
      "Vaca",
      "Zebra"
    ]
  }

  // Redefinir itens de volta para todos os itens
  filterItems(event: any): void {
    this.initializeItems();
    // console.log('Busca', searchTerm)

    // Set value para o valor da barra de pesquisa
    let value = event.target.value;

    // Se o valor for uma string vazia, não filtre os itens
    if (value && value.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1);
      })
    }
  }
}
