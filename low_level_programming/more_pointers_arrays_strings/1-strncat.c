#include "main.h"


char * _strncat(char *dest, char *src, int n)
{
	int i = 0, count = 0;

	while (dest[i] != '\0')
	{
		i++;
	}

	while (src[count] != '\0' && count < n)
    {
          dest[i] = src[count];
          i++;
          count++;
    }

	return dest;

}
