function areSame(arr1: number[], arr2: number[]): boolean {
    if(arr1.length != arr2.length) return false;
    
    let a: Record<number, number> = {};
    let b: Record<number, number> = {};

    arr1.forEach(n => {
        if(a[n]) a[n]++;
        else a[n] = 1;
     }
    );
    
    arr2.forEach(n => {
        if(b[n]) a[n]++;
        else b[n] = 1;
     }
    );

    console.log(a);
    console.log(b);
    
    
    
    return false;
}

module.exports = { areSame }