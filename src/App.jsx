import Header from './components/Header'

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <h1>Hello World</h1>
        <p className="year-text">Current year: <strong>{currentYear}</strong></p>
      </main>
    </div>
  )
}

export default App
