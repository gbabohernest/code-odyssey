#include "main.h"

/***
* puts_half - Prints half of a string, followed by a new line.
* @str: Address of the first element of the character array.
*/

void puts_half(char *str)
{
    int len = 0, second_half;

    while (str[len] != '\0')
    {
      len++;
    }

    if (len % 2 == 0)
    {
      second_half = len / 2;
      while (str[second_half] != '\0')
      {
        _putchar(str[second_half]);
        second_half++;
      }
    }
    else
    {
      second_half = (len - 1) / 2;
      while (str[second_half] != '\0')
      {
        _putchar(str[second_half]);
        second_half++;
      }
    }

    _putchar('\n');
}