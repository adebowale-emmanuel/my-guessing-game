#include <studio>
float average (int *arr, int size) {
    Int sum = 0;
    For (int i = 0; i < size; i++){
        sum += arr[i];
    }
    return (float) sum / size;
}

