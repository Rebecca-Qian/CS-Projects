/* Specifications of bucket definitions */

#ifndef _BUCKET_H
#define _BUCKET_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* bucket: linked list of hash table entries
 * stores the hash with the string for faster comparison
 */
typedef struct bucket bucket;
struct bucket {
  char* key;
  unsigned long int hash; 
  object* value;
  bucket* next;
};

/* bucket_cons : Given a string, a hash function, and a bucket
 * inserts the string into the bucket
 */
bucket *bucket_cons(char* s, unsigned long h, bucket* b);

/* bucket_num_entries : given a bucket pointer, 
 * returns the number of linked list entries
 */
unsigned int bucket_num_entries(bucket* b);

/* bucket_contains : checks that hashes are equal,
 * then looks for string key in bucket
 * returns pseudo-boolean indicating whether bucket contains key
 */
int bucket_contains(char* s, unsigned long int h, bucket* b);

/* bucket_show : displays bucket to FILE* f
 * debugging purposes
 */
void bucket_show(FILE* f, bucket* b);

/* bucket_free : given a bucket* b
 * frees every node in the linked list
 */
void bucket_free(bucket *b);

#endif