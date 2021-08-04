(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Code\invoice-app\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BFMb":
/*!****************************************!*\
  !*** ./src/app/bill/bill.component.ts ***!
  \****************************************/
/*! exports provided: BillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillComponent", function() { return BillComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2pdf.js */ "1n7x");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bill.service */ "gelg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function BillComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.price * item_r2.unit);
} }
function BillComponent_a_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Paymentlink");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r1.paymentlink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class BillComponent {
    constructor(billser, http) {
        this.billser = billser;
        this.http = http;
        this.invoicedata = {
            name: "test",
            date: "1-1-21",
            items: [{
                    item: "test",
                    price: 9,
                    unit: 1
                }, {
                    item: "test",
                    price: 9,
                    unit: 1
                }]
        };
        this.paymentlink = "https://www.instamojo.com/@Kraddydzn/ef5fc637431143ecbaf06095e2d3a50c";
        this.total = 0;
        this.element = document.getElementById("main-bill");
    }
    ngOnInit() {
        console.log(this.invoicedata);
        console.log(this.billser.invoice_data);
        this.invoicedata = this.billser.invoice_data;
        for (let a of this.invoicedata.items) {
            this.total += a.price * a.unit;
            console.log(this.total);
        }
        let payload = {
            amount: this.total,
            purpose: "GFX"
        };
        let tdata = new FormData();
        tdata.append("grant_type", "client_credentials");
        tdata.append("client_id", "cnE27xVq4OAwx7vdt15WXmmHz5SUBh7bnHlP2r0M");
        tdata.append("client_secret", "RBpWQ9mKiLDyU37NkSaH4beGFTd2LoWU9T3bIb04vaw7BXtLMHI5YVl6IeumUi86ac8QyEr0hTbbI1i1YxBgnUe8IhU2HIALklfiVhPgHYTQBXQjZpjx0yuTJ7KXzfTk");
        this.http.post("https://api.instamojo.com/oauth2/token/", tdata).subscribe(res => {
            console.log(res);
            this.http.post("https://api.instamojo.com/v2/payment_requests/", payload, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    'Authorization': 'Bearer ' + res.access_token
                })
            }).subscribe(result => {
                console.log(result);
                this.invoiceno = result['id'].slice(0, 4);
                this.paymentlink = result['longurl'];
                this.qrcode = `https://www.upiqrcode.com/upi-qr-code-api/v01/?apikey=jogasy&seckey=kraddy&vpa=kraddy@paytm&amount=${this.total}`;
            });
        });
    }
    print() {
        let opt = {
            margin: 1,
            filename: 'myfile.pdf',
            html2canvas: { width: 595, height: 842 },
            image: { type: 'png', quality: 0.98 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', putOnlyUsedFonts: true },
        };
        html2pdf_js__WEBPACK_IMPORTED_MODULE_1__(document.getElementById("main-bill"), opt);
        console.log(document.getElementById('main-bill'));
    }
}
BillComponent.ɵfac = function BillComponent_Factory(t) { return new (t || BillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bill_service__WEBPACK_IMPORTED_MODULE_3__["billservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BillComponent, selectors: [["app-bill"]], decls: 108, vars: 8, consts: [[1, "main-container"], ["id", "main-bill", 1, "main-bill"], [1, "container"], [1, "header"], [1, "cmpny"], ["src", "../../assets/Kraddy logo black 1.png", "alt", ""], [1, "detail"], [1, "name"], [1, "location"], [1, "inv"], [1, "inv-container"], [1, "inv-detail"], [1, "inv-head"], [1, "inv-sub"], [1, "price-container"], [1, "bill-row"], [1, "bill-head"], ["class", "bill-row t", 4, "ngFor", "ngForOf"], [1, "mid-bottom"], [1, "pay-scan"], [1, "prp"], [1, "qrimg"], ["alt", "upiscan", 3, "src"], [1, "sub"], [1, "tnc-container"], [1, "total"], [1, "subtotal"], [1, "txt"], [1, "money"], [1, "tax"], [1, "divide"], [1, "sum"], [1, "txt", "te"], [1, "money", "te"], [1, "tnc"], [1, "detail-p"], [1, "divide1"], [1, "trust"], [1, "pay-logo"], [1, "logo-img"], ["src", "../../assets/Visa_Inc._logo 1.png", "alt", "visa"], ["src", "../../assets/1200px-RuPay 1.png", "alt", "rupay"], ["src", "../../assets/paytm-226448 1.png", "alt", "paytm"], ["src", "../../assets/1200px-UPI-Logo-vector 1.png", "alt", "upi"], ["src", "../../assets/Google_Pay_Logo_(2020) 1.png", "alt", "gpay"], [1, "paypal"], [1, "paypal-img"], ["src", "../../assets/paypal-784404_1280 1.png", "alt", "paypal"], [1, "h-div"], [1, "payment-link"], ["target", "blank", 3, "href", 4, "ngIf"], [1, "sign"], ["src", "../../assets/Sign autho 1.png", "alt", "signature"], [1, "footer"], [1, "print-btn", 3, "click"], [1, "bill-row", "t"], [1, "sr"], [1, "item"], [1, "rate"], [1, "qty"], [1, "price"], ["target", "blank", 3, "href"]], template: function BillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "KRADDY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "MUMBAI, MAHARASHTRA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "INDIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " INVOICE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "INVOICE TO:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "INVOICE NO:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "INVOICE DATE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "NO.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Item Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "QTY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, BillComponent_div_44_Template, 11, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Payment method");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "SCAN TO PAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "TAX");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\u20B90");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " If order is finalise and all payment is settle. Order will CLOSED and any changes for the same order, charges will be applied. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "*Supported payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Convinent fee applied on payment via paypal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](95, BillComponent_a_95_Template, 2, 1, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "For KRADDY,");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "AUTHORIZED SIGNATORY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "\u00A9 2021 SAHIL. ALL RIGHT RESERVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillComponent_Template_button_click_106_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "PRINT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.invoicedata.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("KRDY", ctx.invoiceno, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.invoicedata.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.invoicedata.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.qrcode, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.paymentlink);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".main-container[_ngcontent-%COMP%]{\r\n    height:100vh;\r\n    width:100%;\r\n    display:flex;\r\n    background-color: #F9F9F9;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.qrimg[_ngcontent-%COMP%]{\r\n    width: 124px;\r\n    height: 124px;\r\n    display: flex;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    align-items: center;\r\n    margin-bottom:4px ;\r\n}\r\n\r\n.qrimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width:6.5vw;\r\n    object-position: center;\r\n    transform: scale(1.26);\r\n}\r\n\r\n.main-bill[_ngcontent-%COMP%]{\r\n  width:595px;\r\n  height:842px;\r\n  overflow:hidden;\r\n  background-color: white;\r\n  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.034)); \r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    padding: 0px 24px;\r\n    padding-top: 40px;\r\n}\r\n\r\n.cmpny[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    gap:8px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    justify-content:space-between;\r\n}\r\n\r\n.inv[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 34px;\r\n}\r\n\r\n.name[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n}\r\n\r\n.location[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n}\r\n\r\n.inv-head[_ngcontent-%COMP%]{\r\n    color:#8000FF;\r\n}\r\n\r\n.inv-detail[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-top: 40px;\r\n    justify-content: flex-end;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    gap: 40px;\r\n}\r\n\r\n.inv-container[_ngcontent-%COMP%]::after{\r\n    display: flex;\r\n    justify-content: center;\r\n    content:'';\r\n    margin-top: 20px;\r\n    padding: 0 4px;\r\n    width: 100%;\r\n    height: 1px;\r\n    background-color:rgb(231, 231, 231)\r\n}\r\n\r\n.bill-row[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: 15% 35% 20% 15% 15%;\r\n    margin-top: 20px;\r\n    justify-items: center;\r\n    color:#8000FF;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n}\r\n\r\n.t[_ngcontent-%COMP%]{\r\n    color:black;\r\n    margin-top: 10px;\r\n}\r\n\r\n.price-container[_ngcontent-%COMP%]{\r\n    height: 250px;  \r\n}\r\n\r\n.mid-bottom[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.subtotal[_ngcontent-%COMP%], .tax[_ngcontent-%COMP%], .sum[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: 70% 30%;\r\n}\r\n\r\n.detail-p[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    font-size: 11px;\r\n}\r\n\r\n.tnc-container[_ngcontent-%COMP%]{display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;}\r\n\r\n.total[_ngcontent-%COMP%]{\r\ndisplay: flex;\r\n    flex-direction: column;\r\n    width: 62%;\r\n    gap:4px\r\n}\r\n\r\n.tnc[_ngcontent-%COMP%]{\r\nwidth: 78%;\r\nmargin-top: 60px;\r\n}\r\n\r\n.pay-scan[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    width: 40%;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.tnc[_ngcontent-%COMP%]   .prp[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content:flex-end;\r\n}\r\n\r\n.prp[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    color:#8000FF; \r\n    margin-bottom:8px;\r\n}\r\n\r\n.sub[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n}\r\n\r\n.divide[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    content:'';\r\n    width: 100%;\r\n    height:1px;\r\n    margin-top:4px;\r\n    margin-bottom: 4px;\r\n    background-color:#8000FF\r\n}\r\n\r\n.txt[_ngcontent-%COMP%], .money[_ngcontent-%COMP%]{\r\n    color:rgb(77, 77, 77);\r\n    font-weight: 600;\r\n}\r\n\r\n.te[_ngcontent-%COMP%]{\r\n    color:black\r\n}\r\n\r\n.money[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.divide1[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    content:'';\r\n    margin-top: 20px;\r\n    padding: 0 4px;\r\n    width: 100%;\r\n    height: 1px;\r\n    background-color:rgb(231, 231, 231)\r\n}\r\n\r\n.trust[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content:space-between\r\n}\r\n\r\n.pay-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 10px;\r\n    color:rgb(58, 58, 58)\r\n}\r\n\r\n.h-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    content:'';\r\n    width: 1px;\r\n    margin-top:4px;\r\n    height: 10px;\r\n    background-color:rgb(107, 107, 107)\r\n}\r\n\r\n.logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: 8px;\r\n}\r\n\r\n.paypal[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    gap: 4px;\r\n}\r\n\r\n.paypal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.payment-link[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    margin-top: 6px;\r\n}\r\n\r\n.sign[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-direction: column;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    margin-top: 10px;\r\n    align-items: center;\r\n}\r\n\r\n.sign[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width:100%;\r\n    margin-top:26px;\r\n    color: white;\r\n    font-size: 10px;\r\n    padding:8px;\r\n    justify-content:center;\r\n    background-color:#8000FF\r\n}\r\n\r\n.print-btn[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    position: absolute;\r\n    bottom: 4%;\r\n    right:4%;\r\n    background: rgb(0, 153, 255);\r\n    border: none;\r\n    padding: 8px 16px;\r\n    color:white;\r\n    font-size:19px;\r\n    border-radius: 0.3vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIscURBQXFEO0FBQ3ZEOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixPQUFPO0FBQ1g7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFJQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQSxlQUFlLGFBQWE7SUFDeEIsc0JBQXNCO0lBQ3RCLHFCQUFxQixDQUFDOztBQUUxQjtBQUNBLGFBQWE7SUFDVCxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsY0FBYztJQUNkLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJiaWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnFyaW1ne1xyXG4gICAgd2lkdGg6IDEyNHB4O1xyXG4gICAgaGVpZ2h0OiAxMjRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo0cHggO1xyXG59XHJcblxyXG4ucXJpbWcgaW1ne1xyXG4gICAgd2lkdGg6Ni41dnc7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNik7XHJcbn1cclxuXHJcbi5tYWluLWJpbGx7XHJcbiAgd2lkdGg6NTk1cHg7XHJcbiAgaGVpZ2h0Ojg0MnB4O1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpKTsgXHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwcHggMjRweDtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uY21wbnksLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6OHB4O1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5pbnZ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG59XHJcblxyXG4ubmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmxvY2F0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5pbnYtaGVhZHtcclxuICAgIGNvbG9yOiM4MDAwRkY7XHJcbn1cclxuLmludi1kZXRhaWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZ2FwOiA0MHB4O1xyXG59XHJcblxyXG4uaW52LWNvbnRhaW5lcjo6YWZ0ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb250ZW50OicnO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIzMSwgMjMxLCAyMzEpXHJcbn1cclxuXHJcbi5iaWxsLXJvd3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSAzNSUgMjAlIDE1JSAxNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IzgwMDBGRjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnR7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wcmljZS1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDI1MHB4OyAgXHJcbn1cclxuXHJcbi5taWQtYm90dG9te1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuXHJcblxyXG4uc3VidG90YWwsLnRheCwuc3Vte1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcclxufVxyXG5cclxuLmRldGFpbC1we1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLnRuYy1jb250YWluZXJ7ZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7fVxyXG5cclxuLnRvdGFse1xyXG5kaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA2MiU7XHJcbiAgICBnYXA6NHB4XHJcbn1cclxuXHJcbi50bmN7XHJcbndpZHRoOiA3OCU7XHJcbm1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5wYXktc2NhbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50bmMgLnBycHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5wcnB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IzgwMDBGRjsgXHJcbiAgICBtYXJnaW4tYm90dG9tOjhweDtcclxufVxyXG5cclxuLnN1YntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5kaXZpZGV7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBjb250ZW50OicnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MXB4O1xyXG4gICAgbWFyZ2luLXRvcDo0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4MDAwRkZcclxufVxyXG5cclxuLnR4dCwubW9uZXl7XHJcbiAgICBjb2xvcjpyZ2IoNzcsIDc3LCA3Nyk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udGV7XHJcbiAgICBjb2xvcjpibGFja1xyXG59XHJcblxyXG4ubW9uZXkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcblxyXG4uZGl2aWRlMXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMCA0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjMxLCAyMzEsIDIzMSlcclxufVxyXG5cclxuLnRydXN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuXHJcbn1cclxuXHJcbi5wYXktbG9nbyBwe1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6cmdiKDU4LCA1OCwgNTgpXHJcbn1cclxuXHJcbi5oLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgbWFyZ2luLXRvcDo0cHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMDcsIDEwNywgMTA3KVxyXG59XHJcblxyXG4ubG9nby1pbWcgaW1ne1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5wYXlwYWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA0cHg7XHJcbn1cclxuLnBheXBhbCBwe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5wYXltZW50LWxpbmt7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5zaWdue1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNpZ24gcCwuZm9vdGVyIHB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOjI2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nOjhweDtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4MDAwRkZcclxufVxyXG5cclxuLnByaW50LWJ0bntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDQlO1xyXG4gICAgcmlnaHQ6NCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTUzLCAyNTUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZToxOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zdnc7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'invoice-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _fill_detail_fill_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fill-detail/fill-detail.component */ "gj6c");
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill/bill.component */ "BFMb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["Approuting"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _fill_detail_fill_detail_component__WEBPACK_IMPORTED_MODULE_2__["FillDetailComponent"],
        _bill_bill_component__WEBPACK_IMPORTED_MODULE_3__["BillComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["Approuting"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();


/***/ }),

/***/ "gelg":
/*!*********************************!*\
  !*** ./src/app/bill.service.ts ***!
  \*********************************/
/*! exports provided: billservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "billservice", function() { return billservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class billservice {
    bill(data) {
        this.invoice_data = data;
    }
}
billservice.ɵfac = function billservice_Factory(t) { return new (t || billservice)(); };
billservice.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: billservice, factory: billservice.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gj6c":
/*!******************************************************!*\
  !*** ./src/app/fill-detail/fill-detail.component.ts ***!
  \******************************************************/
/*! exports provided: FillDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillDetailComponent", function() { return FillDetailComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bill.service */ "gelg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function FillDetailComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FillDetailComponent_div_9_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.remove(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r2);
} }
class FillDetailComponent {
    constructor(router, billser) {
        this.router = router;
        this.billser = billser;
        this.data = [
            'sahil',
            'jett', 'aalam'
        ];
    }
    ngOnInit() {
        this.Billform = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            items: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([])
        });
    }
    nav() {
        this.billser.bill('hello');
        this.router.navigate(['bill']);
    }
    additem() {
        let ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            item: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](1),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null)
        });
        let form = this.Billform.get('items');
        form.push(ctrl);
    }
    remove(i) {
        let form = this.Billform.get('items');
        form.removeAt(i);
    }
    submit() {
        this.billser.bill(this.Billform.value);
        this.router.navigate(['bill']);
    }
    reset() {
        this.Billform.reset();
    }
}
FillDetailComponent.ɵfac = function FillDetailComponent_Factory(t) { return new (t || FillDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bill_service__WEBPACK_IMPORTED_MODULE_3__["billservice"])); };
FillDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FillDetailComponent, selectors: [["app-fill-detail"]], decls: 17, vars: 2, consts: [[1, "container"], [1, "form"], [3, "formGroup", "ngSubmit"], [1, "group"], ["type", "text", "name", "name", "placeholder", "Enter customer name", "formControlName", "name", 1, "control"], ["type", "date", "name", "date", "formControlName", "date", 1, "control"], ["formArrayName", "items"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "add", 3, "click"], ["type", "submit", 1, "submit"], ["type", "button", 1, "submit", "reset", 3, "click"], [1, "group", 3, "formGroupName"], ["type", "text", "name", "item", "placeholder", "Enter Item", "formControlName", "item", 1, "control"], ["type", "number", "name", "unit", "placeholder", "Enter unit", "formControlName", "unit", 1, "control"], ["type", "number", "name", "price", "placeholder", "Enter price", "formControlName", "price", 1, "control"], [1, "rem", 3, "click"]], template: function FillDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Kraddy bill generator!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function FillDetailComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FillDetailComponent_div_9_Template, 7, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FillDetailComponent_Template_button_click_10_listener() { return ctx.additem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Add item +");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FillDetailComponent_Template_button_click_15_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.Billform);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Billform.get("items")["controls"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"]], styles: [".control[_ngcontent-%COMP%]{\r\n    background: none;\r\n    border:none;\r\n    border-bottom: 1px solid rgb(0, 89, 255);\r\n    padding: 0.5vw;\r\n    font-size: 20px;\r\n    width:100%;\r\n    font-family:'DM Sans', sans-serif;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100vh;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content:center;\r\n    text-transform: uppercase;\r\n    font-size: 40px;\r\n    font-family: 'Libre Barcode 39 Extended Text', cursive;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    background:rgb(0, 119, 255);\r\n    border:none;\r\n    cursor: pointer;\r\n    padding:0.50vw;\r\n    color:white;\r\n    font-size: 16px;\r\n    font-family:'DM Sans', sans-serif;\r\n    margin: 2% 0%;\r\n    border-radius: 4.5px;\r\n}\r\n\r\n.add[_ngcontent-%COMP%]{\r\n    background:grey;\r\n    width: 100%;\r\n}\r\n\r\n.group[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    gap:1vw\r\n}\r\n\r\n.rem[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n    border-radius: 2vw;\r\n    padding: 0.5vw 0.78vw;\r\n    font-weight: 900;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n    padding: 0.4vw 1vw;\r\n}\r\n\r\n.reset[_ngcontent-%COMP%]{\r\n    border: 1px solid rgb(190, 190, 190);\r\n    background:rgb(233, 233, 233);\r\n    color:rgb(66, 66, 66);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGwtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHdDQUF3QztJQUN4QyxjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7SUFDVixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQU1BO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCIiwiZmlsZSI6ImZpbGwtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCwgODksIDI1NSk7XHJcbiAgICBwYWRkaW5nOiAwLjV2dztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmb250LWZhbWlseTonRE0gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLmZvcm0gcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFyY29kZSAzOSBFeHRlbmRlZCBUZXh0JywgY3Vyc2l2ZTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDpyZ2IoMCwgMTE5LCAyNTUpO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOjAuNTB2dztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6J0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAyJSAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQuNXB4O1xyXG59XHJcblxyXG4uYWRke1xyXG4gICAgYmFja2dyb3VuZDpncmV5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ncm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6MXZ3XHJcbn1cclxuXHJcbi5yZW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAydnc7XHJcbiAgICBwYWRkaW5nOiAwLjV2dyAwLjc4dnc7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4uc3VibWl0e1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZzogMC40dncgMXZ3O1xyXG59XHJcblxyXG4ucmVzZXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzMsIDIzMywgMjMzKTtcclxuICAgIGNvbG9yOnJnYig2NiwgNjYsIDY2KTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: Approuting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approuting", function() { return Approuting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bill/bill.component */ "BFMb");
/* harmony import */ var _fill_detail_fill_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fill-detail/fill-detail.component */ "gj6c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const approute = [
    { path: '', component: _fill_detail_fill_detail_component__WEBPACK_IMPORTED_MODULE_2__["FillDetailComponent"] },
    { path: 'bill', component: _bill_bill_component__WEBPACK_IMPORTED_MODULE_1__["BillComponent"] }
];
class Approuting {
}
Approuting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Approuting });
Approuting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function Approuting_Factory(t) { return new (t || Approuting)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(approute)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Approuting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map