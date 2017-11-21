import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'kgp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  skills = [{
    'level': '69',
    'title': 'Communication'
  }, {
    'level': '75',
    'title': 'Organization'
  }, {
    'level': '74',
    'title': 'Learning'
  }, {
    'level': '65',
    'title': 'Teaching'
  }, {
    'level': '75',
    'title': 'Planning'
  }, {
    'level': '84',
    'title': 'Visual Design'
  }, {
    'level': '64',
    'title': 'UX Design'
  }, {
    'level': '67',
    'title': 'Programming'
  }]

  constructor() { }

  ngOnInit() {
  }

}
