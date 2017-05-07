###Получение списка спецпредложений
| **Метод** |
| --- |
| /specialoffers/list\_old |

Параметров запроса нет.

Пример запроса:

[https://domain.galileo.com.ua/api/specialoffers/list\_old?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json](https://domain.galileo.com.ua/api/specialoffers/list_old?key=aaaa&amp;token=aaaabbbbccccddddeeeeffffddddaaaa&amp;t=json)

Ответ содержит массив спецпредложений.

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



