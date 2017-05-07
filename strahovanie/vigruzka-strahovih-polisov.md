{% method %}

| **Метод** |
| --- |
| /reports/insurances |

Пример запроса:

[https://domain.galileo.com.ua/api/reports/insurances?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json&amp;dateFrom=2015-01-01T00:00:00&amp;dateTo=2015-06-01T00:00:00](https://domain.galileo.com.ua/api/reports/insurances?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json&amp;dateFrom=2015-01-01T00:00:00&amp;dateTo=2015-06-01T00:00:00)

| **Параметры запроса** | **Описание** |
| --- | --- |
| dateFrom | Период "с" YYYY-MM-DDTHH:MM:SS,например 2015-03-29T21:12:00 |
| dateTo | Период "по" YYYY-MM-DDTHH:MM:SS,например 2015-03-29T21:12:00 |

| **Параметры ответа** | **Описание** |
| --- | --- |
| InsuranceStatisticViewModel | Массив созданных полисов |

{% method %}

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <StatusCode>200</StatusCode>
   <Status>OK</Status>
   <Data xsi:type="ArrayOfInsuranceStatisticViewModel">
      <InsuranceStatisticViewModel>
         <aiwa_id>3553</aiwa_id>
         <aiwa_doc_num>000003\28882\16-MPT\G</aiwa_doc_num>
         <order_id>15412</order_id>
         <date_from>2016-06-09T00:00:00</date_from>
         <date_to>2016-06-23T00:00:00</date_to>
         <register_date>2016-01-04T12:54:40</register_date>
         <status>Approved</status>
         <flight_delay>true</flight_delay>
         <with_baggage>false</with_baggage>
         <total_amount>780.55</total_amount>
         <vendor_name>PAVEL</vendor_name>
         <vendor_surname>POTAPOV</vendor_surname>
         <vendor_email>plaula@gmail.com</vendor_email>
         <vendor_phone>380500003513</vendor_phone>
      </InsuranceStatisticViewModel>
   </Data>
</Response>
```

{% sample lang="json" %}

```json
{
   "Data": [
      {
         "aiwa_doc_num": "000001\\28882\\16-MPT\\G",
         "aiwa_id": 3551,
         "date_from": "/Date(1465419600000+0300)/",
         "date_to": "/Date(1466629200000+0300)/",
         "flight_delay": true,
         "order_id": 15410,
         "register_date": "/Date(1451901337000+0200)/",
         "status": 2,
         "total_amount": 420.27,
         "vendor_email": "plaula@gmail.com",
         "vendor_name": "ALLA",
         "vendor_phone": "380500003513",
         "vendor_surname": "PANCHENKO",
         "with_baggage": false
      }
   ],
   "Error": null,
   "Status": "OK",
   "StatusCode": 200
}
```
{% common %}

{% endmethod %}
##### Структура InsuranceStatisticViewModel

| **Параметр** | **Описание** |
| --- | --- |
| aiwa\_id | Номер страхового документа |
| aiwa\_doc\_num | Номер страхового полиса |
| order\_id | Номер привязанного авиа-заказа |
| date\_from | Дата начала действия страхового документа |
| date\_to | Дата окончания действия страхового документа |
| register\_date | Дата регистрации |
| status | Статус документа: _Default, Approved, Removed, WithError, Payed, OnCancelRequest_ |
| flight\_delay | Компенсация задержки рейса _\[Да/Нет\]_ |
| with\_baggage | Cтрахование багажа _\[Да/Нет\]_ |
| total\_amount | Общая стоимость |
| vendor\_name | Имя страхователя |
| vendor\_surname | Фамилия страхователя |
| vendor\_email | Email страхователя |
| vendor\_phone | Телефон  страхователя |



