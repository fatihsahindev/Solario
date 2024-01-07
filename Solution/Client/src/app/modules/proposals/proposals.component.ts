import { Component, OnInit } from '@angular/core';
import { Proposals } from 'src/app/models/proposals';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent implements OnInit {
  proposals: Proposals[] = [
    {
      id: 20220927,
      scoring: 5,
      priority: 'high',
      status: 'in progress',
      client: 'Brigitte Nielsson',
      date: '2022/09/27',
    },
    {
      id: 20220986,
      scoring: 5,
      priority: 'high',
      status: 'approved',
      client: 'Martin Supreech',
      date: '2022/09/27',
    },
    {
      id: 20221206,
      scoring: 5,
      priority: 'high',
      status: 'in progress',
      client: 'Jennifer Jenkins (Jennah)',
      date: '2022/12/06',
    },
    {
      id: 20221005,
      scoring: 4,
      priority: 'high',
      status: 'approved',
      client: 'David Schouten Msc',
      date: '2022/10/05',
    },
    {
      id: 20221003,
      scoring: 3,
      priority: 'medium',
      status: 'approved',
      client: 'Ralph Firstbammen',
      date: '2022/11/20',
    },
    {
      id: 20221023,
      scoring: 3,
      priority: 'medium',
      status: 'approved',
      client: 'Sabine Jorgnus',
      date: '2022/09/27',
    },
    {
      id: 20221017,
      scoring: 3,
      priority: 'medium',
      status: 'approved',
      client: 'Stefan Gusticken',
      date: '2022/09/27',
    },
    {
      id: 20220808,
      scoring: 2,
      priority: 'low',
      status: 'blocked',
      client: 'Lisa West',
      date: '2022/09/27',
    },
    {
      id: 20220830,
      scoring: 2,
      priority: 'low',
      status: 'blocked',
      client: 'Christina Richardson',
      date: '2022/09/27',
    },
  ];

  filteredProposals: Proposals[] = [];
  filteredCount: number = 0;
  statusTabs: string[] = [ 'all proposals', 'approved', 'in progress', 'blocked'];
  selectedStatus: string = 'all proposals';

  constructor() {
    this.filteredProposals = this.proposals;
    this.filteredCount = this.proposals.length;
  }

  ngOnInit(): void {}

  icon(value: string) {
    switch (value) {
      // priority
      case 'high':
        return 'stat_2';
      case 'medium':
        return 'stat_1';
      case 'low':
        return 'stat_minus_1';
      // status
      case 'approved':
        return 'check_circle';
      case 'in progress':
        return 'autorenew';
      case 'blocked':
        return 'warning';
      default:
        return '';
    }
  }

  filterByStatus(status: string) {
    this.selectedStatus = status;

    if (status === 'all proposals') {
      this.filteredProposals = this.proposals;
    } else {
      this.filteredProposals = this.proposals.filter(
        (proposal) => proposal.status === status
      );
    }
  }

  getCount(status: string): number {
    if (status === 'all proposals') {
      return this.proposals.length;
    } else {
      return this.proposals.filter((proposal) => proposal.status === status).length;
    }
  }
}
