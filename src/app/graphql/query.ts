let gql = require("graphql-tag");

const query = (url:string, lang:string) =>{

    url = url.replace("/", "");
    
    const _query = gql`
    query{
      page(uid:"${url}",lang:"${lang}"){
        url
        body{
          ... on PageBodyCarousel{
            type
            fields{
                countdown{
                    ... on Countdown{
                      ico
                      endDate
                    }
                  }
              carouselImg{
                ... on CarouselImg{
                  title
                  img
                  text
                }
              }
            }
          }
          ... on PageBodyCardsGroupSmall{
            type
            primary{
              title
            }
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
            type
            primary{
                title
              }
            fields{
              cardsGroupMedium{
                ... on CardMedium{
                  title
                  cardImg
                  cardBtnText
                  cardText
                  cardBtnLink
                  cardBackgroundColor
                  ismobile
                }
              }
            }
          }
        }
      }
    }
    `

    return _query;
}



export default query;