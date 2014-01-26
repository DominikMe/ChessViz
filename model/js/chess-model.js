var ChessModel = function() {
	Figure = function(id,type,color,row,column) {
		this.id = id;
		this.type = type;
		this.color = color;
		this.row = row;
		this.column = column;
	}
	
	var startState = [
			new Figure(1,'pawn','white',2,1),
			new Figure(2,'pawn','white',2,2),
			new Figure(3,'pawn','white',2,3),
			new Figure(4,'pawn','white',2,4),
			new Figure(5,'pawn','white',2,5),
			new Figure(6,'pawn','white',2,6),
			new Figure(7,'pawn','white',2,7),
			new Figure(8,'pawn','white',2,8),
			new Figure(9,'rook','white',1,1),
			new Figure(10,'knight','white',1,2),
			new Figure(11,'bishop','white',1,3),
			new Figure(12,'queen','white',1,4),
			new Figure(13,'king','white',1,5),
			new Figure(14,'bishop','white',1,6),
			new Figure(15,'knight','white',1,7),
			new Figure(16,'rook','white',1,8),
			
			new Figure(17,'pawn','black',7,1),
			new Figure(18,'pawn','black',7,2),
			new Figure(19,'pawn','black',7,3),
			new Figure(20,'pawn','black',7,4),
			new Figure(21,'pawn','black',7,5),
			new Figure(22,'pawn','black',7,6),
			new Figure(23,'pawn','black',7,7),
			new Figure(24,'pawn','black',7,8),
			new Figure(25,'rook','black',8,1),
			new Figure(26,'knight','black',8,2),
			new Figure(27,'bishop','black',8,3),
			new Figure(28,'queen','black',8,4),
			new Figure(29,'king','black',8,5),
			new Figure(30,'bishop','black',8,6),
			new Figure(31,'knight','black',8,7),
			new Figure(32,'rook','black',8,8)
			];
			
	this.state = startState;
	
	this.move = function(figure,row,column) {
		figure.row = row;
		figure.column = column;
	}
}