#include <stdio.h>
#include <stdlib.h>
#include "bucket.h"
#include "htbl.h"

/* bucket: linked list of hash table entries */

/*
 typedef struct bucket bucket;
 struct bucket {
 char *s;
 unsigned long int hash;
 // store the hash with the string for faster comparison
 bucket *next;
 };
 */

/* bucket_cons : (char*,unsigned long,bucket*) -> bucket*
 * Given a string, a hash function, and a bucket, insert
 * the string into the bucket.
 * Copy the string with strdup so as to get a new copy.
 */
bucket *bucket_cons(char *s, unsigned long h, bucket *b)
{
    bucket* new_bucket = (bucket*)malloc(sizeof(bucket));
    if (!new_bucket) {
        fprintf(stderr, "error (bucket_cons): malloc failed");
        exit(1);
    }
    new_bucket->s = strdup(s);
    new_bucket->hash = h;
    new_bucket->next = b;
    return new_bucket;
}


/* bucket_num_entries : bucket* -> unsigned int */
unsigned int bucket_num_entries(bucket *b)
{
    unsigned int i = 0;
    while (b != NULL) {
        b = b->next;
        i++;
    }
    return i;
}

/* bucket_contains : (char*,unsigned long int,bucket*) -> int
 * Look for string in bucket.
 * - note: check first that hashes are equal, and only then call
 *   strcmp; strcmp is relatively expensive, so this is a savings
 */
int bucket_contains(char *s, unsigned long int h, bucket *b)
{
    while (b != NULL) {
        if (h == b->hash) {
            if (strcmp(s, b->s) == 0) {
                return 1; //returns 1 if true
            }
        }
        b = b->next;
    }
    return 0;
}

/* bucket_show : (FILE*,bucket*) -> <void>
 * Display bucket to FILE *f.
 * You may display it in any format you like (within reason).
 */
void bucket_show(FILE *f, bucket *b)
{
    if (!b) {
        fprintf(stderr, "error (bucket_show): malloc failed");
    }
    while (b != NULL) {
        fprintf(f, "%s\n", b->s);
        b = b->next;
    }
    fprintf(f, "\n");
    fprintf(f, "\n");
}

/* bucket_free : bucket* -> <void> */
void bucket_free(bucket *b)
{
    bucket* temp;
    while (b) { //if head is NULL, list is empty
        temp = b; //store head in temp
        b = b->next; //move to next node
        free(temp->s);
        free(temp);
    }
}