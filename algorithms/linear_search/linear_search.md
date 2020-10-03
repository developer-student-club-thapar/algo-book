#linear search

##performing a linear search in an array 

this algorithm is used to find a an element in an integer array it can be further modified into to search for a character or a string 

##pre-requisites

-any IDE of choice 
-c++ complier installed in computer (mingw or glb)

##explanation 

this algorithm uses iteration. it iterates over every element till the desired element is found if the desired element is not found in the array it returns "not found".

this algorithm only searched for the element once thus if there are multiple occurences of the element the first occurence would be returned 


##pseudocode
        procedure linear_search (list, value)

        for each item in the list
            if match item == value
                return the item's location
            end if
        end for
end procedure

##external content 
1. https://www.tutorialspoint.com/data_structures_algorithms/linear_search_algorithm.htm

2.  https://www.geeksforgeeks.org/linear-search/