import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Forecast.css';
import CurrentDay from '../CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast';


const Forecast = ({forecast}) => (
    <Container className='box forecast'>
        <Row className='row'>
            <Col xs={12} md={4}>
                <div className='card'>
                    <CurrentDay {...forecast.today}/>
                </div>
            </Col>
            <Col md={8} className="description d-flex flex-column justify-content-between">
                <CurrentDayDescription todayDetails={forecast.todayDetails}/>
                <UpcomingDaysForecast upcomingDays={forecast.upcomingDays}/>
            </Col>
        </Row>
    </Container>
);

export default Forecast;
