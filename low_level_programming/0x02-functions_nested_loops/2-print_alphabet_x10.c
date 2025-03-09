#include "main.h"

/**
* Prints the alphabet 10x in lowercase followed by a new line.
*
* Return: void(nothing)
*/

void print_alphabet_x10(void) {

   char c ;
   int counter = 0;

   while (counter < 10) {
     for (c = 'a'; c <= 'z'; c++) {
       _putchar(c);
     }
    _putchar('\n');
     counter++;
   }
}