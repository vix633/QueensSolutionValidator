const express = require('express');
const router = express.Router();
const queens = require('../queens');

router.get('/', function (req, res) {
	res.json({
		_actions:{
			Methods:{
				get: {
					Response:'Api usage information'
				},
				post: {
					Params: {
							Positions: '[[number,number]]',
							BoardScale: 'number'
					},
					Response: {
						RIPQueen:'bool'
					}
				}
			}
		}
	})
});

router.post('/', function(req, res) {
  res.json({
	  Positions: req.body.Positions,
	  BoardScale: req.body.BoardScale,
	  RIPQueen: null || queens.canQueenBeTaken(req.body.Positions, req.body.BoardScale) });
});


// This was my first approach, generate a board and scan four times, the two diagonals, vertical and horizontal.
// The scan 4 times method got refactored well past Ctrl+Z range
// function generateBoard(boardScale) {
// 	let board = new Array(boardScale);
//
// 	for (let i = 0;i < boardScale; i++) {
// 		board[i] = new Array(boardScale);
// 		for (let j = 0; j < boardScale; j++){
// 			board[i][j] = {
// 				HasQueen: false,
// 				CanBeTaken: null
// 			}
// 		}
// 	}
// 	return board;
// }
//
// function populateBoard(board, positions){
// 	positions.map((pos)=>{
// 		board[pos[0]][pos[1]].HasQueen = true;
// 	});
//
// 	return board;
// }

module.exports = router;
