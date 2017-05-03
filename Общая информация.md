# Основные положения

Для запросов ("Клиент - Сервер") используются HTTP GET или HTTP POST (рекомендуется) запросы.
Ответы ("Сервер - Клиент") приходят в виде XML или JSON.


## Структура запроса

Запросы отправляются на адрес проекта, например https://domain.galileo.com.ua/api/ с **разрешенных IP адресов**.

Параметры можно слать как методом GET, так и методом POST.
Список параметров, которые должны быть в каждом запросе:

| Название параметра | Описание | Значения |
| :--- | :--- | :--- |
| key | Ключ доступа | \*\*\*\*\* |
| token | Токен доступа | \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* |
| t | Тип ответа | xml / json |
| lang | Язык ответа | en / ru / ua |
| ip | IP посетителя сайта |  |

{% method %}
##Структура ответа
Любой ответ содержит "оболочку", которая определяет статус ответа, и количество данных.

{% sample lang="xml" %}


```xml
<?xml version="1.0" encoding="utf-16"?>
<Response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<StatusCode>200</StatusCode>
	<Status>OK</Status>
	<Body>
		<RequestID>422ecf71-2b7a-4db1-8046-5abe89919041</RequestID>
		<Data></Data>
		<TotalCount>0</TotalCount>
	</Body>
</Response>
```

{% sample lang="json" %}
Here is how to print a message to `stdout` using Go.

```json
{
   "StatusCode": "200",
   "Status": "OK",
   "Body": {
      "RequestID": "422ecf71-2b7a-4db1-8046-5abe89919041",
      "Data": [],
      "TotalCount": "0"
   }
}
```

{% common %}
Описание полей ответа

| Название параметра | Описание | Дополнительная информация|
| :--- | :--- | :--- |
| StatusCode | Статус ответа | 200 - Успешно, 400 - Неверный запрос, 401 - Не авторизовано, 500 - Ошибка сервера |
| Status | Статус в текстовом виде | |
| Body/RequestID | Уникальный UID запроса | |
| Body/Data | Основные данные | |
| Body/TotalCount | Количество данных | |












{% endmethod %}
