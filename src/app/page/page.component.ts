import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory/lib/fragmentMatcher';
import fragmentTypes from '../../../src/app/introspectionFragment/fragmentTypes.json';
let InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;
let ApolloClient = require("apollo-client").ApolloClient;
let gql = require("graphql-tag");
let PrismicLink = require("apollo-link-prismic").PrismicLink;

// initialyze the fragmentMatcher for querys
// !! the fragmentTypes json file is a scheman who is created with 'schemaQuery.js' file, don't forget 
// to use 'npm run build-fragment' if the schema query change on prismic
// or you get an heuristic apollo error !!
// the 'schemaQuery.js will fetch the prismic graphql possibilities and write it in the 
// fragmentTypes.json file
const fragmentMatcher = new IntrospectionFragmentMatcher(
  { introspectionQueryResultData: fragmentTypes },
);
//-----------------------------------------------------------------

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  title = 'romain-app';
  PrismicData: any;
  test: any = [];
  // prismic data array
  prismicData: any = {
    'cardsGroupSmall': [],
    'cardsGroupMedium': [],
    'countdown': null
  };
  //---------------------

  loading = true;
  error: any;
  url: string = '';
  notFound = false;
  // prismic data temp variable (used in the prismic graphql query)
  cardsGroupSmall: any;
  cardsGroupMedium: any;
  countdown = [];
  //-------------------------
  constructor(private readonly route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      console.log('Page loaded => ' + params.pageName);
      // check the page url and put it in variable
      this.url = `/${params.pageName}`;
      //--------------------------------

      // todo 1 => Search page where field "pageName" is params.pageName. => OK!
      // todo 2 => Get all the slices of that page. Per slice type. => OK!
      // todo 3 => For each slice get all the elements in it. => OK!
      // todo 4 => in template, loop over the slices (row of cards of a certain type?),
      // and in each slice over the elements (individual card) and display each. => OK!
    });
  }
  // initialyze apollo client for graphql querys with the schema(fragmentTypes) created by schemaQuery.js file
  client = new ApolloClient({
    link: PrismicLink({
      uri: "https://sunrise-app.prismic.io/graphql"
    }),
    cache: new InMemoryCache({ fragmentMatcher })
  });
  //--------------------------------------------------------

  ngOnInit(): void {
    // query prismic using possibilities wrote in the schema file (fragmentTypes.json)
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
            __typename
            ... on PageBodyDiscountcountdown{
              fields{
                discountico
                discountdate
              }
            }
          }   
        }
      }
      `
    }).then((response: any) => {  
      //console.log(response)    
      // if the url page don't match with the url from prismic page document, then error 404 not found
      if(response.data.page.url === this.url === false){
        this.notFound = true      
        return;
      }
      // map of the response and adding every slice required in the prismic data temp array     
      response.data.page.body.map((elem:any, index: number ) => (        
        elem.__typename === 'PageBodyCardsGroupSmall' ? this.cardsGroupSmall = elem.fields : console.log(),
        elem.__typename === 'PageBodyCardsGroupMedium' ? this.cardsGroupMedium = elem.fields : console.log(),        
        elem.__typename === 'PageBodyDiscountcountdown' ? this.countdown = elem.fields : console.log()        
      ));
      // then, adding data in prismic data array
      this.prismicData = {
        'cardsGroupSmall' : this.cardsGroupSmall,
        'cardsGroupMedium' : this.cardsGroupMedium,
        'countdown': this.countdown
      }
      console.log(this.prismicData.countdown[0].discountdate); 
    // if error =>        
    }).catch((error: any) => {
      console.error(error);
    });
   //--------------------------------------------------------------------------------


  }

  
}
