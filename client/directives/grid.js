define(['app', 'kendo'], function (app) {
    app.register.directive('grid', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                option: '=',
                readUrl: '@',
                pageSize: '=',
                columns: '=',
                commands: '=',
                commandTemplate: '='
            },
            link: function (scope, element, attrs) {
                var cols = scope.columns
                    .toEnumerable().select(function (col) {
                    return {
                        field: col.name,
                        title: col.title,
                        width: col.width,
                        format: col.format,
                        template: col.template
                    }
                });

                var commands = scope.commands.
                    toEnumerable().select(function (cmd) {
                    return {
                        text: cmd.title,
                        imageClass: cmd.imageClass,
                        click: function (e) {
                            var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
                            cmd.action(dataItem);
                            e.preventDefault();
                        }
                    };
                });

                if (scope.commandTemplate)
                    cols.push({template: kendo.template($(scope.commandTemplate.template).html())});

                cols.push({command: commands});

                var grid = $(element).kendoGrid({
                    dataSource: {
                        transport: {
                            read: {
                                url: attrs.readurl,
                                dataType: "json",
                                contentType: 'application/json; charset=utf-8',
                                type: 'GET'
                            },
                            parameterMap: function (options) {
                                return kendo.stringify(options);
                            }
                        },
                        schema: {
                            data: "Data",
                            total: "Total",
                            model: {
                                fields: {
                                    price: {type: "number"},
                                    title: {type: "string"}
                                }
                            }
                        },
                        pageSize: scope.pageSize || 20,
                        serverPaging: true,
                        serverFiltering: true,
                        serverSorting: true
                    },
                    filterable: true,
                    pageable: true,
                    sortable: true,
                    columns: cols
                }).data("kendoGrid");

                if (scope.commandTemplate)
                    scope.commandTemplate.commands.forEach(function (cmd) {
                        $(element).on("click", cmd.selector, function (e) {
                            var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
                            cmd.action(dataItem);
                        });
                    });

                if (!isNullOrEmpty(scope.option))
                    scope.option.refresh = function () {
                        grid.dataSource.read();
                    };
            }
        };
    });
});

