import {TestBed} from '@angular/core/testing';
import {RouterModule} from '@angular/router';

describe('AppRoutingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule]
    });
  });

  it('should have an imports', () => {
    const routerModule = TestBed.get(RouterModule);
    expect(routerModule).toBeDefined();
  });
});
