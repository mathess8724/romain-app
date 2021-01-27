import { Component, OnInit, Input } from '@angular/core';
let  PrismicDOM = require('prismic-dom');

@Component({
  selector: 'app-rich-text-component',
  templateUrl: './rich-text-component.component.html',
  styleUrls: ['./rich-text-component.component.scss']
})
export class RichTextComponentComponent implements OnInit {

  html:any;

 linkResolver = (doc:any) => {
  // Pretty URLs for known types
  if (doc.type === 'blog') return "/post/" + doc.uid;
  if (doc.type === 'page') return "/" + doc.uid;
  // Fallback for other types, in case new custom types get created
  return "/doc/" + doc.uid;

  
};
  

  constructor() { }
  @Input() public slice: any;

  ngOnInit(): void {
    //console.log('richtext slice : ',this.slice);
    
      this.html = PrismicDOM.RichText.asHtml(this.slice.fields[0].richtext, this.linkResolver(this.slice));
     
  }

  returnHtml = () => {
    return ('<H1>test</H1>');
  }


}
