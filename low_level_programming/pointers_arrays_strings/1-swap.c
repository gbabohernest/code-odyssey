#include "main.h"

/**
* swap_int  - swaps the values of two integers.
* @a - a pointer to integer
* @b - a pointer to integer.
*/
void swap_int(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}