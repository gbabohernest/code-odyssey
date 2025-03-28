#include <stdio.h>

/**
 * main - prints the size of various types on the PC it is compiled and run on.
 * @return 0 (success)
 */
int main(void)
{
    printf("Size of a char: %d byte(s)\n", sizeof(char));
    printf("Size of an int: %d bytes(s)\n", sizeof(int));
    printf("Size of a long int: %d bytes(s)\n", sizeof(long int));
    printf("Size of a long long int: %d bytes(s)\n", sizeof(long long int));
    printf("Size of a float: %f bytes(s)\n", sizeof(float));
    return (0);
}
