#include <stdlib.h>
#include <stdio.h>
#include <math.h>
#include "hashmap.h"

void evidence_constructor()
{
	printf("\n*************** TESTING HASHMAP CONSTRUCTOR ***************\n\n");
	hashmap* new_hashmap = constructor(10);
	printf("PRINTING HASHMAP:\n");
	hashmap_show(stdout, new_hashmap);
	printf("\n");
	free(new_hashmap);
}

void evidence_hashfn()
{
	printf("*************** TESTING HASH FUNCTION ****************\n\n");
	printf("Expecting: 27226\nResult: %lu\n", hashfn("hi"));
	printf("Expecting: 1379027925\nResult: %lu\n", hashfn("hello"));
	printf("Expecting: 1002211\nResult: %lu\n", hashfn("dog"));
	printf("\n");
}

void evidence_bucket_cons()
{
	printf("*************** TESTING BUCKET INSERTION ***************\n\n");
	char* str = "hi";
	int val = 20;
	bucket* b = NULL;
	bucket* bucket1 = bucket_cons("goodbye", &str, hashfn("goodbye"), b);
	printf("PRINTING BUCKET:\n");
	bucket_show(stdout, bucket1);
	printf("Expecting: hi\nResult: ");
	printf("%s\n", *(char**)(bucket1->value));
	bucket* bucket2 = bucket_cons("hello", &val, hashfn("hello"), bucket1);
	printf("\nPRINTING BUCKET:\n");
	bucket_show(stdout, bucket2);
	printf("\n");
	printf("Expecting: 20\nResult: ");
	printf("%d\n", *(int*)(bucket2->value));
	printf("Expecting: hi\nResult: ");
	printf("%s\n", *(char**)(bucket2->next->value));
	printf("\n");
	free(bucket2);
}

void evidence_set()
{
	printf("*************** TESTING SET AND GET ***************\n\n");
	hashmap* new_hashmap = constructor(10);
	int val = 20;
	char* str = "dog";
	printf("Expecting: 1\nResult: %d\n", set("hello", &val, new_hashmap));
	set("goodbye", &str, new_hashmap);
	printf("PRINTING EMPTY HASHMAP:\n");
	hashmap_show(stdout, new_hashmap);
	printf("Expecting: 20\nResult: ");
	void* result1 = get("hello", new_hashmap);
	printf("%d\n", *(int*)result1);
	printf("Expecting: dog\nResult: ");
	void* result2 = get("goodbye", new_hashmap);
	printf("%s\n", *(char**)result2);
	printf("\n");
	free(new_hashmap);
}

void evidence_delete()
{
	printf("*************** TESTING DELETE ***************\n\n");
	hashmap* new_hashmap = constructor(10);
	int val = 20;
	char* str = "dog";
	set("rebecca", &val, new_hashmap);
	set("hello", &str, new_hashmap);
	printf("PRINTING HASHMAP:\n");
	hashmap_show(stdout, new_hashmap);
	printf("Expecting: 20\nResult: ");
	void* result1 = get("rebecca", new_hashmap);
	printf("%d\n", *(int*)result1);
	printf("Expecting: dog\nResult: ");
	void* result2 = get("hello", new_hashmap);
	printf("%s\n", *(char**)result2);
	printf("Delete value associated with rebecca\n");
	void* result = delete("rebecca", new_hashmap);
	printf("Expecting: 20\nResult: ");
	printf("%d\n", *(int*)result);
	//printf("Testing Error: %d\n", *(int*)get("rebecca", new_hashmap));
	printf("\n");
	free(new_hashmap);
}

void evidence_float()
{
	printf("**************** TESTING FLOAT ***************\n\n");
	hashmap* new_hashmap = constructor(10);
	int val = 20;
	char* str = "dog";
	float num = 2.33333;
	set("rebecca", &val, new_hashmap);
	set("hello", &str, new_hashmap);
	printf("Expecting: 0.2\nResult: %lf\n", load(new_hashmap));
	set("happy", &num, new_hashmap);
	printf("Expecting: 0.3\nResult: %lf\n", load(new_hashmap));
	set("hello", &num, new_hashmap);
	printf("Expecting: 0.4\nResult: %lf\n", load(new_hashmap));
	free(new_hashmap);
	printf("\n");
}

int main(int argc, char* argv[]) {
	evidence_constructor();
	evidence_hashfn();
	evidence_bucket_cons();
	evidence_set();
	evidence_delete();
	evidence_float();
	return 0;
}
