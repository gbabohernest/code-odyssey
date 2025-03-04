#include <stdio.h>

/**
* main - Prints the alphabets in lowercase, and uppercase.
*
* Return: 0 on success
*/
int main(void) {
  char lowercase = 'a';
  char uppercase = 'A';

  while (lowercase <= 'z') {
    putchar(lowercase);
    lowercase++;
  }
  putchar('\n');
  while (uppercase <= 'Z') {
    putchar(uppercase);
    uppercase++;
  }
  putchar('\n');
  return (0);
}