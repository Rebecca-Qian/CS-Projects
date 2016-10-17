#ifndef _HASHMAP_H
#define _HASHMAP_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* 
 * Bucket: linked list of hash table entries
 * Stores a string key, value, hash code and
 * pointer to the next bucket (or null)
 */
typedef struct bucket bucket;

struct bucket {
  char *key;
  void *value;
  unsigned long int hash; 
  bucket *next;
};

/*
 * Hashmap: fixed-size hashmap of keys and values
 * Stored in linked list buckets
 */
typedef struct hashmap hashmap;

struct hashmap {
  bucket **buckets;
  unsigned int size;
};

/*
 * Allocate space for a new hashmap of given size
 * All buckets initialized to empty list
 */
hashmap *constructor(unsigned int size);

/*
 * Display bucket to FILE *f for debugging
 */
void bucket_show(FILE *f, bucket *b);

/*
 * Display representation of hashmap to f
 */
void hashmap_show(FILE *f, hashmap *t);

/* 
 * Compute hash code for given string
 * to minimize collisions
 */
unsigned long int hashfn(char *s);

/*
 * Given a string key, value and a bucket, insert
 * a new bucket containing the key and value
 * into the head of the bucket
 */
bucket *bucket_cons(char *key, void* value, unsigned long h, bucket *b);

/*
 * Add string key and value to hashmap t 
 * Pseudo boolean returns 1 if successful, 0 on failure
 * Does not remove duplicates
 */
int set(char *key, void *value, hashmap *t);

/* 
 * Given key and hashmap, returns pointer to value
 * Return NULL if no value set
 */
void* get(char* key, hashmap* t);

/* 
 * Given key and hashmap, deletes associated value
 * Return pointer to value on success
 * Return null if doesn't exist
 * Note: based on specifications, does not delete key
 * or remove the given bucket
 */
void* delete(char* key, hashmap* t);

/* 
 * Return a float value representing the load factor,
 * or the mean number of elements per bucket
 */
float load(hashmap *t);

/*
 * Free all memory for a given bucket
 */
void bucket_free(bucket *b);

/*
 * Free all memory for a given hashmap
 */
void hashmap_free(hashmap *t);

#endif /* _BUCKET_H */
