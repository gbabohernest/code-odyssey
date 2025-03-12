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
   - Prototype:  `void _puts(char *str);`
   FYI: The standard library provides a similar function: `puts`. Run man `puts` to learn more.