

var slidingPuzzle = function(board) {
    
    var len=board.length/2
    console.log(len)
    var temp=1
    var left=0
    var right=1
    
    while(left<len && right<=len){
        if(board[left]==0){
            temp=board[left]
            board[left]=board[right]
            board[right]=temp
        }
        left++
        right++
    }
    
    return board
};



var board=[0,1,2,4,5,3]
slidingPuzzle(board)