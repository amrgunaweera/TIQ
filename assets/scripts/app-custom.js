/// angular calls  ///

const app = angular.module("appMain", []);

app.controller("patientCtrl", function($scope, $http) {

    $http.get("json/patients.json").then(function(response) {
        $scope.records = response.data.records;
    });

});

app.controller("appointmentCtrl", function($scope, $http) {

    $http.get("json/appointments.json").then(function(response) {
        $scope.appRecords = response.data.records;
    });

});

app.controller("therapistCtrl", function($scope, $http) {

    $http.get("json/physiotherapists.json").then(function(response) {
        $scope.thRecords = response.data.records;
    });

});

/// Bootstrap Tooltips ///

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});


///  Remarks Carousel  ///

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: false
});


///  Custom scroller  ///

(function($){
    /*$(window).on("load",function(){
        $(".content").mCustomScrollbar();
    });*/
})(jQuery);
