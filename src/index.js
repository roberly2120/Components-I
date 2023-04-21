import './index.less'
import newsData from './components/article/article.js';
import menuItems from './components/menu/menu.js';


function articleMaker ({title, date, firstParagraph, secondParagraph, thirdParagraph}) {

const articleDiv = document.createElement('div');
const articleTitle = document.createElement('h2');
const dateElement = document.createElement('p');
const paragraphOne = document.createElement('p');
const paragraphTwo = document.createElement('p');
const paragraphThree = document.createElement('p');
const expandButton = document.createElement('span');

articleDiv.className = "article";
articleTitle.textContent = title;
dateElement.className = 'date';
dateElement.textContent = date;
expandButton.textContent = '+';
expandButton.className = 'expandButton';
paragraphOne.textContent = firstParagraph;
paragraphTwo.textContent = secondParagraph;
paragraphThree.textContent = thirdParagraph;

articleDiv.appendChild(articleTitle);
articleDiv.appendChild(dateElement);
articleDiv.appendChild(paragraphOne);
articleDiv.appendChild(paragraphTwo);
articleDiv.appendChild(paragraphThree);
articleDiv.appendChild(expandButton);

expandButton.addEventListener('click', () => {
    articleDiv.classList.toggle('article-open');
})

return articleDiv;





}
const articles = document.querySelector('.articles');
const articleElements = newsData.map(articleItem =>{
    return articleMaker(articleItem);
});
articleElements.forEach(newsItem => {
    articles.appendChild(newsItem);
})


