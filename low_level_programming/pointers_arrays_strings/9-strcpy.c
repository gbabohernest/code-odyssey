#include "main.h"

/**
*  _strcpy - Copies the string from src to dest including terminating null byte.
* @dest: Buffer to contain copied string.
* @src: String to copied
*
* Return: A pointer to dest .
*/

char * _strcpy(char *dest, char *scr)
{
  int i = 0;
  while (scr[i] != '\0') {
    dest[i] = scr[i];
    i++;
  }
  dest[i] = '\0';
  return dest;

}