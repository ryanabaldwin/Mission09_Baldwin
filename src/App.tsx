import './App.css'
import teamsData from "./CollegeBasketballTeams.json";

type TeamType = {
  school: string;
  name: string; // mascot
  city: string;
  state: string;
};

function Team({ school, name, city, state}: TeamType) {
  return (
    <>
      <h2>School: {school} {name}</h2>
      <h3>Location: {city}, {state}</h3>
    </>
  );
}

function Welcome() {
  return (
    <>
    <h1>College Basketball Teams</h1>
    <h2>This site displays a list of all college basketball teams</h2>
    </>
    );
}

function TeamsList() {
  const teams = teamsData.teams;

  return (
    <>
      {
        teams.map((singleTeam) => (
          <Team key={singleTeam.school} {...singleTeam} />
        ))
      }
    </>
  );
}


function App() {
  return (
    <>
      <Welcome />
      <TeamsList />
    </>
  );
}

export default App
