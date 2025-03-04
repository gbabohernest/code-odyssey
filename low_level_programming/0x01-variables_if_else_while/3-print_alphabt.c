#include <stdio.h>

/**
* main - Prints all the alphabets in lowercase expect q and e
*
* Return: 0 on success
*/

int main (void) {
    char character = 'a';

    while (character <= 'z') {
        if (character == 'q' || character == 'e') {
            character++;
        } else {
            putchar(character);
        }
        character++;
    }
    putchar('\n');
    return (0);
}