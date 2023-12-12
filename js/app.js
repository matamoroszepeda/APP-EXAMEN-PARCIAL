// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
		{
		path: '/fast food/',
    	url: 'fast food.html',
    	name: 'fast food',
  		},
		
		{
		path: '/info-producto/',
    	url: 'info-producto.html',
    	name: 'info-producto',
  		},
		
	],
	dialog: {
		title: 'Feel the Burn!',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a la APP !');
    }
	
});



$$(document).on('click', '#btnAddCart', function (e) {
	e.preventDefault();

		
	app.dialog.confirm('¿Seguro que deseas añadir este artículo?', function () {
		
		//app.dialog.alert('Great!');
		
		app.popup.open('.popup-confirm');
		
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Su orden se ha recibido, pronto se procesará.",
		  closeTimeout: 3000,
		});
		notification.open();
		
	});
	
	
	
});





