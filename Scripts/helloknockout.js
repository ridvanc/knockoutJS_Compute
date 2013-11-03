/// <reference path="jquery-2.0.3.js" />
/// <reference path="knockout-3.0.0.js" />
var mainViewModel = function () {
    var self = this;
    self.firstText = ko.observable("Hello Knockout");
}
$(document).ready(function () {
    ko.applyBindings(mainViewModel);
});