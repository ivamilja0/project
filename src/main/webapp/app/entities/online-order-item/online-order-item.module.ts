import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NoviSharedModule } from 'app/shared';
import {
    OnlineOrderItemComponent,
    OnlineOrderItemDetailComponent,
    OnlineOrderItemUpdateComponent,
    OnlineOrderItemDeletePopupComponent,
    OnlineOrderItemDeleteDialogComponent,
    onlineOrderItemRoute,
    onlineOrderItemPopupRoute
} from './';

const ENTITY_STATES = [...onlineOrderItemRoute, ...onlineOrderItemPopupRoute];

@NgModule({
    imports: [NoviSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        OnlineOrderItemComponent,
        OnlineOrderItemDetailComponent,
        OnlineOrderItemUpdateComponent,
        OnlineOrderItemDeleteDialogComponent,
        OnlineOrderItemDeletePopupComponent
    ],
    entryComponents: [
        OnlineOrderItemComponent,
        OnlineOrderItemUpdateComponent,
        OnlineOrderItemDeleteDialogComponent,
        OnlineOrderItemDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NoviOnlineOrderItemModule {}
