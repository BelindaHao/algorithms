function areSame(arr1: number[], arr2: number[]): boolean {
    if(arr1.length !== arr2.length) return false;
    
    const frequencyMap: Record<number, number> = {};
    
    for (const num of arr1) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    
    for (const num of arr2) {
        if(!frequencyMap[num]) return false;
        frequencyMap[num]--;
    }
    
    return true;
}

module.exports = { areSame }