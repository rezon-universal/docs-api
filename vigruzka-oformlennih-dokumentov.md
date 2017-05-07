{% method %}

| **Метод** |
| --- |
| /reports/raildocs |

Пример запроса:

[https://domain.galileo.com.ua/api/reports/raildocs?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json&amp;dateFrom=2015-01-01T00:00:00&amp;dateTo=2015-06-01T00:00:00](https://domain.galileo.com.ua/api/reports/raildocs?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json&amp;dateFrom=2015-01-01T00:00:00&amp;dateTo=2015-06-01T00:00:00)

| **Параметры запроса** | **Описание** |
| --- | --- |
| dateFrom | Период "с" YYYY-MM-DDTHH:MM:SS, например 2015-03-29T21:12:00 |
| dateTo | Период "по" YYYY-MM-DDTHH:MM:SS, например 2015-03-29T21:12:00 |

| **Параметры ответа** | **Описание** |
| --- | --- |
| ReportRailDoc | Массив оформленных документов |

#### Структура ReportRailDoc

| **Параметр** | **Описание** |
| --- | --- |
| ted\_id | Внутренний ID документа |
| uid | Уникальный идентификатор документа |
| ordernumber | Номер заказа RezOn |
| uz\_ordernumber | Номер заказа УЗ |
| sysdate | Время оформления |
| electronic | Если True - ЕПД, иначе ППД |
| type | Тип документа |
| kind | Вид документа |
| train | Информация о поезде \(RailTrain\) |
| wagon | Информация о вагоне \(RailWagon\) |
| pax | Информация о пассажире \(RailPax\) |
| price | Информация о цене \(RailPrice\) |
| site\_user | Пользователь сайта, оформивший заказ |
| counterparty | Контрагент, к которому относится пользователь, оформивший заказ |
| payer | "Плательщик" заказа |

Тип документа может быть:

* reserve - резервирование
* travel - проездной
* transportation - перевозочный

Вид документа может принимать следующие значения:

* full - полный
* child - детский
* privilege - льготный

#### Структура RailTrain

| **Параметр** | **Описание** |
| --- | --- |
| departure | Дата и время отправления |
| arrival | Дата и время прибытия |
| station\_from | Код станции отправления |
| station\_from\_ru | Название станции отправления |
| station\_to | Код станции прибытия |
| station\_to\_ru | Название станции прибытия |
| number | Номер поезда |
| model | Модель поезда: 1 – Hyundai, 2 – Skoda, 3-ЕКр1, 4-КВБЗ, 0- остальные. |

#### Структура RailWagon

| **Параметр** | **Описание** |
| --- | --- |
| number | Номер вагона |
| type | Тип вагона:«Л» Люкс«М», М'який, «К» Купе, «П» Плацкарт, «С» Сидячий, «О» Загальний |
| class | Класс вагона \(если есть\) |

#### Структура RailPax

| **Параметр** | **Описание** |
| --- | --- |
| place | Номер места пассажира |
| firstname | Имя пассажира |
| lastname | Фамилия пассажира |
| privelege\_serial | Серия документа \(если есть\) |
| privelege\_number | Номер документа \(если есть\) |

#### Структура RailPrice

| **Параметр** | **Описание** |
| --- | --- |
| ticketTotalPrice | Цена билета |
| apiFee | Сбор поставщика |
| agencyFee | Сбор агентства |
| excessFee | Дополнительный сбор |
| paymentFee | Сбор за метод оплаты |
| finalPrice | Итоговая цена |
| currency | Валюта |
| detailed | Детальная информация о структуре цены билета \(RailPriceDetailed\) |

#### Структура RailPriceDetailed

| **Параметр** | **Описание** |
| --- | --- |
| carrier | Цена перевозчика \(с ПДВ\) |
| ticket | Цена билета \(без ПДВ\) |
| reserved\_seat | Цена плацкарты \(без ПДВ\) |
| service | Сбор за услуги \(без ПДВ\) |
| vat | ПДВ со стоимости |
| insurance | Страховой сбор |
| commission | Сбор перевозчика \(УЗ\) \(без ПДВ\) |
| fee | Сбор ГІОЦ \(без ПДВ\) |
| fee\_vat | ПДВ за сбор ГІОЦ |



{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <StatusCode>200</StatusCode>
   <Status>OK</Status>
   <Data xsi:type="ArrayOfReportRailDoc">
      <ReportRailDoc>
         <ted_id>20302</ted_id>
         <uid>000B3A72-D79C1865-0001</uid>
         <ordernumber>R12217</ordernumber>
         <uz_ordernumber>5ЖЯ-Е1-4730387-1709</uz_ordernumber>
         <sysdate>2015-09-17T15:43:21</sysdate>
         <electronic>true</electronic>
         <type>travel</type>
         <kind>full</kind>
         <train>
            <departure>2015-10-16T03:42:00</departure>
            <arrival>2015-10-16T09:23:00</arrival>
            <station_from>2204450</station_from>
            <station_from_ru>Сумы</station_from_ru>
            <station_to>2200007</station_to>
            <station_to_ru>Дарница</station_to_ru>
            <number>532Д</number>
            <model>0</model>
         </train>
         <wagon>
            <number>12</number>
            <type>П</type>
            <class>Д</class>
         </wagon>
         <pax>
            <place>003</place>
            <firstname>ИВАН</firstname>
            <lastname>ИВАНЧЕНКО</lastname>
         </pax>
         <price>
            <ticketTotalPrice>97.79</ticketTotalPrice>
            <apiFee>8.00</apiFee>
            <agencyFee>3.00</agencyFee>
            <excessFee>0</excessFee>
            <paymentFee>0.00</paymentFee>
            <finalPrice>108.79</finalPrice>
            <currency>UAH</currency>
            <detailed>
               <carrier>88.79</carrier>
               <ticket>28.17</ticket>
               <reserved_seat>16.99</reserved_seat>
               <service>22.50</service>
               <vat>16.28</vat>
               <insurance>0.10</insurance>
               <commission>6.25</commission>
               <fee>7.50</fee>
               <fee_vat>1.50</fee_vat>
            </detailed>
         </price>
         <site_user>
            <id>48</id>
            <guid>5086b1a3-cc68-45c3-b28a-4cfa9111ffb8</guid>
            <name>Olga</name>
            <email>olga@ms.com.ua</email>
            <phone>+38 0505003602</phone>
         </site_user>
         <counterparty>
            <id>1</id>
            <name>Content Management Solutions</name>
         </counterparty>
      </ReportRailDoc>
   </Data>
</Response>
```

{% sample lang="json" %}

```json
{
   "Data": [
      {
         "counterparty": {
            "id": 1,
            "name": "Content Management Solutions"
         },
         "electronic": true,
         "kind": "full",
         "ordernumber": "R12217",
         "pax": {
            "firstname": "ИВАН",
            "lastname": "ИВАНЧЕНКО",
            "place": "003",
            "privelege_number": null,
            "privelege_serial": null
         },
         "payer": null,
         "price": {
            "agencyFee": 3,
            "apiFee": 8,
            "currency": "UAH",
            "detailed": {
               "carrier": 88.79,
               "commission": 6.25,
               "fee": 7.5,
               "fee_vat": 1.5,
               "insurance": 0.1,
               "reserved_seat": 16.99,
               "service": 22.5,
               "ticket": 28.17,
               "vat": 16.28
            },
            "excessFee": 0,
            "finalPrice": 108.79,
            "paymentFee": 0,
            "ticketTotalPrice": 97.79
         },
         "site_user": {
            "email": "olga@ms.com.ua",
            "guid": "5086b1a3-cc68-45c3-b28a-4cfa9111ffb8",
            "id": 48,
            "name": "Olga",
            "phone": "+38 0505003602"
         },
         "sysdate": "/Date(1442493801000+0300)/",
         "ted_id": 20302,
         "train": {
            "arrival": "/Date(1444976580000+0300)/",
            "departure": "/Date(1444956120000+0300)/",
            "model": 0,
            "number": "532Д",
            "station_from": 2204450,
            "station_from_ru": "Сумы",
            "station_to": 2200007,
            "station_to_ru": "Дарница"
         },
         "type": "travel",
         "uid": "000B3A72-D79C1865-0001",
         "uz_ordernumber": "5ЖЯ-Е1-4730387-1709",
         "wagon": {
            "class": "Д",
            "number": "12",
            "type": "П"
         }
      }
   ],
   "Error": null,
   "Status": "OK",
   "StatusCode": 200
}
```
{% common %}

{% endmethod %}