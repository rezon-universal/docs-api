### Выполнение нового поиска

| **Метод** |
| --- |
| /air/momondo |

Пример запроса:

RT: [http://domain.galileo.com.ua/api/air/momondo?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&origin=MOW&destination=BKK&depDate=2016-12-12&retDate=2017-02-01&Class=ECO&adults=2&children=1&Infants=1](http://domain.galileo.com.ua/api/air/momondo?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&origin=MOW&destination=BKK&depDate=2016-12-12&retDate=2017-02-01&Class=ECO&adults=2&children=1&Infants=1)

OW:  
[http://domain.galileo.com.ua/api/air/momondo?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&origin=IEV&destination=TLV&depDate=2016-12-12&Class=ECO&adults=2&children=1&Infants=1](http://domain.galileo.com.ua/api/air/momondo?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&origin=IEV&destination=TLV&depDate=2016-12-12&Class=ECO&adults=2&children=1&Infants=1)

MULTY:  
[http://domain.galileo.com.ua/api/air/momondo?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&origin1=MOW&destination1=BKK&depDate1=2016-12-12&origin2=BKK&destination2=MUC&depDate2=2016-12-16&origin3=FRA&destination3=MOW&depDate3=2016-12-18&Class=ECO&adults=2&children=1&Infants=1](http://domain.galileo.com.ua/api/air/momondo?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&origin1=MOW&destination1=BKK&depDate1=2016-12-12&origin2=BKK&destination2=MUC&depDate2=2016-12-16&origin3=FRA&destination3=MOW&depDate3=2016-12-18&Class=ECO&adults=2&children=1&Infants=1)

| **Параметры запроса** | **Описание** |
| --- | --- |
| key | Static API key |
| token | Static API token |
| origin | Departure airport for OW/RT |
| destination | Arrival airport for OW/RT |
| depDate | Departure date for OW/ first leg of RT |
| retDate | Return departure date for RT |
| origin1 … origin4 | Departure airports for multy route |
| destination1 … destination4 | Arrival airport for multy route |
| depDate1 … depDate4 | Departure date for each leg of multy route |
| adults | Count of adults |
| children | Count of kids |
| infants | Count of infants |
| Class | Cabin class _\[ECO/BIZ/FIR\]_ |


###Получение списка направлений

| **Метод** |
| --- |
| /air/momondo |

Параметров запроса нет.

Пример запроса:

http://domain.galileo.com.ua/api/air/directions?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa
