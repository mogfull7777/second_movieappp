import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const App = () => {

    //1. 영화 데이터 담는 그릇 설정.
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const add = "https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1";

        try {
            const res = await axios.get(add);

            console.log("+++++++++++", res.data.results)
            setMovies(res.data.results)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getMovies()
    })

    return (
        <div>
                <div>
                    <Container>
                        <Row>
                            {movies && movies.map(m => (
                                <Col className={"mt-5"}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + m.poster_path}  />
                                        <Card.Body>
                                            <Card.Title>{m.title.slice(0, 15)}</Card.Title>
                                            <Card.Text>
                                                {m.overview.slice(0, 90)}
                                            </Card.Text>
                                            <Card.Text>
                                                출시일 : {m.release_date}
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                             ))};
                        </Row>
                    </Container>
                </div>
        </div>
    );
};

export default App;