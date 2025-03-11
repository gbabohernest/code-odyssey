#include <stdio.h>

/**
* main - prints the sum of even valued terms of
* fibonacci numbers
*
* Return: 0 (Success)
*/

int main(void) {
  long int num1 = 0, num2 = 1, num3, sum;
  sum = 0;
  for (num3 = 0; num3 < 4000000;) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;

    if (num3 % 2 == 0) {
      sum = sum + num3;
    }
  }

  printf("%ld\n", sum);
  return (0);
}