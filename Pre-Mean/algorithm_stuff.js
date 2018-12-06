function bubbleSort(arr) {
    for (var k = 0; k < arr.length; k++) {
        var count = 0; // Count will see if any changes were made, if not then the array must already be sorted
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                count++;
            }
        }
        console.log(count);
        if (count == 0) {
            break;
        }
    }
    console.log(arr);
}

function quickSort(arr, left, right) {
    var len = arr.length,
        pivot,
        partitionIndex;


    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        //sort left and right
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, pivot, left, right) {
    var pivotValue = arr[pivot],
        partitionIndex = left;

    for (var i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function timeASort(sort, arr)
{
    let start = process.hrtime();
    sort(arr);
    let end = process.hrtime();
    return {
        name: sort.name,
        time: calcTime(start,end)
    }
}