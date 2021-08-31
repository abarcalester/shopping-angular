import { Component, OnInit } from '@angular/core';

interface Posts {
  title: string;
  body: string;
  id: number;
  shown?: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.getData()
  }

  posts: Posts[] = []
  limit: number = 20
  page: number = 1

  showLoading:boolean = false
  showFooterText: boolean = true

  fire: number = 0
  searched = ''
  setDefault () {
    this.page++
    this.fire = 0
    this. showFooterText = true
    this.showLoading = false
  }
  
  // Get data on initial load
  getData = async () => {
    // https://jsonplaceholder.typicode.com/posts?_limit=5&_page=1
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`)
    const data = await res.json()
    this.printData(data)
    this.setDefault()
    console.log(data);
    
  }
  printData (posts: Posts[]) {
    posts.forEach(post => {
      this.posts.push(post)
    })
  }

}
