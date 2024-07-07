import { Component } from "@angular/core";
import { TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";

describe("AppComponent", () => {

    let component: AppComponent;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [RouterTestingModule]
        }).compileComponents();
        component = TestBed.inject(AppComponent);
    }));

    it('should be created', () => {
        expect(component).toBeTruthy();
      });
    
});
