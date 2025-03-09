#include "main.h"

/***
* jack_bauer - prints every minute of the day, starting from 00:00 to 23:59
*/

void jack_bauer(void) {

  int hour = 0;
  int min;

   while (hour < 24) {
        for (min = 0; min <= 59; min++) {
             _putchar(hour / 10 + '0');
             _putchar(hour % 10 + '0');
             _putchar(':');
             _putchar(min / 10 + '0');
             _putchar(min % 10 + '0');
             _putchar('\n');
        }
        hour++;
   }
}