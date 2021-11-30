import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsJournalPlus } from 'react-icons/bs';
import styles from './index.module.css';
import { Input, Button, Card, Row, Col, Container, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';

const AddTask = props => {

    const [content,setContent] = useState("");


    const contentHandler = e => {
       setContent(e.target.value)
    }
    const addToList = () => {
       props.getTodoFromChild(content);
       setContent("");
    }
    
    return(
        <>
            <Col
             className={`${styles.cardBackground} bg-light border p-4`}
             style={{borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}
             md="6">
                <Card>
                    <CardBody >
                    <CardTitle tag="h5">
                        Write Your Task ...
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                    Sarah Moradi
                    </CardSubtitle>
                    <CardText className="pt-3">
                        <Input 
                        value={content}
                        onChange={e=>contentHandler(e)} />
                    </CardText>
                    <div className='d-flex justify-content-center '>
                        <Button 
                        onClick={addToList}
                        color={'success'}
                        style={{paddingBottom: '10px', borderRadius: '50%'}}
                        >
                        <BsJournalPlus size={17}/>
                    </Button>
                    </div>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
}

export default AddTask;