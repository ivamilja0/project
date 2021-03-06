/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { NoviTestModule } from '../../../test.module';
import { DeliveryOrderItemDeleteDialogComponent } from 'app/entities/delivery-order-item/delivery-order-item-delete-dialog.component';
import { DeliveryOrderItemService } from 'app/entities/delivery-order-item/delivery-order-item.service';

describe('Component Tests', () => {
    describe('DeliveryOrderItem Management Delete Component', () => {
        let comp: DeliveryOrderItemDeleteDialogComponent;
        let fixture: ComponentFixture<DeliveryOrderItemDeleteDialogComponent>;
        let service: DeliveryOrderItemService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [NoviTestModule],
                declarations: [DeliveryOrderItemDeleteDialogComponent]
            })
                .overrideTemplate(DeliveryOrderItemDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(DeliveryOrderItemDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DeliveryOrderItemService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it(
                'Should call delete service on confirmDelete',
                inject(
                    [],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });
});
