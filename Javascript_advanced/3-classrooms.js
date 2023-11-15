function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
      return () => {
        return seat;
      };
    }
    let students = [];
    for (let i = 0; i < numberOfStudents; i++) {	
      let students_seats = studentSeat(i + 1);
      students[i] = students_seats;
     }
     return students;
   }
 
   classRoom = createClassRoom(10);