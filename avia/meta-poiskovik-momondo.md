### Выполнение нового поиска

{% method %}

| **Метод** |
| --- |
| /air/momondo |

Пример запроса:

RT: [http://domain.galileo.com.ua/api/air/momondo?key=aaaa&token=aaaabbbbccccddddeeeeffffddddaaaa&origin=MOW&destination=BKK&depDate=2016-12-12&retDate=2017-02-01&Class=ECO&adults=2&children=1&Infants=1](http://domain.galileo.com.ua/api/air/momondo?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&origin=MOW&destination=BKK&depDate=2016-12-12&retDate=2017-02-01&Class=ECO&adults=2&children=1&Infants=1)

OW:  
[http://domain.galileo.com.ua/api/air/momondo?key=aaaa&token=aaaabbbbccccddddeeeeffffddddaaaa&origin=IEV&destination=TLV&depDate=2016-12-12&Class=ECO&adults=2&children=1&Infants=1](http://domain.galileo.com.ua/api/air/momondo?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&origin=IEV&destination=TLV&depDate=2016-12-12&Class=ECO&adults=2&children=1&Infants=1)

MULTY:  
[http://domain.galileo.com.ua/api/air/momondo?key=aaaa&token=aaaabbbbccccddddeeeeffffddddaaaa&origin1=MOW&destination1=BKK&depDate1=2016-12-12&origin2=BKK&destination2=MUC&depDate2=2016-12-16&origin3=FRA&destination3=MOW&depDate3=2016-12-18&Class=ECO&adults=2&children=1&Infants=1](http://domain.galileo.com.ua/api/air/momondo?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&origin1=MOW&destination1=BKK&depDate1=2016-12-12&origin2=BKK&destination2=MUC&depDate2=2016-12-16&origin3=FRA&destination3=MOW&depDate3=2016-12-18&Class=ECO&adults=2&children=1&Infants=1)

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



{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8"?>
<flights xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <flight>
      <price>42307</price>
      <currency>UAH</currency>
      <marketingAirline>TK</marketingAirline>
      <url>http://domain.galileo.com.ua/DEFAULT_LANGUAGE/AirTickets/BookingForm?hid=ddef5904-72ad-4063-a08f-4b00d68b7b08&amp;VariantId=1367b80b-7a5f-4ed6-84d9-a2c5a838e11e&amp;itemNumber1=1&amp;itemNumber2=1&amp;Momondo=true</url>
      <fees>
         <fee>
            <paymentName>Oplata nalichnimi</paymentName>
            <amount>2</amount>
         </fee>
         <fee>
            <paymentName>Avalj</paymentName>
            <amount>423</amount>
         </fee>
         <fee>
            <paymentName>Portmone</paymentName>
            <amount>10</amount>
         </fee>
         <fee>
            <paymentName>Schet dlya fiz lic</paymentName>
            <amount>0</amount>
         </fee>
         <fee>
            <paymentName>TasLink</paymentName>
            <amount>0</amount>
         </fee>
      </fees>
      <segment>
         <leg>
            <operatingAirline>TK</operatingAirline>
            <flightNumber>418</flightNumber>
            <origin>VKO</origin>
            <destination>IST</destination>
            <departureDate>2017-12-12</departureDate>
            <departureTime>14:55</departureTime>
            <arrivalDate>2017-12-12</arrivalDate>
            <arrivalTime>18:10</arrivalTime>
            <equipment>73J</equipment>
            <StartTerminal>A</StartTerminal>
            <EndTerminal>I</EndTerminal>
            <JrnyTm>890</JrnyTm>
            <FltTm>195</FltTm>
            <Miles xsi:nil="true" />
            <NumTecnicalStops>0</NumTecnicalStops>
         </leg>
         <leg>
            <operatingAirline>TK</operatingAirline>
            <flightNumber>64</flightNumber>
            <origin>IST</origin>
            <destination>BKK</destination>
            <departureDate>2017-12-12</departureDate>
            <departureTime>20:40</departureTime>
            <arrivalDate>2017-12-13</arrivalDate>
            <arrivalTime>09:45</arrivalTime>
            <equipment>333</equipment>
            <StartTerminal>I</StartTerminal>
            <JrnyTm>890</JrnyTm>
            <FltTm>545</FltTm>
            <Miles xsi:nil="true" />
            <NumTecnicalStops>0</NumTecnicalStops>
         </leg>
      </segment>
      <segment>
         <leg>
            <operatingAirline>TK</operatingAirline>
            <flightNumber>65</flightNumber>
            <origin>BKK</origin>
            <destination>IST</destination>
            <departureDate>2018-02-01</departureDate>
            <departureTime>11:30</departureTime>
            <arrivalDate>2018-02-01</arrivalDate>
            <arrivalTime>18:25</arrivalTime>
            <equipment>333</equipment>
            <EndTerminal>I</EndTerminal>
            <JrnyTm>1820</JrnyTm>
            <FltTm>655</FltTm>
            <Miles xsi:nil="true" />
            <NumTecnicalStops>0</NumTecnicalStops>
         </leg>
         <leg>
            <operatingAirline>TK</operatingAirline>
            <flightNumber>417</flightNumber>
            <origin>IST</origin>
            <destination>VKO</destination>
            <departureDate>2018-02-02</departureDate>
            <departureTime>10:55</departureTime>
            <arrivalDate>2018-02-02</arrivalDate>
            <arrivalTime>13:50</arrivalTime>
            <equipment>73J</equipment>
            <StartTerminal>I</StartTerminal>
            <EndTerminal>A</EndTerminal>
            <JrnyTm>1820</JrnyTm>
            <FltTm>175</FltTm>
            <Miles xsi:nil="true" />
            <NumTecnicalStops>0</NumTecnicalStops>
         </leg>
      </segment>
      <prices>
         <category>
            <Type>ADT</Type>
            <PassengerCount>2</PassengerCount>
            <FareAmount>3448</FareAmount>
            <Currency>UAH</Currency>
            <Taxes>10801</Taxes>
            <Total>14249</Total>
         </category>
         <category>
            <Type>CNN</Type>
            <PassengerCount>1</PassengerCount>
            <FareAmount>2579</FareAmount>
            <Currency>UAH</Currency>
            <Taxes>10801</Taxes>
            <Total>13380</Total>
         </category>
         <category>
            <Type>INF</Type>
            <PassengerCount>1</PassengerCount>
            <FareAmount>348</FareAmount>
            <Currency>UAH</Currency>
            <Taxes>81</Taxes>
            <Total>429</Total>
         </category>
      </prices>
   </flight>
</flights>
```

{% sample lang="json" %}

```json
{
   "flight": {
      "price": "42307",
      "currency": "UAH",
      "marketingAirline": "TK",
      "url": "http://domain.galileo.com.ua/DEFAULT_LANGUAGE/AirTickets/BookingForm?hid=ddef5904-72ad-4063-a08f-4b00d68b7b08&VariantId=1367b80b-7a5f-4ed6-84d9-a2c5a838e11e&itemNumber1=1&itemNumber2=1&Momondo=true",
      "fees": [
         {
            "paymentName": "Oplata nalichnimi",
            "amount": "2"
         },
         {
            "paymentName": "Avalj",
            "amount": "423"
         },
         {
            "paymentName": "Portmone",
            "amount": "10"
         },
         {
            "paymentName": "Schet dlya fiz lic",
            "amount": "0"
         },
         {
            "paymentName": "TasLink",
            "amount": "0"
         }
      ],
      "segment": [
         {
            "operatingAirline": "TK",
            "flightNumber": "418",
            "origin": "VKO",
            "destination": "IST",
            "departureDate": "2017-12-12",
            "departureTime": "14:55",
            "arrivalDate": "2017-12-12",
            "arrivalTime": "18:10",
            "equipment": "73J",
            "StartTerminal": "A",
            "EndTerminal": "I",
            "JrnyTm": "890",
            "FltTm": "195",
            "Miles": {
               "@nil": "true"
            },
            "NumTecnicalStops": "0"
         },
         {
            "operatingAirline": "TK",
            "flightNumber": "64",
            "origin": "IST",
            "destination": "BKK",
            "departureDate": "2017-12-12",
            "departureTime": "20:40",
            "arrivalDate": "2017-12-13",
            "arrivalTime": "09:45",
            "equipment": "333",
            "StartTerminal": "I",
            "JrnyTm": "890",
            "FltTm": "545",
            "Miles": {
               "@nil": "true"
            },
            "NumTecnicalStops": "0"
         },
         [
            {
               "operatingAirline": "TK",
               "flightNumber": "65",
               "origin": "BKK",
               "destination": "IST",
               "departureDate": "2018-02-01",
               "departureTime": "11:30",
               "arrivalDate": "2018-02-01",
               "arrivalTime": "18:25",
               "equipment": "333",
               "EndTerminal": "I",
               "JrnyTm": "1820",
               "FltTm": "655",
               "Miles": {
                  "@nil": "true"
               },
               "NumTecnicalStops": "0"
            },
            {
               "operatingAirline": "TK",
               "flightNumber": "417",
               "origin": "IST",
               "destination": "VKO",
               "departureDate": "2018-02-02",
               "departureTime": "10:55",
               "arrivalDate": "2018-02-02",
               "arrivalTime": "13:50",
               "equipment": "73J",
               "StartTerminal": "I",
               "EndTerminal": "A",
               "JrnyTm": "1820",
               "FltTm": "175",
               "Miles": {
                  "@nil": "true"
               },
               "NumTecnicalStops": "0"
            }
         ]
      ],
      "prices": [
         {
            "Type": "ADT",
            "PassengerCount": "2",
            "FareAmount": "3448",
            "Currency": "UAH",
            "Taxes": "10801",
            "Total": "14249"
         },
         {
            "Type": "CNN",
            "PassengerCount": "1",
            "FareAmount": "2579",
            "Currency": "UAH",
            "Taxes": "10801",
            "Total": "13380"
         },
         {
            "Type": "INF",
            "PassengerCount": "1",
            "FareAmount": "348",
            "Currency": "UAH",
            "Taxes": "81",
            "Total": "429"
         }
      ]
   }
}
```
{% common %}

{% endmethod %}


### Получение списка направлений

{% method %}

| **Метод** |
| --- |
| /air/momondo |

Параметров запроса нет.

Пример запроса:

[http://domain.galileo.com.ua/api/air/directions?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa](http://domain.galileo.com.ua/api/air/directions?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa)

Ответ содержит пары городов/аэропортов, настроенные агентом в БекОфисе.



{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <StatusCode>200</StatusCode>
   <Status>OK</Status>
   <Data xsi:type="ArrayOfAirDirectionPair">
      <AirDirectionPair>
         <StartPt>IEV</StartPt>
         <EndPt>TLV</EndPt>
      </AirDirectionPair>
      <AirDirectionPair>
         <StartPt>IEV</StartPt>
         <EndPt>NYC</EndPt>
      </AirDirectionPair>
      <AirDirectionPair>
         <StartPt>IEV</StartPt>
         <EndPt>BCN</EndPt>
      </AirDirectionPair>
      <AirDirectionPair>
         <StartPt>IEV</StartPt>
         <EndPt>LON</EndPt>
      </AirDirectionPair>
   </Data>
</Response>
```

{% sample lang="json" %}

```json
{
   "StatusCode": "200",
   "Status": "OK",
   "Data": {
      "@type": "ArrayOfAirDirectionPair",
      "AirDirectionPair": [
         {
            "StartPt": "IEV",
            "EndPt": "TLV"
         },
         {
            "StartPt": "IEV",
            "EndPt": "NYC"
         },
         {
            "StartPt": "IEV",
            "EndPt": "BCN"
         },
         {
            "StartPt": "IEV",
            "EndPt": "LON"
         }
      ]
   }
}
```
{% common %}

{% endmethod %}

