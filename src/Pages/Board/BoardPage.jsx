// import Kanban from 'react-kanban-dnd';
// import Board, { addCard } from 'react-kanban-dnd'
import Board, {moveCard , moveColoumn , removeCard ,addCard } from '@asseinfo/react-kanban'
import "@asseinfo/react-kanban/dist/styles.css";
// import { board } from '../../data';
import { boardData } from '../../data';
import useBoard from '../../store/Board'
import "./Board.css"

const BoardPage = () => {

  const {board , setBoard} = useBoard()

  const handleColumnMove = (_card, source, destination) => {
    const updatedBoard = moveColumn(board, source, destination)
    setBoard(updatedBoard)
}
const handleCardMove=(_card , source , destination)=>{
  const updatedBoard=moveCard(board , source , destination)
  setBoard(updatedBoard)

}


  return (
    <div  className="board-container">
      <span>Trello Board</span>

      <Board
        allowAddColumn
        allowRenameColumn
        allowRemoveCard
        onCardDragEnd={handleCardMove}
        onColumnDragEnd={handleColumnMove}
      > 
        {boardData}
      </Board>
      
    </div>
  )
}

export default BoardPage
