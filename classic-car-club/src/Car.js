import React from 'react';

function Car({ car }) {
  return (
      <div className="car">
            <h3>{car.name}</h3>
                  <img src={car.image} alt={car.alt} />
                        <p><strong>Specifications:</strong> {car.specs}</p>
                              <p><strong>Engine Details:</strong> {car.details}</p>
                                  </div>
                                    );
                                    }

                                    export default Car;
                                    