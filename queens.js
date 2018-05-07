function canQueenBeTaken(positions, boardScale){
	//Dont iterate over potato input
	if (boardScale < 2 || positions.length < 2){
		return false
	}
	return checkQueenInPathOfQueen(positions);
}
//Y = MX + B
//Y1 = Y2
//X1 = X2
//Y1 - X1 = Y2 - X2
//Y1 + X1 = Y2 + X2

function checkQueenInPathOfQueen(positions) {
	let intersect = false;
	while (!intersect && positions.length !==0) {
		const currentQueen = positions.pop();
		positions.map((queen)=>{
			if(currentQueen[0] === queen[0]){
				intersect = true;
			}
			if(currentQueen[1] === queen[1]){
				intersect = true;
			}
			if((currentQueen[1] - currentQueen[0]) === (queen[1] - queen[0])){
				intersect = true;
			}
			if((currentQueen[1] + currentQueen[0]) === (queen[1] + queen[0])){
				intersect = true;
			}
		})
	}

	return intersect;

}

module.exports = {canQueenBeTaken};