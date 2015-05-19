define(['app'],function(app){
    app.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('fa', {
            'SAVE': 'ذخیره',
            'NEW': 'جدید',
            'REMOVE': 'حذف',
            'SHOW': 'نمایش',
            'NEW PRODUCT': 'محصول جدید',
            'TITLE': 'عنوان',
            'PRICE': 'قیمت',
            'CONFIRM': 'تایید',
            'CANCEL': 'انصراف',
            'SELECT IMAGE': 'انتخاب عکس',
            'NAME': 'نام',
            'FIRSTNAME': 'نام',
            'LASTNAME': 'نام خانوادگی',
            'USERNAME': 'نام کاربری',
            'DES': 'توضیحات',
            'DATE': 'تاریخ',
            'AD TITLE': 'عنوان آگهی',
            'CATEGORY': 'گروه بندی',
            'PHONE': 'تلفن',
            'EMAIL': 'پست الکترونیکی',

            'NAME IS REQUIRED': 'نام اجباری است',
            'FIRSTNAME IS REQUIRED': 'نام اجباری است',
            'LASTNAME IS REQUIRED': 'نام خانوادگی اجباری است',
            'USERNAME IS REQUIRED': 'نام کاربری اجباری است',
            'TITLE IS REQUIRED': 'عنوان اجباری است',
            'DATE IS REQUIRED': 'تاریخ اجباری است',
            'CATEGORY IS REQUIRED': 'گروه بندی اجباری است',
            'QTY IS REQUIRED': 'مقدار اجباری است',
            'PRICE IS REQUIRED': 'قیمت اجباری است',

            'CLOSE': 'بستن',

        });

        $translateProvider.translations('de', {
            'SAVE': 'Hallo',
            'NEW': 'Dies ist ein Paragraph'
        });

        $translateProvider.preferredLanguage('fa');
    }]);
});