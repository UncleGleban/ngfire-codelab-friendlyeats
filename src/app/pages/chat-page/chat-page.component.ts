import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
  standalone: true,
  imports: [AsyncPipe, FormsModule],
})
export class ChatPageComponent implements OnInit {
  chatService = inject(ChatService);
  messages$ = this.chatService.loadMessages() as Observable<DocumentData[]>;
  user$ = this.chatService.user$;
  text = '';

  ngOnInit(): void {
    // Add debugging HERE
    this.messages$.subscribe({
      next: (msgs) => console.log('Messages:', msgs),
      error: (err) => console.error('Firestore error:', err),
    });
  }

  sendTextMessage() {
    console.log(`CPC.sendTextMessage(${this.text})`);
    this.chatService.saveTextMessage(this.text);
    this.text = '';
  }

  uploadImage(event: any) {
    const imgFile: File = event.target.files[0];
    if (!imgFile) {
      return;
    }
    this.chatService.saveImageMessage(imgFile);
  }
}
