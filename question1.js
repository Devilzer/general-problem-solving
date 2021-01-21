// 1. Find the number of islands Given a boolean 2D matrix, find the number of islands. A group of connected 1s forms an island.

const matrix = [
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1]
    ];
    

    var numberOfIsland = function(mat){
        const markIsland = (mat,x,y,r,c)=>{
            if(x<0||x>=r ||y<0 || y>=c ||mat[x][y]!==1){
                return;
            }
            mat[x][y] = 2;
            //recursive call
            markIsland(mat,x-1,y,r,c); //top
            markIsland(mat,x-1,y+1,r,c); //top-right
            markIsland(mat,x,y+1,r,c); //right
            markIsland(mat,x+1,y+1,r,c); //bottom-right
            markIsland(mat,x+1,y,r,c); //bottom 
            markIsland(mat,x+1,y-1,r,c); //bottom -left
            markIsland(mat,x,y-1,r,c); //left
            markIsland(mat,x-1,y-1,r,c); //top-left
        }

        var count = 0;
        for(let i=0;i<mat.length;i++){
            for(let j=0;j<mat[0].length;j++){
                if(mat[i][j]===1){
                    markIsland(mat,i,j,mat.length,mat[0].length);
                    count += 1;
                }
            }
        }
        return count;
    }

console.log(numberOfIsland(matrix));