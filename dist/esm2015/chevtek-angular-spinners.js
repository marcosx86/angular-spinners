import { Injectable, Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SpinnerService {
    constructor() {
        this.spinnerCache = new Set();
    }
    /**
     * @param {?} spinner
     * @return {?}
     */
    _register(spinner) {
        this.spinnerCache.add(spinner);
    }
    /**
     * @param {?} spinnerToRemove
     * @return {?}
     */
    _unregister(spinnerToRemove) {
        this.spinnerCache.forEach(spinner => {
            if (spinner === spinnerToRemove) {
                this.spinnerCache.delete(spinner);
            }
        });
    }
    /**
     * @param {?} spinnerGroup
     * @return {?}
     */
    _unregisterGroup(spinnerGroup) {
        this.spinnerCache.forEach(spinner => {
            if (spinner.group === spinnerGroup) {
                this.spinnerCache.delete(spinner);
            }
        });
    }
    /**
     * @return {?}
     */
    _unregisterAll() {
        this.spinnerCache.clear();
    }
    /**
     * @param {?} spinnerName
     * @return {?}
     */
    show(spinnerName) {
        this.spinnerCache.forEach(spinner => {
            if (spinner.name === spinnerName) {
                spinner.show = true;
            }
        });
    }
    /**
     * @param {?} spinnerName
     * @return {?}
     */
    hide(spinnerName) {
        this.spinnerCache.forEach(spinner => {
            if (spinner.name === spinnerName) {
                spinner.show = false;
            }
        });
    }
    /**
     * @param {?} spinnerGroup
     * @return {?}
     */
    showGroup(spinnerGroup) {
        this.spinnerCache.forEach(spinner => {
            if (spinner.group === spinnerGroup) {
                spinner.show = true;
            }
        });
    }
    /**
     * @param {?} spinnerGroup
     * @return {?}
     */
    hideGroup(spinnerGroup) {
        this.spinnerCache.forEach(spinner => {
            if (spinner.group === spinnerGroup) {
                spinner.show = false;
            }
        });
    }
    /**
     * @return {?}
     */
    showAll() {
        this.spinnerCache.forEach(spinner => spinner.show = true);
    }
    /**
     * @return {?}
     */
    hideAll() {
        this.spinnerCache.forEach(spinner => spinner.show = false);
    }
    /**
     * @param {?} spinnerName
     * @return {?}
     */
    isShowing(spinnerName) {
        let /** @type {?} */ showing = undefined;
        this.spinnerCache.forEach(spinner => {
            if (spinner.name === spinnerName) {
                showing = spinner.show;
            }
        });
        return showing;
    }
}
SpinnerService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SpinnerComponent {
    /**
     * @param {?} spinnerService
     */
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
        this.isShowing = false;
        this.showChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get show() {
        return this.isShowing;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set show(val) {
        this.isShowing = val;
        this.showChange.emit(this.isShowing);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.name)
            throw new Error("Spinner must have a 'name' attribute.");
        this.spinnerService._register(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.spinnerService._unregister(this);
    }
}
SpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'spinner',
                template: `
    <div *ngIf="show">
      <img *ngIf="loadingImage" [src]="loadingImage" />
      <ng-content></ng-content>
    </div>
  `
            },] },
];
/** @nocollapse */
SpinnerComponent.ctorParameters = () => [
    { type: SpinnerService, },
];
SpinnerComponent.propDecorators = {
    "name": [{ type: Input },],
    "group": [{ type: Input },],
    "loadingImage": [{ type: Input },],
    "show": [{ type: Input },],
    "showChange": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SpinnerModule {
}
SpinnerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SpinnerComponent],
                imports: [CommonModule],
                exports: [SpinnerComponent],
                providers: [SpinnerService]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the angular-spinners package.
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { SpinnerComponent, SpinnerService, SpinnerModule };
//# sourceMappingURL=chevtek-angular-spinners.js.map
