#include "main.h"

/**
* puts2 - Prints every character of a string
* str: Address of the first element in the character array
*/

void puts2(char *str)
{
  int i = 0;
    while (str[i] != '\0')
    {
      if (str[i] % 2 == 0)
      {
        _putchar(str[i]);
        i++;
      }
      i++;
    }
    _putchar('\n');
}