{% method %}

| **Метод** |
| --- |
| /railway/order\_details |

Пример запроса:

https://domain.galileo.com.ua/api/railway/order_details?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json&amp;hash=9dc57ce91751a336f316cc58d844bedf

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

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <StatusCode>200</StatusCode>
   <Status>OK</Status>
   <Data xsi:type="RailOrder">
      <id>12217</id>
      <hash>a6532846e4843cf5c4f48a9505efc2de</hash>
      <url>http://domain.galileo.com.ua/ru/RailwayTickets/Order/hash=a6532846e4843cf5c4f48a9505efc2de</url>
      <status>Cancelled</status>
      <pay_status>PayedBySMS</pay_status>
      <source>UZ</source>
      <price>108.79</price>
      <price_currency>UAH</price_currency>
      <obsolete_at xsi:nil="true" />
      <obsolete_in_min xsi:nil="true" />
      <tickets_download_urls>http://domain.galileo.com.ua/ru/RailwayTickets/DownloadTicketsFile?hash=a6532846e4843cf5c4f48a9505efc2de&amp;uio=000B3A72-D79C1865</tickets_download_urls>
      <tickets_download_urls>http://domain.galileo.com.ua/ru/RailwayTickets/DownloadTicketsFile?hash=a6532846e4843cf5c4f48a9505efc2de&amp;uio=000B3A72-26BC184E</tickets_download_urls>
      <tickets_download_urls>http://domain.galileo.com.ua/ru/RailwayTickets/DownloadTicketsFile?hash=a6532846e4843cf5c4f48a9505efc2de&amp;uio=000B3A72-5BDC1836</tickets_download_urls>
      <tickets_download_urls>http://domain.galileo.com.ua/ru/RailwayTickets/DownloadTicketsFile?hash=a6532846e4843cf5c4f48a9505efc2de&amp;uio=000B3A72-6B9C1869</tickets_download_urls>
   </Data>
</Response>
```

{% sample lang="json" %}

```json
{
   "Data": {
      "hash": "a6532846e4843cf5c4f48a9505efc2de",
      "id": 12217,
      "obsolete_at": null,
      "obsolete_in_min": null,
      "pay_status": "PayedBySMS",
      "price": 108.79,
      "price_currency": "UAH",
      "source": "UZ",
      "status": "Cancelled",
      "tickets_download_urls": [
         "http://domain.galileo.com.ua/ru/RailwayTickets/DownloadTicketsFile?hash=a6532846e4843cf5c4f48a9505efc2de&uio=000B3A72-D79C1865",
         "http://domain.galileo.com.ua/ru/RailwayTickets/DownloadTicketsFile?hash=a6532846e4843cf5c4f48a9505efc2de&uio=000B3A72-26BC184E",
         "http://domain.galileo.com.ua/ru/RailwayTickets/DownloadTicketsFile?hash=a6532846e4843cf5c4f48a9505efc2de&uio=000B3A72-5BDC1836",
         "http://domain.galileo.com.ua/ru/RailwayTickets/DownloadTicketsFile?hash=a6532846e4843cf5c4f48a9505efc2de&uio=000B3A72-6B9C1869"
      ],
      "url": "http://domain.galileo.com.ua/ru/RailwayTickets/Order/hash=a6532846e4843cf5c4f48a9505efc2de"
   },
   "Error": null,
   "Status": "OK",
   "StatusCode": 200
}
```
{% common %}

{% endmethod %}