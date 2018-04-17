import { Injectable, Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.spinnerCache = new Set();
    }
    SpinnerService.prototype._register = function (spinner) {
        this.spinnerCache.add(spinner);
    };
    SpinnerService.prototype._unregister = function (spinnerToRemove) {
        var _this = this;
        this.spinnerCache.forEach(function (spinner) {
            if (spinner === spinnerToRemove) {
                _this.spinnerCache.delete(spinner);
            }
        });
    };
    SpinnerService.prototype._unregisterGroup = function (spinnerGroup) {
        var _this = this;
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.group === spinnerGroup) {
                _this.spinnerCache.delete(spinner);
            }
        });
    };
    SpinnerService.prototype._unregisterAll = function () {
        this.spinnerCache.clear();
    };
    SpinnerService.prototype.show = function (spinnerName) {
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.name === spinnerName) {
                spinner.show = true;
            }
        });
    };
    SpinnerService.prototype.hide = function (spinnerName) {
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.name === spinnerName) {
                spinner.show = false;
            }
        });
    };
    SpinnerService.prototype.showGroup = function (spinnerGroup) {
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.group === spinnerGroup) {
                spinner.show = true;
            }
        });
    };
    SpinnerService.prototype.hideGroup = function (spinnerGroup) {
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.group === spinnerGroup) {
                spinner.show = false;
            }
        });
    };
    SpinnerService.prototype.showAll = function () {
        this.spinnerCache.forEach(function (spinner) { return spinner.show = true; });
    };
    SpinnerService.prototype.hideAll = function () {
        this.spinnerCache.forEach(function (spinner) { return spinner.show = false; });
    };
    SpinnerService.prototype.isShowing = function (spinnerName) {
        var showing = undefined;
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.name === spinnerName) {
                showing = spinner.show;
            }
        });
        return showing;
    };
    return SpinnerService;
}());
SpinnerService.decorators = [
    { type: Injectable },
];
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.isShowing = false;
        this.showChange = new EventEmitter();
    }
    Object.defineProperty(SpinnerComponent.prototype, "show", {
        get: function () {
            return this.isShowing;
        },
        set: function (val) {
            this.isShowing = val;
            this.showChange.emit(this.isShowing);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.ngOnInit = function () {
        if (!this.name)
            throw new Error("Spinner must have a 'name' attribute.");
        this.spinnerService._register(this);
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.spinnerService._unregister(this);
    };
    return SpinnerComponent;
}());
SpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'spinner',
                template: "\n    <div *ngIf=\"show\">\n      <img *ngIf=\"loadingImage\" [src]=\"loadingImage\" />\n      <ng-content></ng-content>\n    </div>\n  "
            },] },
];
SpinnerComponent.ctorParameters = function () { return [
    { type: SpinnerService, },
]; };
SpinnerComponent.propDecorators = {
    "name": [{ type: Input },],
    "group": [{ type: Input },],
    "loadingImage": [{ type: Input },],
    "show": [{ type: Input },],
    "showChange": [{ type: Output },],
};
var SpinnerModule = /** @class */ (function () {
    function SpinnerModule() {
    }
    return SpinnerModule;
}());
SpinnerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SpinnerComponent],
                imports: [CommonModule],
                exports: [SpinnerComponent],
                providers: [SpinnerService]
            },] },
];

export { SpinnerComponent, SpinnerService, SpinnerModule };
//# sourceMappingURL=chevtek-angular-spinners.js.map
