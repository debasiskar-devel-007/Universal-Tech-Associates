import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-prospects',
  templateUrl: './prospects.component.html',
  styleUrls: ['./prospects.component.css']
})
export class ProspectsComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
    this.meta.setTitle('Universal Tech Associates - Our Prospects');
    this.meta.setTag('og:description', 'Portfolio of current projects and companies, in various stages of development, working directly in partnership with Universal Tech Associates and Wirthlin Worldwide to bring emerging technologies to the global marketplace.');
    this.meta.setTag('twitter:description', 'Portfolio of current projects and companies, in various stages of development, working directly in partnership with Universal Tech Associates and Wirthlin Worldwide to bring emerging technologies to the global marketplace.');

    this.meta.setTag('og:keyword', 'Universal Tech Associates Prospects, Universal Tech Associates Projects, Universal Tech Associates Current Projects');
    this.meta.setTag('twitter:keyword', 'Universal Tech Associates Prospects, Universal Tech Associates Projects, Universal Tech Associates Current Projects');

    this.meta.setTag('og:title', 'Universal Tech Associates - Our Prospects');
    this.meta.setTag('twitter:title', 'Universal Tech Associates - Our Prospects');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo-fb.jpg');
    this.meta.setTag('twitter:image', '../../assets/images/logo-twitter.jpg');
  }

  ngOnInit() {
  }

}
