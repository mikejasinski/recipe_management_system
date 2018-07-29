import { TestBed, inject } from '@angular/core/testing';

import { NewRecipeManagementSystemService } from './new-recipe-management-system.service';

describe('NewRecipeManagementSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewRecipeManagementSystemService]
    });
  });

  it('should be created', inject([NewRecipeManagementSystemService], (service: NewRecipeManagementSystemService) => {
    expect(service).toBeTruthy();
  }));
});
