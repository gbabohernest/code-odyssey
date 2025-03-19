#include "main.h"

char * _strncat(char *dest, char *src, int n)
{
	int i = 0, count = 0;

	while (dest[i] != '\0')
	{
		i++;
	}

	if (n == 0)
	{
		dest[i] = src[n];
		return dest;
	}

	while (count < n)
	{
		dest[i] = src[count];
		i++;
		count++;
	}

	return dest;

}
