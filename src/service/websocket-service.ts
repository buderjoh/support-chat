import {Injectable} from '@angular/core/'
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import io from 'socket.io-client';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/of';



Injectable()
export class WebSocketService {

  private socket = null;

  constructor() {
  }


  public login(person: any) {
    console.log(person.value);
    this.socket = io('http://localhost:8080');
    this.socket.emit('login', person.value);
  }

  public sendMessage(message: String) {
    this.socket = io('http://localhost:8080');
    this.socket.emit('sendMessage', message);
  }

  public receiveMessage(): Observable<any> {
    this.socket = io('http://localhost:8080');
    return Observable.of(this.socket.on('pushMessage'));
  }


}
