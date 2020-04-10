import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
  
function Races() {
  const [races, setRaces] = useState([]);
  const [champion, setChampion] = useState('');

  useEffect(() => {
    fetch('https://ergast.com/api/f1/2018/results/1.json')
      .then(response => response.json())
      .then(data => {
        setRaces(data.MRData.RaceTable.Races);
      });

    fetch('https://ergast.com/api/f1/2018/driverStandings.json')
      .then(response => response.json())
      .then(data => setChampion(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId));
  }, []);

  return (
    <div className="races-container">
      <h3>F1 Races for 2018</h3>
      <Row>
        {races.map(item => (
          <Col key={item.round} xs={12} className="col">
            <div className="neumorphic card">
              <div className="card-content">
                <div className="card-title">{item.raceName}</div>
                <div className="card-text circuit-name">{item.Circuit.circuitName}</div>
                <div className="card-text">
                  <a
                    href={item.Results[0].Driver.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-text__link"
                  >
                    {`#${item.Results[0].number} ${item.Results[0].Driver.givenName} ${item.Results[0].Driver.familyName}`}
                    {item.Results[0].Driver.driverId === champion && 
                      <span role="img" aria-label="Race Winner" className="margin-default">🏆</span>
                    }
                  </a>
                </div>
                <div className="card-text">
                  <span role="img" aria-label="Race Winner" className="margin-default">⏲</span>
                  {item.Results[0].Time.time}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Races;
