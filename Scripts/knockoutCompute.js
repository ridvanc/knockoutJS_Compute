/// <reference path="jquery-2.0.3.js" />
/// <reference path="knockout-3.0.0.js" />
var mainViewModel = function () {
    var self = this;
    self.firstText = ko.observable("");
    self.secondText = ko.observable("");
    self.textCompute = ko.computed(function () {
        return self.firstText() + " " + self.secondText();
    });
    self.firstNumber = ko.observable(0);
    self.secondNumber = ko.observable(0);
    self.numberTotal = ko.computed(function () {
        try {
            return parseInt(self.firstNumber()) + parseInt(self.secondNumber());
        } catch (e) {
            alert("please enter correct values");
        }
    });
}
$(document).ready(function () {
    ko.applyBindings(mainViewModel);
});