#include <stdio.h>

/**
* main - Entry point
*        A program that computes and prints the sum of all multiples of 3 or 5 below 1024 (excluded)
*/
int main(void) {

  int num = 0;
  int sum = 0;

  while ( num < 1024) {

    if (num % 3 == 0 || num % 5 == 0) {
      sum = sum + num;
    }
    num++;
  }

  printf("The sum of all the multiples of 3 or 5 is: %d\n", sum);
  return (0);
}