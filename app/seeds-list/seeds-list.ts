import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Seed } from '../shared/seeds';
import { AgroService } from '../shared/agro.service';

@Component({
    selector: 'seeds-list',
    templateUrl: './app/seeds-list/seeds-list.html',
    styleUrls: ['./app/seeds-list/seeds-list.css']
})
export class ProductTypeList implements OnInit {
    seeds: Seed[];
    selectedSeed: Seed;

    constructor(
        private agroService: AgroService,
        private router: Router) {
    }

    getSeeds(): void {
        this.agroService.getSeeds().then(seeds => this.seeds = seeds);
    }
    ngOnInit(): void {
        this.getSeeds();
    }

    onSelect(seed: Seed): void {
        this.selectedSeed = seed;
    }

    gotoDetail(seed: Seed): void {
        let link = ['/seed-detail/'+ seed.id];
        console.log("LINK"+link.toString());
        this.router.navigate(link);
    }

}