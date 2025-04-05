function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<About />} />
        <Route path="/catalog/:id" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
