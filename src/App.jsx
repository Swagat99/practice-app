import Header from './components/Header'

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Header />
      <h1>Hello World</h1>
      <p>Current year: {currentYear}</p>
    </div>
  )
}

export default App
