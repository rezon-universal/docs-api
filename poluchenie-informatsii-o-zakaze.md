| **Метод** |
| --- |
| /railway/order\_details |

Пример запроса:

https://domain.galileo.com.ua/api/railway/order\_details?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json&amp;hash=9dc57ce91751a336f316cc58d844bedf

| **Параметры запроса** | **Описание** |
| --- | --- |
| hash | Уникальных хеш заказа |
| _id_ | _ID заказа [альтернатива параметру hash]_ |

| **Параметры ответа** | **Описание** |
| --- | --- |
| id | ID заказа |
| hash | Хеш заказа |
| url | Ссылка на страницу заказа |
| status | Статус заказа |
| pay\_status | Статус оплаты заказа |
| source | Источник данных |
| price | Цена |
| price\_currency | Валюта цены |
| obsolete\_at | Ожидание оплаты до указанного времени |
| obsolete\_in\_min | Оставшееся время ожидание оплаты (в минутах) |
| tickets\_download\_urls | Массив ссылок на скачивание билетов |
