import React from 'react';

const MaintenancePerson = () => {
  const people = [
      { name: 'Person 1', tasks: 10 },
      { name: 'Person 2', tasks: 7 },
      { name: 'Person 3', tasks: 5 },
  ];

  const topPeople = people.sort((a, b) => b.tasks - a.tasks).slice(0, 3);

  return (
      <ul>
          {topPeople.map((person, index) => (
              <li key={index}>{`${index + 1}. ${person.name} - ${person.tasks} tasks`}</li>
          ))}
      </ul>
  );
};

export default MaintenancePerson;