# Aplicación del Clima orientada a ciclistas

La APP toma la información de dos APIS: openweathermap y weatherapi. La razón para utilizar dos en vez de una se basa en que openweather no proveía todo lo necesario para ofrecer información completa sobre el clima que pueda ser útil para ciclistas y otros deportistas. 

La APP funciona tomando automáticamente la información sobre la longitud y latitud del navegador. Con esa información, envía una request a las APIs para obtener la información del clima en la zona y una predicción de las próximas horas y los próximos 3 días. 

Versión live: https://cycling-weather.netlify.app/
