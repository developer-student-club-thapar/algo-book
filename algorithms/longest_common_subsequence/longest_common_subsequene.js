// JavaScript program for Finding Longest Common Subsequence


function lcs(x,y){

	var s,i,j,m,n,
		lcs=[],row=[],c=[],
        left,diag,latch;
        
	if(m<n){s=x;x=y;y=s;}
	m = x.length;
    n = y.length;
    
	for(j=0;j<n;row[j++]=0);
	for(i=0;i<m;i++){
		c[i] = row = row.slice();
		for(diag=0,j=0;j<n;j++,diag=latch){
			latch=row[j];
			if(x[i] == y[j]){row[j] = diag+1;}
			else{
				left = row[j-1]||0;
				if(left>row[j]){row[j] = left;}
			}
		}
	}
	i--,j--;

	while(i>-1&&j>-1){
		switch(c[i][j]){
			default: j--;
				lcs.unshift(x[i]);
			case (i&&c[i-1][j]): i--;
				continue;
			case (j&&c[i][j-1]): j--;
		}
	}
	return lcs.join('');
}

const S1 = "ABCDEFGH"
const S2 = "ABZCDXEFYGH"
console.log(lcs(S1, S2))