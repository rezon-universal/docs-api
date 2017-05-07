Для получения ключа необходимо выполнить запрос, передав данные аутентификации email и pass\_hash.

{% method %}

| Метод |
| :--- |
| /users/authorize |

| Параметры запроса | Описание |
| :--- | :--- |
| email | Email пользователя |
| pass\_hash | MD5\(EMAIL + PASS\) |

В результате выполнения запроса будет возвращён access\_token, при помощи которого можно осуществлять вызовы к пользовательским методам API.

**Внимание!** Выданный access\_token привязывается к IP посетителя. \(с другим IP посетителя запросы с данным access\_token приниматься не будут\). Важно отправлять корректный IP посетителя, т.к. после перехода посетителем на проект RezOn, его "выкинет" из кабинета в случае несоответствия IP.



{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <StatusCode>200</StatusCode>
   <Status>OK</Status>
   <Data xsi:type="UserAuthorizeResult">
      <access_token>54513b68a5e301494174d43eca63e5bc2</access_token>
      <reason_code xsi:nil="true" />
   </Data>
</Response>
```

{% sample lang="json" %}

```json
{
   "Data": {
      "access_token": "54513b68a5e301494174d43eca63e5bc2",
      "reason": null,
      "reason_code": null
   },
   "Error": null,
   "Status": "OK",
   "StatusCode": 200
}
```
{% common %}

| Параметры ответа | Описание |
| :--- | :--- |
| access\_token | Токен авторизации _\(в случае успешной авторизации\)_ |
| reason\_code | Причина неудачной авторизации: _\(0 - EmailOrPasswordIsInvalid, 1 - NotConfirmed, 2 - NotActive, 3 - ErrorOccured, 4 - RequestsLimiterHandled\)_ |
| reason | Причина неудачной авторизации, описанная текстом |

Для передачи токена авторизации проекту RezOn \(или от RezOn к Вашему сайту\) необходимо установить \(считать\) куку \_ACCESS\_TOKEN

![](/assets/2017-05-07_18-43-03.png)

{% endmethod %}


**Внимание!** Данный механизм будет работать только если проект RezOn находится на поддомене Вашего сайта \([почему?](http://stackoverflow.com/a/1063760/2114398)\) .

