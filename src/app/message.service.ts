import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {

  messages: string[] = [];
  
  add(message: string) {
    this.messages.push(message);
  }

  count(_messagesNumber: Number): void {
    this.messages.length
  }
  
  clear() {
    this.messages = [];
  }
}
