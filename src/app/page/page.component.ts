import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory/lib/fragmentMatcher';
import fragmentTypes from '../../../src/app/introspectionFragment/fragmentTypes.json';
let InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;
let ApolloClient = require("apollo-client").ApolloClient;
let gql = require("graphql-tag");
let PrismicLink = require("apollo-link-prismic").PrismicLink;

const fragmentMatcher = new IntrospectionFragmentMatcher(
  { introspectionQueryResultData: fragmentTypes },
);

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  title = 'romain-app';
  PrismicData: any;
  test: any = [];
  prismicData: any = {
    'cardsGroupSmall': [],
    'cardsGroupMedium': []
  };
  loading = true;
  error: any;
  url: string = '';
  notFound = false;
  cardsGroupSmall: any;
  cardsGroupMedium: any;

  constructor(private readonly route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      console.log('Page loaded => ' + params.pageName);
      this.url = `/${params.pageName}`;
      // todo 1 => Search page where field "pageName" is params.pageName.
      // todo 2 => Get all the slices of that page. Per slice type.
      // todo 3 => For each slice get all the elements in it.
      // todo 4 => in template, loop over the slices (row of cards of a certain type?),
      // and in each slice over the elements (individual card) and display each.
    });
  }
  client = new ApolloClient({
    link: PrismicLink({
      uri: "https://sunrise-app.prismic.io/graphql"
    }),
    cache: new InMemoryCache({ fragmentMatcher })
  });


  ngOnInit(): void {
    this.client.query({
      query: gql`
      query{
        page(uid:"plop",lang:"en-us"){
          url
          body{
            ... on PageBodyCardsGroupSmall{
              fields{
                cardsgroupsmall{
                  ... on CardSmall{
                    title
                    cardImage
                    cardLink
                    cardBackgroundColor
                    ismobile
                  }
                }
              }
            }
          ... on PageBodyCardsGroupMedium{
            fields{
              cardsGroupMedium{
                ... on CardMedium{
                  title
                  cardImg
                  cardBtnText
                  cardBtnLink
                  cardBackgroundColor
                  ismobile
                  cardText
                  }
                }
              }
            }
          }   
        }
      }
      `
    }).then((response: any) => {
      let cardsGroupSmall : Object;
      let cardsGroupMedium: Object;
      //console.log('response : ', response);      
      //this.prismicData = response;
      //console.log(this.url);
      if(response.data.page.url === this.url === false){
        this.notFound = true      
        return;
      }     
      response.data.page.body.map((elem:any, index: number ) => (        
        elem.__typename === 'PageBodyCardsGroupSmall' ? this.cardsGroupSmall = elem.fields : console.log(),
        elem.__typename === 'PageBodyCardsGroupMedium' ? this.cardsGroupMedium = elem.fields : console.log()        
      ));
      //console.log('small cards group :', cardsGroupSmall);
      //console.log('medium cards group :', cardsGroupMedium);
      this.prismicData = {
        'cardsGroupSmall' : this.cardsGroupSmall,
        'cardsGroupMedium' : this.cardsGroupMedium
      }
      console.log(this.prismicData);         
    }).catch((error: any) => {
      console.error(error);
    });
   
  }

  
}
