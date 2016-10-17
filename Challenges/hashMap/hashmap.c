#include <stdio.h>
#include <stdlib.h>
#include "hashmap.h"

/* 
 * Allocate space for a new hashmap of given size
 * Initializes all buckets to the empty list
 */
hashmap *constructor(unsigned int sz)
{
    hashmap* hashmap_new = (hashmap*)malloc(sizeof(hashmap));
    bucket** buckets = (bucket**)malloc(sizeof(bucket*)*sz);
    for (int i = 0; i < sz; i++) {
        buckets[i] = NULL;
    }
    hashmap_new->buckets = buckets;
    hashmap_new->size = sz;
    return hashmap_new;
}

/* 
 * Print representation of bucket to f for debugging purposes
 */
void bucket_show(FILE *f, bucket *b)
{
    if (!b) {
        fprintf(f, "empty bucket\n");
    }
    while (b != NULL) {
        fprintf(f, "%s\n", b->key);
        b = b->next;
    }
}

/*
 * Print representation of the hashmap to f for debugging purposes
 */
void hashmap_show(FILE *f, hashmap *t)
{
    for (int n = 0; n < t->size; n++) {
        fprintf(f, "Bucket %d:\n", n);
        bucket_show(f, t->buckets[n]);
        fprintf(f, "\n");
    }
}

/* 
 * Compute hash code for given string
 */
unsigned long int hashfn(char *s)
{
    unsigned long int res = 17;
    for (; *s != '\0'; s++) {
        res = res*37 + *s;
    }
    return res;
}

/* 
 * Given a string key, value, hash and a bucket,
 * Insert the string into the bucket
 * Store the hash in the bucket for faster comparison
 */
bucket *bucket_cons(char *key, void *value, unsigned long h, bucket *b)
{
    bucket* new_bucket = (bucket*)malloc(sizeof(bucket));
    if (!new_bucket) {
        fprintf(stderr, "error (bucket_cons): malloc failed");
        exit(1);
    }
    new_bucket->key = strdup(key);
    new_bucket->value = value;
    new_bucket->hash = h;
    new_bucket->next = b;
    return new_bucket;
}

/*
 * Add a string key and associated value to hashmap
 * Pseudo-boolean returns 1 on success, 0 on failure
 * Note: set does not remove duplicates
 */
int set(char *key, void* value, hashmap *t)
{
    unsigned int bin = hashfn(key);
    unsigned int index = bin % t->size;
    t->buckets[index] = bucket_cons(key, value, bin, t->buckets[index]);

    // Check that key and value are inserted
    bucket* b = t->buckets[index];
    if (b->value == value && *(b->key) == *key) {
        return 1;
    } else {
        return 0;
    }
}

/* 
 * Given key and hashmap, returns pointer to value
 * Return NULL if no value set
 */
void* get(char* key, hashmap* t) {
    unsigned int bin = hashfn(key);
    unsigned int index = bin % t->size;
    bucket* node;

    node = t->buckets[index];
    while (node) {
        if (bin == node->hash) {
            if (strcmp(key, node->key) == 0) {
                return node->value;
            }
        }
        node = node->next;
    }
    return NULL;
}

/* 
 * Given key and hashmap, deletes associated value
 * Return pointer to value on success
 * Return null if doesn't exist
 * Note: based on specifications, does not delete key
 * or remove the given bucket
 */
void* delete(char* key, hashmap* t) {
    unsigned int bin = hashfn(key);
    unsigned int index = bin % t->size;
    bucket* node;
    void* rem;

    node = t->buckets[index];
    while (node) {
        if (bin == node->hash) {
            if (strcmp(key, node->key) == 0) {
                rem = node->value;
                node->value = NULL;
                return rem;
            }
        }
        node = node->next;
    }
    return NULL;
}

/* 
 * Return a float value representing the load factor,
 * or the mean number of elements per bucket
 */
float load(hashmap *t)
{
    unsigned int hashmap_sum = 0;

    for (int i = 0; i < t->size; i++) {
        bucket* b = t->buckets[i];
        unsigned int bucket_sum = 0;
        while (b != NULL) {
            b = b->next;
            bucket_sum++;
        }
        hashmap_sum += bucket_sum;
    }
    return hashmap_sum/(t->size/1.0);
}

/*
 * Free all memory for a given bucket
 */
void bucket_free(bucket *b)
{
    bucket* temp;
    // If head is NULL, list is empty
    while (b) {
        // Store head in temp
        temp = b;
        // Move to next node
        b = b->next;
        free(temp->key);
        free(temp);
    }
}

/*
 * Free all memory for a given hashmap
 */
void hashmap_free(hashmap *t)
{
    for (int n = 0; n < t->size; n++) {
        bucket_free(t->buckets[n]);
    }
    free(t);
}
