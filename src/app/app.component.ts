import { Component } from '@angular/core';
import {MessagesService} from './services/messages.service';
import {ThreadsService} from './services/threads.service';
import {UserService} from './services/user.service';
import {ChatExampleData} from './ChatExampleData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private messagesService: MessagesService,
              private threadsService: ThreadsService,
              private userService: UserService) {
    ChatExampleData.init(messagesService, threadsService, userService);
  }
}
