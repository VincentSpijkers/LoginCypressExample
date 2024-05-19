import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrService} from "ngx-toastr";

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ToastrService, useValue: {} }
      ]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    // @ts-ignore
    expect(service).toBeTruthy();
  });

  it('should return string when called', () => {
    let expected = "Some error"
    let actual = service.testErrorMessage("test_message");

    // @ts-ignore
    expect(actual).toBe(expected);
  });
});
