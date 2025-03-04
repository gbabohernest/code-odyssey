#include <stdio.h>

/**
* main - Prints the alphabets in lowercase.
*
* Return: 0 on success
*/
int main(void) {
  char character = 'a';

  while (character <= 'z') {
    putchar(character);
    character++;
  }
  putchar('\n');
  return (0);
}