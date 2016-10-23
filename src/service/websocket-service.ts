import {Injectable} from '@angular/core/'
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import io from 'socket.io-client';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/of';



Injectable()
export class WebSocketService {

  private socket = null;

  constructor() {
    this.socket = io('http://localhost:8080');
  }


  public login(person: any) {
    console.log(person.value);
    this.socket.emit('login', person.value);
  }

  public sendMessage(message: String) {
    this.socket.emit('sendMessage', message);
  }

  public receiveMessage(): Observable<any> {
    return Observable.create((observer: any) => {
      this.socket.on("pushMessage", (message: any) => observer.next({ action: "receiveMessage", item: message }) );
      return () => this.socket.close();
    });
  }


}
