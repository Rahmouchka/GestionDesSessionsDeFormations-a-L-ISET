import { Injectable } from '@angular/core';
import { Session } from '../model/session';
import { Subject } from 'rxjs';
import { Formation } from '../model/formation';
import { Formateur } from '../model/formateur';
import { Candidat } from '../model/candidat';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private sessions = [
    new Session(
      1,
      new Date('2021-06-01T08:00:00'),
      new Date('2021-06-01T17:00:00'),
      'Formation sur les bases du développement web',
      new Formation(
        2,
        'Angular Avancé',
        'Perfectionnement sur Angular et RxJS',
        30,
        'programme2.pdf',
        'avancé',
        ['Angular', 'RxJS'],
        ['Informatique', 'Développement']
      ),
      [
        new Formateur(
          3,
          'Yassine',
          'Gharbi',
          'yassine@gmail.com',
          '95553333',
          '741258369',
          'photo3.jpg',
          'CV3.pdf',
          ['Python', 'Django']
        ),
      ],
      [
        new Candidat(
          1,
          'Ali',
          'Ben Hassen',
          'ali@gmail.com',
          '123456789',
          'photo1.jpg',
          'Ali123'
        ),
        new Candidat(
          2,
          'Leila',
          'Khadhra',
          'leila@gmail.com',
          '987654321',
          'photo2.jpg',
          'Leila123'
        ),
        new Candidat(
          3,
          'Omar',
          'Jaziri',
          'omar@gmail.com',
          '456123789',
          'photo3.jpg',
          'Omar123'
        ),
      ]
    ),
    new Session(
      2,
      new Date('2021-06-02T08:00:00'),
      new Date('2021-06-02T17:00:00'),
      'Perfectionnement sur Angular et RxJS',
      new Formation(
        1,
        'Développement Web',
        'Formation sur les bases du développement web',
        40,
        'programme1.pdf',
        'débutant',
        ['HTML', 'CSS', 'JavaScript'],
        ['Informatique']
      ),
      [
        new Formateur(
          1,
          'Ahmed',
          'Haddad',
          'ahmed@gmail.com',
          '95555555',
          '123987456',
          'photo1.jpg',
          'CV1.pdf',
          ['JavaScript', 'Angular']
        ),
        new Formateur(
          2,
          'Nadia',
          'Salah',
          'nadia@gmail.com',
          '93333333',
          '321654987',
          'photo2.jpg',
          'CV2.pdf',
          ['HTML', 'CSS']
        ),
      ],
      [
        new Candidat(
          3,
          'Omar',
          'Jaziri',
          'omar@gmail.com',
          '456123789',
          'photo3.jpg',
          'Omar123'
        ),
      ]
    ),
    new Session(
      3,
      new Date('2021-06-03T08:00:00'),
      new Date('2021-06-03T17:00:00'),
      'Apprendre les bases de Python pour la data science',
      new Formation(
        3,
        'Introduction à Python',
        'Apprendre les bases de Python pour la data science',
        35,
        'programme3.pdf',
        'intermédiaire',
        ['Python', 'Data Science'],
        ['Informatique']
      ),
      [
        new Formateur(
          2,
          'Nadia',
          'Salah',
          'nadia@gmail.com',
          '93333333',
          '321654987',
          'photo2.jpg',
          'CV2.pdf',
          ['HTML', 'CSS']
        ),
      ],
      []
    ),
  ];

  sessionsEdited = new Subject<Session[]>();

  constructor() {}
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
*/
  editSession(session: Session) {
    this.sessions= this.sessions.map(s => s.id === session.id ? session : s);
    
  }
  deleteSession(id: number) {
    this.sessions = this.sessions.filter(s => s.id !== id);
    this.sessionsEdited.next([...this.sessions]);
  }
    
  getSessionsByFormationId(formationId: number): Session[] {
    return this.sessions.filter((s) => s.formation.id === formationId);
  }
}
