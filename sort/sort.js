function bubbleSort(arr) {
    var _a;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
                break;
            }
        }
    }
}
module.exports = { bubbleSort: bubbleSort };
