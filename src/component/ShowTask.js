import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsJournalPlus } from 'react-icons/bs';
import styles from './index.module.css';
import { Input, Button, Card, Row, Col, Container, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';

const ShowTask = props => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(props.todoFromParent)
    },[props])



    const deleteHandler = (todo) => {
        
        let result = todos.filter(_todo =>_todo!=todo);

        setTodos(result);

    }
    console.log(todos,props.todoFromParent);

    return(
        <Col
        className={`${styles.cardBackground} bg-light border p-4`}
        style={{borderTopRightRadius: '10px', borderBottomRightRadius: '10px'}}
        md="6">
            
          <h4 className="text-center pb-2">Current Task</h4>
          {todos.length>0 ? 
          todos.map(todo=>
            
          <Card key={todo}>
              <CardBody>
                  <Row 
                  className={`${styles.listItems}`}>
                    <Col sm='12' className="pb-3">
                        <p>
                            {todo}
                        </p>
                    </Col>
                    <Col sm='12' className="pb-1 d-flex justify-content-end">
                        <Button 
                        color={'success'}
                        className='mx-3'>Done</Button>
                        <Button
                        onClick={()=> deleteHandler(todo)}
                        color={'danger'}
                        >Delete</Button>
                    </Col>
                  </Row>
              </CardBody>
            </Card>):
            <p>Task Not Found...</p>
}
          </Col>
    )
}

export default ShowTask;