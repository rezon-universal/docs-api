```
{% method %}
```

| **Метод** |
| --- |
| /banks/bankstransactions |

    Пример запроса:

    [https://domain.galileo.com.ua/api//banks/bankstransactions?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json&amp;dateFrom=2015-01-01T00:00:00&amp;dateTo=2015-06-01T00:00:00](https://domain.galileo.com.ua/api//banks/bankstransactions?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json&amp;dateFrom=2015-01-01T00:00:00&amp;dateTo=2015-06-01T00:00:00)

    | **Параметры запроса** | **Описание** |
    | --- | --- |
    | dateFrom | Период "с" YYYY-MM-DDTHH:MM:SS,например 2015-03-29T21:12:00 |
    | dateTo | Период "по" YYYY-MM-DDTHH:MM:SS,например 2015-03-29T21:12:00 |

    | **Параметры ответа** | **Описание** |
    | --- | --- |
    | BanksTransaction | Массив созданных банковских транзакций |


    {% sample lang="xml" %}

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <StatusCode>200</StatusCode>
        <Status>OK</Status>
        <Data xsi:type="ArrayOfBankTransaction">
            <BankTransaction>
                <transaction_id>276118_1525311</transaction_id>
                <bank>PrivatBank</bank>
                <date>21/02/2015 17:25</date>
                <company>290</company>
                <company_name>Agency name</company_name>
                <avia_order_id>A27624</avia_order_id>
                <comission>0,00</comission>
                <amount>27474,00</amount>
                <currency>UAH</currency>
                <response_description>2</response_description>
                <description>Авиабилет бронь #A27601</description>
            </BankTransaction>
        </Data>
    </Response>
    ```

    {% sample lang="json" %}

    ```json
    {
        "Data": [
            {
                "amount": "27474,00",
                "avia_order_id": "A27648",
                "bank": "PrivatBank",
                "comission": "0,00",
                "company": 2,
                "company_name": "Agency name",
                "currency": "UAH",
                "date": "21/02/2015 17:25",
                "description": "Авиабилет бронь #A27601",
                "reason_description": null,
                "response_description": "2",
                "train_order_id": null,
                "transaction_id": "276118_1525311"
            }
        ],
        "Error": null,
        "Status": "OK",
        "StatusCode": 200
    }
    ```
    {% common %}

    {% endmethod %}

    ##### Структура BanksTransaction

    | **Параметр** | **Описание** |
    | --- | --- |
    | transaction\_id | ID транзакции |
    | bank | Название банка |
    | date | Дата создания транзакции |
    | company | ID агенства |
    | company\_name | Название агентсва |
    | train\_order\_id | ID ЖД заказа |
    | avia\_order\_id | ID Авиа заказа |
    | comission | Комиссия |
    | amount | Стоимость |
    | currency | Валюта |
    | response\_description | Ответ от платежного шлюза |
    | reason\_description | Статус транзакции |
    | description | Описание транзакции |



