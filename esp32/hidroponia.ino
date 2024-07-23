#include <WiFi.h>
#include <HTTPClient.h>
#include <NTPClient.h>
#include "DHT.h"

#define DHTPIN 4
#define DHTTYPE DHT11

const char* ssid = ""; 
const char* password = ""; 
const char* url = ""; 

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org", -10800, 60000);

DHT dht(DHTPIN, DHTTYPE);

void setup() {

  Serial.begin(9600);
  Serial.println("DHTxx Test!");

  dht.begin();

  WiFi.begin(ssid, password);
  Serial.println("Conectando ao Wi-Fi");
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Tentando se conectar ao WiFi...");
  }
  Serial.println("Conectado ao WiFi!");

  timeClient.begin();
}

void loop() {

  timeClient.update();

  unsigned long epochTime = timeClient.getEpochTime();
  struct tm *ptm = gmtime((time_t *)&epochTime);

  int year = ptm->tm_year + 1900;
  int month = ptm->tm_mon + 1;
  int day = ptm->tm_mday;
  int hour = ptm->tm_hour;
  int minute = ptm->tm_min;
  int second = ptm->tm_sec;

  String Date = String(day) + "/" + String(month) + "/" + String(year);
  String Time = String(hour) + ":" + String(minute) + ":" + String(second);

  Serial.print("Data: ");
  Serial.println(Date);
  Serial.print("Hora: ");
  Serial.println(Time);

  unsigned long onlineTimeMillis = millis();
  unsigned long onlineTimeSeconds = onlineTimeMillis / 60000;
  Serial.print("Tempo Online: ");
  Serial.println(onlineTimeSeconds);

  float h = dht.readHumidity();
  float t = dht.readTemperature();
  float f = dht.readTemperature(true);

  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println(F("Falha ao ler o sensor DHT"));
    delay(2000);
    return;
  }

  Serial.print("Umidade: ");
  Serial.print(h);
  Serial.print("% Temperatura: ");
  Serial.print(t);
  Serial.println("°C ");

  HTTPClient http;
  Serial.print("Enviando dados para URL: ");
  Serial.println(url);
  http.begin(url);

  String json = "{";
  json += "\"espStatus\": true,";
  json += "\"measures\": [";
  json += "{";
  json += "\"temperature\": " + String(t) + ",";
  json += "\"humidity\": " + String(h) + ",";
  json += "\"onlineTime\": " + String(onlineTimeSeconds) + String() + ",";
  json += "\"hour\": \"" + Time + "\",";
  json += "\"day\": \"" + Date + "\"";
  json += "}";
  json += "]}";


  http.addHeader("Content-Type", "application/json");

  int httpCode = http.PUT(json);
  if (httpCode > 0) {
    String payload = http.getString();
    Serial.println("Resposta:");
    Serial.println(payload);
  } else {
    Serial.printf("HTTP PUT falhou, código de erro: %d\n", httpCode);
  }
  http.end();

  delay(5000); 
}
