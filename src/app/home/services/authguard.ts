import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, createUrlTreeFromSnapshot } from "@angular/router";
import { map } from "rxjs";
import { UsersServicesService } from "../componets/users/users-services.service";

export const authGuard = (next: ActivatedRouteSnapshot) => {
    return inject(UsersServicesService)
      .isUserAuthenticated$
      .pipe(
        map((isAuthenticated) =>
          isAuthenticated ? true : createUrlTreeFromSnapshot(next, ['/', 'home', 'login'])
        )
      );
  };