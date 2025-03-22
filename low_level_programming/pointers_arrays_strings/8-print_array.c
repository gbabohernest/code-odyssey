#include "main.h"

/**
* print_array - prints n elements of an array of integers
* @a : Address of array's first element.
* @n : number of elements to be printed.
*/

void print_array(int *a, int n)
{
      int i = 0;
      while (i < n)
      {
        printf("%d", a[i]);
        if (!(n - i == 1)) {
          printf(", ");
        }
        i++;

      }
      printf("\n");
}