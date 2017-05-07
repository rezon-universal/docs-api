{% method %}
Данный метод используется для проверки пользовательского токена доступа.

| Метод |
| :--- |
| /users/authenticate |

| Параметры запроса | Описание |
| :--- | :--- |
| access_token | Токен, полученный в ходе процедуры авторизации |

| Параметры ответа | Описание |
| :--- | :--- |
| authenticated | Успешная/неуспешная аутентификация |
| user | Объект пользователя, если аутентификация прошла успешно |


{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <StatusCode>200</StatusCode>
   <Status>OK</Status>
   <Data xsi:type="UserAuthenticateResult">
      <authenticated>true</authenticated>
      <user>
         <id>35</id>
         <guid>a4ffa510-a5d9-41f7-832c-917e1f355b56</guid>
         <email>dima.bobrov@gm.com</email>
         <phone>+38 0449515103</phone>
      </user>
   </Data>
</Response>
```

{% sample lang="json" %}

```json
{
   "Data": {
      "authenticated": true,
      "user": {
         "email": "dima.bobrov@gm.com",
         "guid": "a4ffa510-a5d9-41f7-832c-917e1f355b56",
         "id": 35,
         "name": null,
         "phone": "+38 0449515103"
      }
   },
   "Error": null,
   "Status": "OK",
   "StatusCode": 200
}
```
{% common %}

{% endmethod %}


