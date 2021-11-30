import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsJournalPlus } from 'react-icons/bs';
import { Input, Button, Card, Row, Col, Container, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';
import AddTask from './component/AddTask';
import ShowTask from './component/ShowTask';
import styles from './component/index.module.css';

const App = () =>{
 

const [todos,setTodos]= useState([]);




const getTodoInParent = value=> {
setTodos([...todos,value]);


}

  return(
   <>
     <Container className={`${styles.shadow} mt-5`} style={{borderRadius: '50px', marginTop: '300px'}}>
        <Row>
          <AddTask getTodoFromChild={ value=> getTodoInParent(value) }/>
          <ShowTask todoFromParent={todos}/>
        </Row>
     </Container>

   </>
  )
}


export default App;
