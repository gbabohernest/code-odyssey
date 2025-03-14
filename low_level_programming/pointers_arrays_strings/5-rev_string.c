#include "main.h"

/*
* rev_string - Reverses a string
* @s - Address of the first element of the chars array (string) to reverse.
*/

void rev_string(char *s) {
   int len = 0, left_end = 0, right_end;
   char temp_char;

   while (s[len] != '\0')
   {
       len++;
   }

   right_end  = len - 1;

   // swap characters from both ends
   while (right_end > left_end)
   {
     temp_char = s[left_end];
     s[left_end] = s[right_end];
     s[right_end] = temp_char;

     right_end--;
     left_end++;
   }
 }
