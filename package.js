Package.describe({
    summary: "bootstrap3-slider-touch packaged for meteor."
});

Package.on_use(function (api) {
	api.use('bootstrap-3', 'client');
	api.use('jquery', 'client');
    api.add_files([
    	'modernizr.js',
        'lib/js/bootstrap-slider.js',
        'lib/css/slider.css'
    ], 'client'
    );
});
