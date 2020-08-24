export function mergesort(array){
    const animations = [];
    if(array.length<=1) return array;
    const auxiliaryArray = array.slice();
    mergesorthelper(array,0,array.length-1,auxiliaryArray,animations);
    return animations;
}

function mergesorthelper(mainarray, startindex, endindex, auxiliaryArray, animations){
    if(startindex===endindex)
    return;

    const mid = Math.floor((startindex+endindex)/2);
    mergesorthelper(auxiliaryArray,startindex,mid,mainarray,animations);
    mergesorthelper(auxiliaryArray,mid+1,endindex,mainarray,animations);
    domerge(mainarray,startindex,mid,endindex,auxiliaryArray,animations);
}

function domerge(mainarray,startindex,mid,endindex,auxiliaryArray,animations){
    let k = startindex;
    let i = startindex;
    let j = mid+1;

    while((i<=mid)&&(j<=endindex)){
        animations.push([i,j]);
        animations.push([i,j]);
        if(auxiliaryArray[i]<=auxiliaryArray[j])
        {
            animations.push([k,auxiliaryArray[i]]);
            mainarray[k] = auxiliaryArray[i];
            k++;
            i++;
        }
        else
        {
            animations.push([k,auxiliaryArray[j]]);
            mainarray[k] = auxiliaryArray[j];
            k++;
            j++;
        }
    }

    while(i<=mid){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,auxiliaryArray[i]]);
        mainarray[k] = auxiliaryArray[i];
        k++;
        i++;
    }

    while(j<=endindex){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,auxiliaryArray[j]]);
        mainarray[k] = auxiliaryArray[j];
        k++;
        j++;
    }
}
