import { Component, HostBinding } from '@angular/core';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-awards-brief',
  templateUrl: './awards-brief.component.html',
  styleUrls: ['./awards-brief.component.css']
})
export class AwardsBriefComponent {
  language: string = 'en';

  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
    });
  }

  changeLanguage(newLanguage: string) {
    this.languageService.setLanguage(newLanguage);
  }
  goToGmail(): void {
    const toEmailAddress = 'awards@ghayaeg.com';
    const subject = '';
    const body = '';

    // Construct mailto URL with subject and body
    const mailtoUrl = `mailto:${toEmailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mailto URL
    window.location.href = mailtoUrl;
  }
}
