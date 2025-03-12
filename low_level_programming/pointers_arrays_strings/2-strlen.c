#include "main.h"

/**
* _strlen - returns the length of a string
* @c - a pointer to char
* :return: total number of bytes in the string
*/
int _strlen(char *s) {
  int len = 0;

  while (*s != '\0') {
    len++;
    s++;
  }
  return (len);
}