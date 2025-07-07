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

function areAnagrams(str1: String, str2: String): boolean {
    if(str1.length !== str2.length) return false;

    const frequencyMap: Record<string, number> = {};
    const len = str1.length;

    for(let i=0; i<len; i++){
        const char1 = str1[i].toLowerCase();
        const char2 = str2[i].toLowerCase();

        frequencyMap[char1] = (frequencyMap[char1] || 0) + 1;
        frequencyMap[char2] = (frequencyMap[char2] || 0) - 1;
    }

    return Object.values(frequencyMap).every(count => count === 0);
}

module.exports = { areSame, areAnagrams }