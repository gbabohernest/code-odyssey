#include "main.h"

/**
* _strncpy - Copies a string
* @dest - A pointer to the destination string
* @src - A pointer to the source string
* @n - Number of bytes to copy. 
*
* Return - A pointer to the dest string
*/

char * _strncpy(char *dest, char *src, int n) {

    int i = 0;

    for (; i < n && src[i] != '\0'; i++) {
      dest[i] = src[i];
    }

    for (; i < n; i++) {
      dest[i] = '\0';
    }

    return dest;

    return dest;

}