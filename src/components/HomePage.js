import React from 'react';

class HomePage extends React.Component {

  render() {
    return (
      <div className="homepage">
        <p>Eftersom Sverige tog sig vidare till VM måste vi ju heja och satsa internt på hur långt vi kan gå!</p>
        <p>Reglerna är följande, för att vara med måste du skapa en profil och loggar in på "Dina bet", där kan du föra in resulteten för varje match under VM</p>
        <p>Varje rätt resultat kommer ge dig 3 poäng, för rätt lag som går vidare ger dig 1 poäng.</p>
        <p>För varje rätt lag som går vidare till semifinal ger dig 3 poäng och 5 poäng för varje rätt gissat lag i finalen</p>
        <p>Skulle det sedan vara oavgjort efter det avgörs spelet med en slutfråga hur många mål totalt som gjorts under VM (exklusiv kvalmatcherna)</p>
      </div>);
  }
}

export default HomePage;
