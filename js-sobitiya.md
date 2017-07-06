## JavaScript Events

JS Events позволяет отслеживать пользовательские события на страницах сайта RezOn.

С помощью событий можно, например, передавать данные достижения целей в Google Analytics.

Подключиться к событию можно используя JQuery метод On:

```javascript
$(document).on('RezOn.RefreshCurrency', function(e, object) {
    console.log(object);
});
```

| Название события | Описание события |
| :--- | :--- |
| RezOn.Engine.LogIn | Отправка формы входа в личный кабинет |
| RezOn.Engine.Registered | Отправка формы регистрации пользователя |
| RezOn.Engine.GaUserIdIdentified | Установлен уникальный User Id для Google Analytics |
| RezOn.Avia.SearchFormSended | После успешной отправки формы поиска авиабилетов |
| RezOn.Avia.BookingSuccess | Успешное создание авиа-бронирования |
| RezOn.Avia.BookingFail | Возникла ошибка при создании авиа-бронирования |
| RezOn.Avia.PaymentSuccess | Успешная оплата авиа-бронирования |
| RezOn.Avia.PaymentFail | Возникла ошибка при оплате авиа-бронирования |
| RezOn.RefreshCurrencies | Перед вызовом функции перерисовки валют |
| RezOn.RefreshCurrency | После перерисовки элемента валюты |
| RezOn.Trains.BeforeSearch | Перед отправкой ЖД формы поиска |
| RezOn.Trains.AfterSearch | После отправки ЖД формы поиска |
| RezOn.Trains.AddedPassenger | После добавления нового пассажира в форму |
| RezOn.Trains.OrderLoaded | После подгрузки содержимого корзины |



Пример JavaScript кода для передачи данных достижения целей в GA:

```javascript
$(document).on('RezOn.Avia.SearchFormSended', function(e, object) {
	console && console.log && console.log('avia search triggered')
	ga('send', 'event', 'avia', 'search', 'event', 1);
});
$(document).on('RezOn.Avia.BookingSuccess', function(e, object) {
	console && console.log && console.log('avia booked triggered')
	ga('send', 'event', 'avia', 'booked', 'event', 1);
	
	var segmentsCount = parseInt($("[data-js='booked-segments-count']").val() || "0");
	for(var i = 0; i < segmentsCount; i++){
		ga('send', 'event', 'avia', 'bookedsegment', 'event', 1);
	}
});
$(document).on('RezOn.Avia.PaymentSuccess', function(e, object) {
	console && console.log && console.log('avia payed triggered')
	ga('send', 'event', 'avia', 'payed', 'event', 1)
});
```

JavaScript код можно добавить используя шаблон "Исполняемый JavaScript код" в разделе "Шаблоны" BackOffice.

