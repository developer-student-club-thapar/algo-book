void Radix_Sort(char names[5][5], int max)
{
    int i, j;

    //1.initialize 27 bucket(array of cursor)
    for (i = 0; i < 27; i++)
    {
        buckets[i] = CursorAlloc();
    }
    for (j = 0; j < 5; j++)
    {
        for (i = 0; i < 5; i++)
        {
            switch (names[j][i])
            {
                case 'a':
                    // initialize first list in the first cursor
                    // for small letters  and point head to 0
                    // List list1 = initializeList();
                    buckets[0].Element = names[j];
                    PrintFreeList();
                    break;
            }
        }
    }
}
