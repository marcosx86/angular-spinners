export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/bundles/angular-spinners.umd.js',
    name: 'ng.spinners',
    format: 'umd',
    globals: {
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common',
      'rxjs/Observable': 'Rx',
      'rxjs/ReplaySubject': 'Rx',
      'rxjs/add/operator/map': 'Rx.Observable.prototype',
      'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
      'rxjs/add/operator/pluck': 'Rx.Observable.prototype',
      'rxjs/add/operator/first': 'Rx.Observable.prototype',
      'rxjs/add/observable/fromEvent': 'Rx.Observable',
      'rxjs/add/observable/merge': 'Rx.Observable',
      'rxjs/add/observable/throw': 'Rx.Observable',
      'rxjs/add/observable/of': 'Rx.Observable'
    }
  },
  external: [
    '@angular/core',
    '@angular/common'
  ]
}