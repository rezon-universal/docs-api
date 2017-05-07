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



