{% method %}

| **Метод** |
| --- |
| /reports/aviabookings |

Пример запроса:

[https://domain.galileo.com.ua/api/reports/aviabookings?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json&amp;dateFrom=2015-01-01T00:00:00&amp;dateTo=2015-06-01T00:00:00](https://domain.galileo.com.ua/api/reports/aviabookings?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json&amp;dateFrom=2015-01-01T00:00:00&amp;dateTo=2015-06-01T00:00:00)

| **Параметры запроса** | **Описание** |
| --- | --- |
| dateFrom | Период "с" YYYY-MM-DDTHH:MM:SS, например 2015-03-29T21:12:00 |
| dateTo | Период "по" YYYY-MM-DDTHH:MM:SS, например 2015-03-29T21:12:00 |

**Максимальный период выгрузки ограничен 1 месяцем!**


{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <StatusCode>200</StatusCode>
   <Status>OK</Status>
   <Data xsi:type="ArrayOfBooking">
      <Booking>
         <order_nmb>A15429</order_nmb>
         <comp_id>12</comp_id>
         <comp_name>Demo</comp_name>
         <created>2016-01-22T12:08:06.6961924</created>
         <recloc>CZ8TPY</recloc>
         <pcc>7J8J</pcc>
         <buyer_name>ALLA</buyer_name>
         <buyer_surname>IGNATENKO</buyer_surname>
         <buyer_phone>380970000583</buyer_phone>
         <ga_user_id>176013697</ga_user_id>
         <custom_data>
            <item>
               <key>marker</key>
               <value>596f131be831c</value>
            </item>
            <item>
               <key>tduid</key>
               <value>ABAD43925</value>
            </item>
         </custom_data>
         <status>CANCELED</status>
         <route_type>OW</route_type>
         <plating_carrier>TK</plating_carrier>
         <plating_carrier_lang>Турецкие авиалинии [TK]</plating_carrier_lang>
         <segments>
            <segment>
               <start_airport>ODS</start_airport>
               <start_airport_lang>Одесса</start_airport_lang>
               <start_city>ODS</start_city>
               <start_city_lang>Одесса</start_city_lang>
               <start_country>UA</start_country>
               <start_country_lang>Украина</start_country_lang>
               <end_airport>IST</end_airport>
               <end_airport_lang>Ататюрк</end_airport_lang>
               <end_city>IST</end_city>
               <end_city_lang>Стамбул</end_city_lang>
               <end_country>TR</end_country>
               <end_country_lang>Турция</end_country_lang>
               <marketing_carrier>TK</marketing_carrier>
               <marketing_carrier_lang>Турецкие авиалинии [TK]</marketing_carrier_lang>
               <marketing_fltnmb>466</marketing_fltnmb>
               <operating_carrier>TK</operating_carrier>
               <operating_carrier_lang>Турецкие авиалинии [TK]</operating_carrier_lang>
               <departure>2016-09-23T10:25:00</departure>
               <arrival>2016-09-23T11:55:00</arrival>
               <booking_class>L</booking_class>
               <cabin_class>E</cabin_class>
               <status>HK</status>
               <equip>737</equip>
               <equip_lang>Боинг 737</equip_lang>
            </segment>
         </segments>
         <passengers_count>1</passengers_count>
         <active_segments_count>1</active_segments_count>
         <local_fare_total>3980.00</local_fare_total>
         <service_fee>10.00</service_fee>
         <mainagency_service_fee>0.00</mainagency_service_fee>
         <discount>0.00</discount>
         <total>3990.00</total>
         <currency>UAH</currency>
         <refer>momondo</refer>
      </Booking>
   </Data>
</Response>
```

{% sample lang="json" %}

```json
{
   "Data": [
      {
         "active_segments_count": 1,
         "buyer_name": "ALLA",
         "buyer_phone": "380970000583",
         "buyer_surname": "IGNATENKO",
         "ga_user_id": 176013697,
         "comp_id": 12,
         "comp_name": "Demo",
         "created": "/Date(1453457286696+0200)/",
         "currency": "UAH",
         "custom_data": [
            {
               "key": "marker",
               "value": "596f131be831c"
            },
            {
               "key": "tduid",
               "value": "ABAD43925"
            }
         ],
         "discount": 0,
         "local_fare_total": 3980,
         "mainagency_service_fee": 0,
         "order_nmb": "A15429",
         "passengers_count": 1,
         "pcc": "7J8J",
         "plating_carrier": "TK",
         "plating_carrier_lang": "Турецкие авиалинии [TK]",
         "recloc": "CZ8TPY",
         "refer" : "momondo",
         "route_type": "OW",
         "segments": [
            {
               "arrival": "/Date(1474620900000+0300)/",
               "booking_class": "L",
               "cabin_class": "E",
               "departure": "/Date(1474615500000+0300)/",
               "end_airport": "IST",
               "end_airport_lang": "Ататюрк",
               "end_city": "IST",
               "end_city_lang": "Стамбул",
               "end_country": "TR",
               "end_country_lang": "Турция",
               "equip": "737",
               "equip_lang": "Боинг 737",
               "marketing_carrier": "TK",
               "marketing_carrier_lang": "Турецкие авиалинии [TK]",
               "marketing_fltnmb": "466",
               "operating_carrier": "TK",
               "operating_carrier_lang": "Турецкие авиалинии [TK]",
               "start_airport": "ODS",
               "start_airport_lang": "Одесса",
               "start_city": "ODS",
               "start_city_lang": "Одесса",
               "start_country": "UA",
               "start_country_lang": "Украина",
               "status": "HK"
            }
         ],
         "service_fee": 10,
         "status": "CANCELED",
         "total": 3990
      }
   ],
   "Error": null,
   "Status": "OK",
   "StatusCode": 200
}
```
{% common %}

{% endmethod %}


#### Структура Booking

| **Параметр** | **Описание** |
| --- | --- |
| order\_nmb | Номер заказа |
| comp\_id | Номер агентства |
| comp\_name | Название агентства |
| created | Дата и время создания |
| recloc | Локатор бронирования |
| pcc | PCC |
| buyer\_name | Имя покупателя |
| buyer\_surname | Фамилия покупателя |
| buyer\_phone | Телефон покупателя |
| ga_user_id | Google Analytics User Id |
| custom_data | Дополнительные данные, хранимые с заказом |
| status | Статус бронирования: _ACTIVE, CANCELED, ISSUED, PENDING, REJECTED, VOID, ERROR_ |
| route\_type | Тип маршрутa: _OW, RT, MULTY_ |
| plating\_carrier | Код валидирующей авиакомпании |
| plating\_carrier\_lang | Валидирующая авиакомпания |
| segments | Массив сегментов |
| passengers\_count | Количество пассажиров |
| active\_segments\_count | Количество активных сегментов |
| local\_fare\_total | Расчет тарифа |
| service\_fee | Сервисный сбор |
| mainagency\_service\_fee | Сервисный сбор главного агентства |
| discount | Скидка |
| total | Общая стоимость |
| currency | Валюта |
| refer | Источник бронирования





#### Структура segment

| **Параметр** | **Описание** |
| --- | --- |
| start\_airport | IATA код аэропорта вылета |
| start\_airport\_lang | Аэропорт вылета |
| start\_city | IATA код города вылета |
| start\_city\_lang | Город вылета |
| start\_country | IATA код страны вылета |
| start\_country\_lang | Страна вылета |
| end\_airport | IATA код аэропорта прибытия |
| end\_airport\_lang | Аэропорт прибытия |
| end\_city | IATA код города прибытия |
| end\_city\_lang | Город прибытия |
| end\_country | IATA код страны прибытия |
| end\_country\_lang | Страна прибытия |
| marketing\_carrier | IATA код маркетинговой авиакомпании |
| marketing\_carrier\_lang | Маркетинговая авиакомпания |
| marketing\_fltnmb | Номер рейса марк. а.к. |
| operating\_carrier | IATA код оперирующей авиакомпании |
| operating\_carrier\_lang | Оперирующая авиакомпания |
| departure | Дата вылета |
| arrival | Дата прибытия |
| booking\_class | Класс бронирования |
| cabin\_class | Класс кабины |
| status | Статус сегмента \(Galileo\) |
| equip | IATA код типа воздушного судна |
| equip\_lang | Тип воздушного судна |




