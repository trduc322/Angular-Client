import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { faEnvelope, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member
  faUser = faUser
  faHeart = faHeart
  faEmail = faEnvelope
  constructor() { }

  ngOnInit(): void {
  }

}
