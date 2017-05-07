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



