import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { SessionService } from '../../services/session.service';
import { Formation } from '../../model/formation';
import { Session } from '../../model/session';
import { Candidat } from '../../model/candidat';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  formation: Formation | undefined;
  sessions: Session[] = [];
  selectedSession: Session | undefined;
  candidat = new Candidat(0, '', '', '', '', '', '');

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.getFormationDetails();
    this.getSessionDetails();
  }

  getFormationDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.formation = this.formationService.getFormationById(id);
  }

  getSessionDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sessions = this.sessionService.getSessionsByFormationId(id);
  }

  openInscriptionModal(session: Session): void {
    this.selectedSession = session;
    // Open the modal (you can use a library like Bootstrap or Angular Material)
  }
  downloadProgramme(programme: string): void {
    // Download the programme file
  }
  inscrire(): void {
    if (this.selectedSession && this.selectedSession.candidats.length < 15) {
      this.selectedSession.candidats.push(this.candidat);
      // Close the modal and reset the form
      this.candidat = new Candidat(0, '', '', '', '', '', '');
    }
  }
}
