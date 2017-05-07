###Получение списка спецпредложений
{% method %}

| **Метод** |
| --- |
| /specialoffers/list_old |

Параметров запроса нет.

Пример запроса:

[https://domain.galileo.com.ua/api/specialoffers/list\_old?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json](https://domain.galileo.com.ua/api/specialoffers/list_old?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json)

Ответ содержит массив спецпредложений.
{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <StatusCode>200</StatusCode>
   <Status>OK</Status>
   <Data xsi:type="BodyWrapper">
      <RequestID>63984235-8c4c-4c75-80af-cf831b2a481d</RequestID>
      <Data xsi:type="ArrayOfProposal">
         <Proposal>
            <NNID>2091</NNID>
            <UnicId>876d25e8-ff77-4538-8ec0-c4f929a7a350</UnicId>
            <PCC>7J8I</PCC>
            <TicketPrice xsi:nil="true" />
            <ServiceFee>0.00</ServiceFee>
            <DisplFinalPrice>215.65</DisplFinalPrice>
            <Currency>USD</Currency>
            <ValidSince>2002-05-24T00:00:00</ValidSince>
            <ValidTill>2017-05-24T00:00:00</ValidTill>
            <DepartureSince>2017-03-10T00:00:00</DepartureSince>
            <DepartureTill>2017-05-24T00:00:00</DepartureTill>
            <ReturnSince>2017-03-10T00:00:00</ReturnSince>
            <ReturnTill>2017-05-24T00:00:00</ReturnTill>
            <RouteType>RT</RouteType>
            <NumLegsThere>1</NumLegsThere>
            <NumLegsBack>1</NumLegsBack>
            <PlatingCarrier>UA</PlatingCarrier>
            <PlatingCarrierLang>Юнайтед Эйрлайнз [UA]</PlatingCarrierLang>
            <StartPt>MCO</StartPt>
            <StartPtLang>Международный</StartPtLang>
            <EndPt>SFO·</EndPt>
            <EndPtLang>Сан-Франциско</EndPtLang>
            <MinStay>0</MinStay>
            <MaxStay>365</MaxStay>
            <MinDayPriorDeparture>14</MinDayPriorDeparture>
            <MaxDayPriorDeparture>365</MaxDayPriorDeparture>
            <CountryArr>US</CountryArr>
            <CountryLangArr>США</CountryLangArr>
            <CityArr>SFO</CityArr>
            <CityLangArr>Сан-Франциско</CityLangArr>
            <CountryDep>US</CountryDep>
            <CountryLangDep>США</CountryLangDep>
            <CityDep>ORL</CityDep>
            <CityLangDep>Орландо</CityLangDep>
            <LinkToOffer>http://domain.galileo.com.ua/ru/SpecialOffers/Offer/876d25e8-ff77-4538-8ec0-c4f929a7a350</LinkToOffer>
            <Image />
         </Proposal>
      </Data>
      <TotalCount>1</TotalCount>
   </Data>
</Response>
```

{% sample lang="json" %}

```json
{
   "Data": {
      "Data": [
         {
            "CityArr": "SFO",
            "CityDep": "ORL",
            "CityLangArr": "Сан-Франциско",
            "CityLangDep": "Орландо",
            "CountryArr": "US",
            "CountryDep": "US",
            "CountryLangArr": "США",
            "CountryLangDep": "США",
            "Currency": "USD",
            "DepartureSince": "/Date(1489096800000+0200)/",
            "DepartureTill": "/Date(1495573200000+0300)/",
            "DisplFinalPrice": 215.65,
            "EndPt": "SFO·",
            "EndPtLang": "Сан-Франциско ",
            "Image": "",
            "LinkToOffer": "http://domain.galileo.com.ua/ru/SpecialOffers/Offer/876d25e8-ff77-4538-8ec0-c4f929a7a350",
            "MaxDayPriorDeparture": 365,
            "MaxStay": "365",
            "MinDayPriorDeparture": 14,
            "MinStay": "0",
            "NNID": 2091,
            "NumLegsBack": 1,
            "NumLegsThere": 1,
            "PCC": "7J8I",
            "PlatingCarrier": "UA",
            "PlatingCarrierLang": "Юнайтед Эйрлайнз [UA]",
            "ReturnSince": "/Date(1489096800000+0200)/",
            "ReturnTill": "/Date(1495573200000+0300)/",
            "RouteType": "RT",
            "ServiceFee": 0,
            "StartPt": "MCO",
            "StartPtLang": "Международный",
            "StayRule": null,
            "TicketPrice": null,
            "UnicId": "876d25e8-ff77-4538-8ec0-c4f929a7a350",
            "ValidSince": "/Date(1022187600000+0300)/",
            "ValidTill": "/Date(1495573200000+0300)/"
         }
      ],
      "RequestID": "638a1f21-c718-4448-b7d7-a528005db0f8",
      "TotalCount": 1
   },
   "Error": null,
   "Status": "OK",
   "StatusCode": 200
}
```
{% common %}

{% endmethod %}

Структура спецпредложения:

| **Параметр** | **Описание** |
| --- | --- |
| NNID | Номер сп.пр. |
| UnicId | Уникальный ID |
| PCC | PCC спецпредложения |
| TicketPrice | Реальная цена билета |
| ServiceFee | Взымаемый сервисный сбор |
| DisplFinalPrice | Отображаемая цена спецпредложения |
| Currency | Валюта цен |
| ValidSince | Спецпредложение активно с \(дата\) |
| ValidTill | Спецпредложение активно по \(дата\) |
| DepartureSince | Дата отправления туда \(с\) |
| DepartureTill | Дата отправления туда \(по\) |
| ReturnSince | Дата отправления обратно \(с\) |
| ReturnTill | Дата отправления обратно \(по\) |
| RouteType | Тип маршрута \(OW, RT\) |
| NumLegsThere | Количество легов туда |
| NumLegsBack | Количество легов обратно |
| PlatingCarrier | IATA код валидирующего перевозчика |
| PlatingCarrierLang | Полное название валидирующего перевозчика |
| StartPt | IATA код аэропорта вылета |
| StartPtLang | Аэропорт вылета |
| CityLangDep | Город вылета |
| StateLangDep | Штат вылета |
| CountryDep | Код страны вылета |
| CountryLangDep | Страна вылета |
| EndPt | IATA код аэропорта прибытия |
| EndPtLang | Аэропорт прибытия |
| CityLangArr | Город прибытия |
| StateLangArr | Штат прибытия |
| CountryArr | Код страны прибытия |
| CountryLangArr | Страна прибытия |
| MinStay | Минимальное количество дней остановки в точке назначения |
| MaxStay | Максимальное количество дней остановки в точке назначения |
| MinDayPriorDeparture | Минимум дней перед отправлением |
| MaxDayPriorDeparture | Максимум дней перед отправлением |
| LinkToOffer | Ссылка для просмотра свободных дат |

###Список спецпредложений без использования RezOn API

Спецпредложения также можно получать публично, в формате JSON, по URL Вашего сайта   
`https://domain.galileo.com.ua/ru/HelperAsync/GetAviaOffersList`

Язык для расшифровки аэропортов, городов, задается в URL.

Пример кода встраивания спецпредложений

```javascript
<div id="galileoSpecialOffers"></div>
<script type="text/javascript">
    var galileoProject = "https://domain.galileo.com.ua/ru/";

    var specialOffersInitialize = function () {
        if (galileoProject[galileoProject.length - 1] === '/') galileoProject = galileoProject.substring(0, galileoProject.length - 1);
        new function (cb) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                    if (xmlhttp.status == 200) {
                        cb(JSON.parse(xmlhttp.responseText));
                    }
                    else {
                        alert('Error occurred while loading Galileo Special Offers', xmlhttp);
                    }
                }
            };
            xmlhttp.open("GET", galileoProject + "/HelperAsync/GetAviaOffersList", true);
            xmlhttp.send();
        }(function (rsp) {
            console.log(rsp);
            if (!rsp || !rsp.Data || !rsp.Data.Data || rsp.Data.Data.length === 0) return;

            var ul = document.createElement('ul');
            document.getElementById('galileoSpecialOffers').appendChild(ul);

            for (var i = 0; i < rsp.Data.Data.length; i++) {
                var offer = rsp.Data.Data[i];

                var li = document.createElement('li');
                ul.appendChild(li);
                var a = document.createElement('a');
                li.appendChild(a);

                a.href = offer.LinkToOffer;
                a.setAttribute("target", "_parent");
                a.innerText = "{FROM} {ARROW} {TO} от {PRICE} {CURRENCY}"
                    .replace("{FROM}", offer.CityLangDep)
                    .replace("{TO}", offer.CityLangArr)
                    .replace("{ARROW}", offer.RouteType == "RT" ? "↔" : "→")
                    .replace("{PRICE}", offer.DisplFinalPrice.toFixed(0))
                    .replace("{CURRENCY}", offer.Currency);

            }
        });

    }
    specialOffersInitialize();
</script>
```



