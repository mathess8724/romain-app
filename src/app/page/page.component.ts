import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

// interface Demo {
//   key: string;
//   value: string;
// }

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  title = 'romain-app';
  PrismicData: any;
  test: any = [];

  constructor(private readonly route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      console.log('Page loaded => ' + params.pageName);
      // todo 1 => Search page where field "pageName" is params.pageName.
      // todo 2 => Get all the slices of that page. Per slice type.
      // todo 3 => For each slice get all the elements in it.
      // todo 4 => in template, loop over the slices (row of cards of a certain type?),
      // and in each slice over the elements (individual card) and display each.
    });
  }

  ngOnInit(): void {
    // this.PrismicData = Object.entries(this.getPrismic());
    this.getPrismic().then((results: any) => {
      console.log(results);
    });
  }

  async getPrismic(): Promise<any>{
    const Prismic = require('prismic-javascript'); // todo is there not an angular library for that?
    const apiEndpoint = 'https://sunrise-app.cdn.prismic.io/api/v2';
    Prismic.default.getApi(apiEndpoint).then((api: any) => {
      return api.query(
        Prismic.default.Predicates.at('document.type', 'card-my-sunrise'), // todo should search page. with url field = "xxx"
        {orderings: '[card-my-sunrise.date ]'}
      );
    }).then((response: any) => response.results, (err: any) => {
      console.log('Something went wrong: ', err);
    });
  }


  // endpointPrismic(): void {
  //   const axios = require('axios');
  //   // Make a request for a user with a given ID
  //   axios.get('https://sunrise-app.cdn.prismic.io/api/v2')
  //     .then((response: any) => {
  //       // handle success
  //       console.log(response);
  //     })
  //     .catch((error: any) => {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(() => {
  //       // always executed
  //     });
  // }

  // createDemo(mydemo: any): Array<Demo> {
  //   const tempdemo: Array<Demo> = [];
  //
  //   // Caution: use "of" and not "in"
  //   for (const key of Object.keys(mydemo)) {
  //     tempdemo.push({key, value: mydemo[key]});
  //   }
  //
  //   return tempdemo;
  // }


  // changeData(data: any): void {
  //   // console.log(this.createDemo(data))
  //   const t = data;
  //   t.map((entri: any, index: any) => (
  //     console.log(entri.id)
  //   ));
  // }

  plus(): void {
    this.PrismicData = this.getPrismic();
    // console.log(this.getPrismic())
  }

  // counter(): void {
  // }
}
