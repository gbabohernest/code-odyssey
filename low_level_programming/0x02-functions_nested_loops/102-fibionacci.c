#include <stdio.h>

/**
* main - Entry point
* prints the first 50 fibonacci numbers. starting with 1 and 2
* :Return - 0 (success)
*/

int main(void) {
  long int num1 = 0, num2 = 1, num3;
  int num = 1;

  while (num < 50) {
    num3 = num1 + num2;
    printf("%ld", num3);
    if (num < 49) {
      printf(", ");
    }
    num1 = num2;
    num2 = num3;
    num++;
  }

  printf("\n");
  return 0;
}