import { TestBed } from '@angular/core/testing';

import { Connection} from './product.service';

describe('ConnectionService', () => {
  let service: Connection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Connection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
