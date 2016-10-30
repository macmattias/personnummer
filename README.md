**Fixa personnummer**

Version: 1.2

Av: Mattias Hedman

Du skickar med personnumret du har, string eller int, och vilken längd du vill ha som resultat.

De värden som finns är:

10 - utan år och streck

11 - utan år med streck

12 - Med år utan steck

13 - Med år och streck

Exempel:
Du har 861221-2324 och vill få ut det utan bindestreck: fixaPersonnummer(861221-2324, 10): 8612212324
Du har 561221-2324 och vill få ut det med år och utan bindestreck: fixaPersonnummer(861221-2324, 12): 198612212324
Du har 0612212324 och vill få ut det med år och med bindestreck: fixaPersonnummer(861221-2324, 13): 20061221-2324