# Pointers, arrays and strings

<!-- gcc -Wall -pedantic -Werror -Wextra -std=gnu89 0-main.c 0-reset_to_98.c -o 0-98 -->

### Tasks 📋

**0.98 Battery st.**

- Write a function that takes a pointer to an `int` as parameter and updates the value it points to to `98`.
  - Prototype: `void reset_to_98(int *n);`

**1. Don't swap horses in crossing a stream**

- Write a function that swaps the values of two integers.
  - Prototype: `void swap_int(int *a, int *b);`

**2. This report, by its very length, defends itself against the risk of being read**

- Write a function that returns the length of a string. - Prototype: `int _strlen(char *s);`
  FYI: The standard library provides a similar function: `strlen`. Run man `strlen` to learn more.

**3. I do not fear computer**

- Write a function that prints a string, followed by a new line, to `stdout`.
  - Prototype: `void _puts(char *str);`
    FYI: The standard library provides a similar function: `puts`. Run man `puts` to learn more.

**4. I can only go one way. i've not got a reverse gear.**

- Write a function that prints a string, in reverse, followed by a new line.
  - Prototype: `void print_rev(char *s);`

**5.Reverse a string**

- Write a function that reverses a string.
  - Prototype: `void rev_string(char *s);`

**6. Prints every character in the string**

- Write a function that prints every other character of a string, starting with the first character, followed by a new line.
  - Prototype: `void puts2(char *str);`

**7. Winning is only half of it. Having fun is the other half**

- Prototype: `void puts_half(char *str);`
- The function should print the second half of the string
- if the number of characters is odd, the function should print the last `n` characters of the string, where `n = (length_of_the_string - 1) / 2`;

**8.Array are not pointers**

- Write a function that prints `n` elements of an array of integers, followed by new line.

  - Prototype: `void print_array(int *a, int n);`
  - where `n` is the number of elements of the array to be printed.
  - Numbers must e separated by comma, followed by a space
  - The num should be displayed in the same order as they are stored in the array.
  - Allowed to use `printf`


**9.strcpy**
   - Prototype: `char *_strcpy(char *dest, char *src);`  
 - Write a function that copies the string pointed by `src`, including the terminating null byte(`\0`), to the buffer pointed to by `dest`.
   - Return value: the pointer to `dest`


