import { Injectable } from '@angular/core';
import { Session } from '../model/session';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessions = [/*
    new Session(1,new Date('2025-02-01'), new Date('2025-02-15'), 'Session de développement web avec HTML et CSS',),
    new Session(2,new Date('2025-03-01'), new Date('2025-03-30'), 'Introduction à la Data Science avec Python',),
    new Session(3,new Date('2025-04-01'), new Date('2025-04-15'), 'Formation avancée en cybersécurité avec cryptographie',)
    */
  ];
  
  sessionsEdited = new Subject<Session[]>;

  constructor() { }
  getSessions(): Session[] {
    return [...this.sessions];
  }
/*
  addSession(formationId: number, formateursIds: number[], candidatsIds: string[], dateDebut: Date, dateFin: Date, description: string) {
    const newSession = new Session(
      this.sessions[this.sessions.length - 1].id + 1,
      formationId,
      formateursIds,
      candidatsIds,
      dateDebut,
      dateFin,
      description
    );
    this.sessions = [...this.sessions, newSession];
  }

  editSession(session: Session) {
    this.sessions= this.sessions.map(s => s.id === session.id ? session : s);
    
  }
  deleteSession(id: number) {
    this.sessions = this.sessions.filter(s => s.id !== id);
    this.sessionsEdited.next([...this.sessions]);
  }
    */
}
