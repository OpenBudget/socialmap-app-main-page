import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hakol-kore',
  templateUrl: './hakol-kore.component.html',
  styleUrls: ['./hakol-kore.component.less']
})
export class HakolKoreComponent implements OnInit {

  searchBarConfig = [
    {
      'name': 'הזדמנויות',
      'id': 'opportunities',
      'description': 'הזדמנויות במגזר השלישי? כאן תמצאו קולות קוראים, מכרזים, מבחני תמיכה ועוד!',
      'types': ['tenders', 'calls_for_bids', 'support_criteria'],
      'placeholder': 'הקלידו מילות חיפוש כמו תחום פעילות, נושא או מונח רלוונטי'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onNavigate(url: string) {
    window.location.href = url;
  }

}
