#include <stdio.h>

/**
* print_to_98 - prints all natural numbers from n to 98
* @n - number which to start printing from.
*
* Return: void (nothing)
*/

void print_to_98(int n) {
  int value;

  if (n > 98) {
    for (value = n; value >= 98; value--) {
      if (value != 98) {
        printf("%d", value);
        printf(",");
        printf(" ");
      } else {
        printf("%d", value);
        printf("\n");
      }
    }
  } else {
     for (value = n; value <= 98; value++) {
       if (value != 98) {
         printf("%d", value);
         printf(",");
         printf(" ");
       } else {
         printf("%d", value);
         printf("\n");
       }
     }
  }
}