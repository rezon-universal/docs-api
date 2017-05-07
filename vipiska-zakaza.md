{% method %}

| **Метод** |
| --- |
| /railway/order\_issue |

Пример запроса:

[https://domain.galileo.com.ua/api/railway/order\_issue?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json&amp;hash=9dc57ce91751a336f316cc58d844bedf&amp;email=client@mail.com&amp;signature=7b4b71efdd48ab803233609e97891ab84bb20a804845b78576891affb7151740](https://domain.galileo.com.ua/api/railway/order_issue?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json&amp;hash=9dc57ce91751a336f316cc58d844bedf&amp;email=client@mail.com&amp;signature=7b4b71efdd48ab803233609e97891ab84bb20a804845b78576891affb7151740)

| **Параметры запроса** | **Описание** |
| --- | --- |
| hash | Уникальных хеш заказа |
| _id_ | _ID заказа \[альтернатива параметру hash\]_ |
| email | Почта покупателя |
| phone | Телефон покупателя |
| _name_ | _Имя покупателя_ |
| _surname_ | _Фамилия покупателя_ |
| _refer_ | _Домен рефералла_ |
| signature | Подпись сообщения |

Подпись сообщения формируется следующим образом:

`signature = SHA256(order_hash + "|" + email + "|" + salt)`

Соль задается и высылается **администратором** RezOn.

Пример формирования подписи:

Source: b67bc16afd5881ff103eec7dd897ef45\|dima@test.ru\|MYSALT  
Signature: ddbcc1c2541b8e865d877ef65027047d4f420147d111372d8cc5fd141e983a3c



| **Параметры ответа** | **Описание** |
| --- | --- |
| order | Информация о заказе |
| issue\_result | Результат выписки |



**Пример выписки заказа:**

[https://domain.galileo.com.ua/api/railway/order\_issue?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;hash=b67bc16afd5881ff103eec7dd897ef45&amp;email=dima@test.ru&amp;signature=ddbcc1c2541b8e865d877ef65027047d4f420147d111372d8cc5fd141e983a3c](https://domain.galileo.com.ua/api/railway/order_issue?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;hash=b67bc16afd5881ff103eec7dd897ef45&amp;email=dima@test.ru&amp;signature=ddbcc1c2541b8e865d877ef65027047d4f420147d111372d8cc5fd141e983a3c)



{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<StatusCode>200</StatusCode>
	<Status>OK</Status>
	<Data xsi:type="RailIssueResponse">
		<order>
			<id>1011</id>
			<hash>b67bc16afd5881ff103eec7dd897ef45</hash>                   <url>https://domain.galileo.com.ua/ru/RailwayTickets/Order/hash=b67bc16afd5881ff103eec7dd897ef45</url>
			<status>Issued</status>
			<pay_status>PayedByAPI</pay_status>
			<source>UZ</source>
			<price>143.10</price>
			<price_currency>UAH</price_currency>
			<obsolete_at xsi:nil="true" />
			<obsolete_in_min xsi:nil="true" />
		</order>
		<issue_result>Issued</issue_result>
	</Data>
</Response>
```

{% sample lang="json" %}

```json
{
  "Data": {
    "issue_result": "Issued",
    "order": {
      "hash": "b67bc16afd5881ff103eec7dd897ef45",
      "id": 1011,
      "obsolete_at": null,
      "obsolete_in_min": null,
      "pay_status": "PayedByAPI",
      "price": 143.1,
      "price_currency": "UAH",
      "source": "UZ",
      "status": "Issued",
      "url": "https://domain.galileo.com.ua/ru/RailwayTickets/Order/hash=b67bc16afd5881ff103eec7dd897ef45"
    }
  },
  "Error": null,
  "Status": "OK",
  "StatusCode": 200
}
```

{% common %}

{% endmethod %}





####Статус заказа
| **Значение** | **Описание** |
| :--- | :--- |
| Uncompleted | Не завершен |
| Issued | Выписан |
| Cancelled | Отменен |
| HaveReturn | Имеет возврат |
| WithError | С ошибкой |

####Статус оплаты заказа
| **Значение** | **Описание** |
| :--- | :--- |
| NotPayed | Не оплачен |
| PayedByCreditCard | Оплачен кредитной картой |
| PayedBySMS | Оплачен с помощью подтверждающего кода |
| PayedByAPI | Оплата подтверждена через API |

####Источник данных ЖД
| **Значение** | **Описание** |
| :--- | :--- |
| UZ | Укрзализныця |
| RZD | РЖД |

####Результат выписки ЖД заказа
| **Значение** | **Описание** |
| :--- | :--- |
| DepositNotAllowed | Депозит агентства не позволяет выписать данный заказ \(недостаточно средств\) |
| Issued | Выписан |
| SomeError | Возникла ошибка при выписке |
| NoTempTickets | В заказе отсутствуют билеты для выписки |



