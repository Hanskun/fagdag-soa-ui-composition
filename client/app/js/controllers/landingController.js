angular.module('uicomp').controller('LandingController', function(bookIds){
    var vm = this;
    vm.title = 'Bokliste';
    console.log('Test');
    console.log(bookIds);
    vm.bookIds = bookIds;
});