import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TimeUntilMainComponent } from "./time-until/time-until-main/time-until-main.component";

const routes: Routes = [{ path: "", component: TimeUntilMainComponent }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
