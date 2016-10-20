import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChatPage } from '../pages/chat/chat';
import { FeedbackPage } from '../pages/feedback/feedback';
import { HomePage } from '../pages/home/home';
import { WebSocketService } from '../service/websocket-service';

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    FeedbackPage,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    FeedbackPage,
    HomePage
  ],
  providers: [
  ]
})
export class AppModule {}
