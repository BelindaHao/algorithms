function areSame(arr1: number[], arr2: number[]): boolean {
    if(arr1.length != arr2.length) return false;
    
    let a: Record<number, number> = {};
    let b: Record<number, number> = {};

    arr1.forEach(n => {
        a[n] = (a[n] || 0) + 1;
     }
    );
    
    arr2.forEach(n => {
        b[n] = (b[n] || 0) + 1;
     }
    );

    console.log(a);
    console.log(b);
    
    for(let n in a) {
        if(a[n] != b[n])
            return false;
    }
    
    return true;
}

module.exports = { areSame }