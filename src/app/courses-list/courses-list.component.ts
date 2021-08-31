import { Component, OnInit } from '@angular/core';

interface Posts {
  title: string;
  body: string;
  id: number;
  shown?: number;
}

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
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


  // async getCoursesList() {
  //   const url = 'https://www.udemy.com/api-2.0/courses'
  //   const request = await fetch(url, {
  //     method: 'GET',
  //     credentials: 'omit',
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'application/json',
  //       'client_id': 'S58q6GZIgy8bImpjs95ziWQDs5HhGKB7lfABr6o1',
  //       'client_secret': 'r1zL5Xa6lkgb5szwoU8qR6pf8QJlkhRWPe0AoUE2byqaIVPYTKCaIMBi1Kpin3G1tsrZ4U16QJV2RuhSxo3f04cRMeviJVnHRfPg0d1WvqVEffdTXMcv85vJCCbppRhk',
  //       'Authorization': 'Basic UzU4cTZHWklneThiSW1wanM5NXppV1FEczVIaEdLQjdsZkFCcjZvMTpyMXpMNVhhNmxrZ2I1c3p3b1U4cVI2cGY4UUpsa2hSV1BlMEFvVUUyYnlxYUlWUFlUS0NhSU1CaTFLcGluM0cxdHNyWjRVMTZRSlYyUnVoU3hvM2YwNGNSTWV2aUpWbkhSZlBnMGQxV3ZxVkVmZmRUWE1jdjg1dkpDQ2JwcFJoaw=='
  //     }
  //   })
  //   console.log(request);
  // }

  // constructor() { }

  // ngOnInit(): void {
  //   this.getCoursesList()
  // }



}
