#include "main.h"

/**
* print_rev - prints a string in reverse.
* @s - A pointer to char.
*/

void print_rev(char *s) {
  char *str_beg = s;

  while (*s != '\0') {
    s++;
  }
  s--;
  while (s >=  str_beg ) {
      _putchar(*s);
      s--;
  }
  _putchar('\n');
}