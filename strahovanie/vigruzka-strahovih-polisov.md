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

##### 

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



