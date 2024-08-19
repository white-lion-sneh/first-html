import React from 'react';
import Car from './Car';

const cars = [
  {
      name: "1930 Ford Model A",
          image: "https://example.com/old-car1.jpg",
              alt: "1930 Ford Model A in black color",
                  specs: "1930 Ford Model A, 3.3L Inline-4 engine, 40 hp",
                      details: "The 1930 Ford Model A features a 3.3-liter inline-four engine, known for its simplicity and reliability. It offers a top speed of around 65 mph."
                        },
                          {
                              name: "1967 Chevrolet Camaro",
                                  image: "https://example.com/old-car2.jpg",
                                      alt: "1967 Chevrolet Camaro in red color",
                                          specs: "1967 Chevrolet Camaro, 5.0L V8 engine, 275 hp",
                                              details: "The 1967 Camaro is equipped with a powerful 5.0-liter V8 engine, providing impressive performance and acceleration."
                                                },
                                                  {
                                                      name: "1955 Mercedes-Benz 300SL",
                                                          image: "https://example.com/old-car3.jpg",
                                                              alt: "1955 Mercedes-Benz 300SL in silver color",
                                                                  specs: "1955 Mercedes-Benz 300SL, 3.0L Inline-6 engine, 215 hp",
                                                                      details: "The 300SL features a 3.0-liter inline-six engine, known for its innovation and speed, with a top speed of 150 mph."
                                                                        },
                                                                          {
                                                                              name: "1965 Mustang GT",
                                                                                  image: "https://example.com/old-car25.jpg",
                                                                                      alt: "1965 Mustang GT in blue color",
                                                                                          specs: "1965 Mustang GT, 4.7L V8 engine, 271 hp",
                                                                                              details: "The 1965 Mustang GT comes with a 4.7-liter V8 engine, offering a blend of performance and style that became a classic American icon."
                                                                                                }
                                                                                                ];

                                                                                                function CarList() {
                                                                                                  return (
                                                                                                      <div className="car-list">
                                                                                                            {cars.map((car, index) => (
                                                                                                                    <Car key={index} car={car} />
                                                                                                                          ))}
                                                                                                                              </div>
                                                                                                                                );
                                                                                                                                }

                                                                                                                                export default CarList;
                                                                                                                                