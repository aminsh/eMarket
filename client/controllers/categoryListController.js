define(['app',
    'directives/grid',
    'directives/modal',
    'service/rest/categoryService'], function (app) {
    app.register.controller('categoryListController', function ($scope, $location, categoryService) {
        $scope.title = 'گروه بندی';

        $scope.columns = [
            {name: 'title', title: 'عنوان'}
        ];

        $scope.commands = [
            {
                title: 'حذف',
                action: function (current) {
                    categoryService.remove(current._id)
                        .then(function (result) {
                            if (result.success)
                                $scope.gridOption.refresh();
                        })
                        .catch(function (error) {
                            console.error(error);
                        });

                },
                imageClass: "k-icon k-i-close"
            },
            {
                title: 'ویرایش',
                action: function (current) {
                    $scope.modalOptions.title = 'ویرایش گروه بندی';
                    isNew = false;
                    $scope.category = current;
                    $scope.modalOptions.show();

                    $scope.$apply();
                },
                imageClass: "k-icon k-i-pencil"
            }
        ];

        $scope.gridOption = {};

        $scope.modalOptions = {title: ''};

        $scope.new = function(){
            isNew = true;
            $scope.modalOptions.title = 'گروه بندی جدید';
            $scope.category = {title: ''};
            $scope.modalOptions.show();
        }

        var isNew = false;
        $scope.category = {};

        $scope.save = function () {
            if (isNew) {
                categoryService.post($scope.category)
                    .then(function (result) {
                        if (result.success){
                            $scope.modalOptions.hide();
                            $scope.gridOption.refresh();
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });;
            }
            else {
                categoryService.put($scope.category._id, $scope.category)
                    .then(function (result) {
                        if (result.success){
                            $scope.modalOptions.hide();
                            $scope.gridOption.refresh();
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            }
        };


    });
});
