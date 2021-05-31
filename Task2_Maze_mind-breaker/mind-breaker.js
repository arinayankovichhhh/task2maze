let maze = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '+', '+', '+', '#', '+', '+', '+', '#'],
    ['#', '+', '#', '+', '#', '+', '#', '+', '#'],
    ['+', '+', '#', '+', '0', '+', '#', '+', '#'],
    ['#', '#', '#', '+', '#', '#', '#', '#', '#'],
    ['#', '#', '+', '+', '#', '#', '#', '#', '#'],
    ['#', '#', '+', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ];
    
    let steps = [] 
    let left = 'Лево'
    let right = 'Право'
    let up = 'Вверх'
    let down = 'Вниз'
    
    console.log(maze);
    
    function checkPath(start, end) {
      maze[start.y][start.x] = 5;
    
      let siblings = getValidSib(start);
    
      if (siblings.length > 0) {
        for (let i = 0; i < siblings.length; i++) {
          const current = siblings[i];
          if (current.x > start.x) {  
            steps.push(right)
          } if (current.x < start.x) { 
            steps.push(left)
          } if (current.y > start.y) { 
            steps.push (down)
          } if ( current.y < start.y) { 
            steps.push (up)
          }
    
          const isSolved = current.x === end.x && current.y === end.y;
          const notVisited = maze[current.y][current.x] !== 5;
    
          if (isSolved || (notVisited && checkPath(current, end))) {
            console.log(current);
            return true;
          }
        }
      }
      return false;
    }
    
    function getValidSib(cord) {
      const { x, y } = cord;
    
      let cords = [];
    
      if (maze[y - 1] !== undefined) {
        cords.push({ x: x, y: y - 1, val: maze[y - 1][x] });
      }
      if (maze[y + 1] !== undefined) {
        cords.push({ x: x, y: y + 1, val: maze[y + 1][x] });
      }
      if (maze[y][x - 1] !== undefined) {
        cords.push({ x: x - 1, y: y, val: maze[y][x - 1] });
      }
      if (maze[y][x + 1] !== undefined) {
        cords.push({ x: x + 1, y: y, val: maze[y][x + 1] });
      }
    
      return cords.filter((crd) => crd.val === '+');
    }
    
     console.log(checkPath({x: 4, y: 3}, {x: 0, y: 3}))
     console.log(steps)
    
    