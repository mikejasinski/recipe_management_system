import { TestBed, inject } from '@angular/core/testing';

import { RecipeManagmentSystemService } from './recipe-managment-system.service';

describe('RecipeManagmentSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeManagmentSystemService]
    });
  });

  it('should be created', inject([RecipeManagmentSystemService], (service: RecipeManagmentSystemService) => {
    expect(service).toBeTruthy();
  }));
});
