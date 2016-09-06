#ifndef _HASHMAP_H
#define _HASHMAP_H

#include "bucket.h"

/* hash map of strings, with linked list buckets */

/* hashmap : contains a hash function,
 * array of buckets
 * number of buckets
 */
struct hashmap {
  unsigned long int(*hash)(char *);
  bucket **buckets;
  unsigned int n_buckets;
};
typedef struct hash_table hashmap;

/* hash_fn : compute hash code for given string
 */
unsigned long int hash_fn(char* s);

/* new_hashmap : allocate space for a new hashmap
 * of given size with empty buckets
 */
hashmap* new_hashmap(unsigned long int(*h)(char*), unsigned int size);

/* hashmap_num_entries : return the total number of entries in all buckets 
 */
unsigned int hashmap_num_entries(hashmap *t);

/* load_factor : the mean number of elements per bucket. 
 */
double load_factor(hashmap* t);

/* hashmap_max_bucket : returns the max number of items in any
 * bucket, and the index of that bucket
 */
void hashmap_max_bucket(hashmap* t, unsigned int* m, unsigned int* i);

/* hashmap_ins : add string s to hash table t 
 * return number of strings in bucket after insertion
 */
void hashmap_ins(char* s, hashmap* t, unsigned int* n);

/* hashmap_member : test membership of given string in given table 
 */
int hashmap_member(char* s, hashmap* t);

/* hashmap_show : print a representation of the hash table to f
 * debugging purposes
 /
void hashmap_show(FILE *f, hashmap *t);

/* hashmap_free : frees everything
 */
void hashmap_free(hashmap *t);

#endif