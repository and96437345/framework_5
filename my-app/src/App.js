import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Информация о городе</h2>
      <h3>Название города:</h3>
      <p>Курск</p>
      <div className="image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Kursk.png/240px-Flag_of_Kursk.png" alt="Курск"/>
      </div>
      <h3>Количество жителей:</h3>
      <p>434 703</p>
      <h3>Название страны:</h3>
      <p>Россия</p>
      <div className="image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/33px-Flag_of_Russia.svg.png" alt="Россия"/>      
      </div>   
    </div>
  );
}

export default App;

