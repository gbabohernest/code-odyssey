# More Pointers, arrays and strings

### Tasks 📋

**0. strcat**
 - Write a function that concatenates two strings.
   - Prototype: `char *_strcat(char *dest, char *scr);`
   - This func appends the `src` string to the `dest` string, overwriting the terminating null byte(`\0`) at the end of `dest`, and then adds a terminating null byte
   - Returns a pointer to the resulting string `dest`
 

**1. strncat**
 - Write a function that concatenates two strings.
   - Prototype: `char *_strncat(char *dest, char *src, int n);`
   - The `_strncat` function is similar to the `_strcat` function, except that
     - it will use at most `n` bytes from  `src`; and
     - `src` does not need to be null-terminated if it contains `n` or more bytes
   - Return a pointer to the resulting string `dest`. 