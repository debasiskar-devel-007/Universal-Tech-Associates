import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
    this.meta.setTitle('Universal Tech Associates - Contact');
    this.meta.setTag('og:description', 'Get in touch with our representatives TODAY to learn more about how working with us can help your emerging technologies receive worldwide recognition and scalability through our global partnerships.');
    this.meta.setTag('twitter:description', 'Get in touch with our representatives TODAY to learn more about how working with us can help your emerging technologies receive worldwide recognition and scalability through our global partnerships.');

    this.meta.setTag('og:keyword', 'Universal Tech Associates Contact, Contact Universal Tech Associates, UTA Contact, Contact UTA');
    this.meta.setTag('twitter:keyword', 'Universal Tech Associates Contact, Contact Universal Tech Associates, UTA Contact, Contact UTA');

    this.meta.setTag('og:title', 'Universal Tech Associates - Contact');
    this.meta.setTag('twitter:title', 'Universal Tech Associates - Contact');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo-fb.jpg');
    this.meta.setTag('twitter:image', '../../assets/images/logo-twitter.jpg');
  }

  ngOnInit() {
  }

}
