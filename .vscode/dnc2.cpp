#include <iostream>
#include <string>

using namespace std;

void printPermutation(string str, int index) {
    // Base case: If index reaches the end of the string, print the permutation
    if (index == str.length()) {
        cout << str << " ";
        return;  
    }

    // Processing: Swap the current character with every character ahead
    for (int j = index; j < str.length(); j++) {
        swap(str[index], str[j]);  // Swap characters
        printPermutation(str, index + 1);  // Recur for the next index
        //swap(str[index], str[j]);  // Backtrack to restore the original string
    }
}

int main() {
    string str = "abc";
    int index = 0;
    printPermutation(str, index);
    return 0;
}
