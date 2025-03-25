#include "main.h"

/**
* reverse_array - Reverses the content of an array of integers
* @n: number of elements of the array
*/

void reverse_array(int *a, int n) {

  int counter = 0;
  int val;

  n = n - 1;
  while (counter < n) {
    val = a[n];
   a[n--] = a[counter];
   a[counter++] = val;
  }

}