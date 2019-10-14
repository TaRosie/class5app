import React from 'react';
import './App.css';

let post = [
  {
    date:"Oct. 2, 2019",
    header:"See you next year NYU Shanghai Hot Pot",
    content: 'The hot pot season has passed and we have to say goodbye to NYU Shanghai hot pot. Students are already designing logos for the next September.',
    image: 'https://bit.ly/2OKzJGZ',
    byline: "By Rosie R",

},
   {
    date:"Sep. 17, 2019",
    header:"The No.1,000 customer gets a free lucky hot pot",
    content: '"This is the best day of life." Says Joe, the lucky customer of the year. He has won himself a free NYU Shanghai hot pot, which costs 1,000 dollars.',
    image: 'https://bit.ly/32dt9MV',
    byline: "By Rosie G",
},
{
  date:"Sep. 1, 2019",
  header:"NYU Shanghai hot pot: New hot window",
  content: 'NYU Shanghai B1 cafeteria has released their new menu, in which the new hot pot window draws wide attention of the public. According to the chef, the new NYU Shanghai hot pot comes in 8 random flavors. ',
  image: 'https://bit.ly/2OK3HuI',
  byline: "By Rosie B",
},
]

function Article(props){
  return (
  <div className="article">
      <div className="article-date">
        <p>{props.date}</p>
      </div>
      <div className="article-contents">
        <div className="article-header">
        <h1> {props.header} </h1>
        </div>
        <div className= "article-content">
        <h3>  {props.content}</h3>
        </div>
        <div className="article-byline">
        <h5>{props.byline}</h5>
        </div>
      </div>
      <div className="article-image">
        <img src={props.image}></img>
      </div>
    </div>
  );
}


function App(){

  const articles = post.map((article)=> {
    return (
      <Article date={article.date} header={article.header} content={article.content} image={article.image} byline={article.byline} />
    )
  })

  return(
  <div>
    <div className="container">
      {articles}
    </div>
  </div>
  );
}





export default App;
