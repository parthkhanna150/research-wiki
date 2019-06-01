import { Injectable } from '@angular/core';
import { Article } from './models/article';
import { articles } from './models/mock-articles';
import { Category } from './models/category';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Article[] = articles;

  addArticle(title: string, author: string, tag: string, content: string) {

    const article: Article = {
      id: '3',
      authors: [
        {
          id: '2uehwj',
          name: author,
          type: 'guest'
        }
      ],
      title: title,
      content: content,
      categories: [
        {
          name: tag,
        }
      ]
    };
    this.articles.push(article);
  }

  getArticles() {
    return this.articles;
  }
}
