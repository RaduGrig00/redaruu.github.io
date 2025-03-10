import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.initializeLanguage();
  }
  title = 'sito-redaruu';
}
