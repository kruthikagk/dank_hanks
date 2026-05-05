function Dashboard() {
  const name = localStorage.getItem("userName")

  return (
    <div style={{
      backgroundColor: "#111827",
      minHeight: "100vh",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}>
      <h1 style={{ color: "#3B82F6" }}>
        Dashboard ✅
      </h1>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Hello, {name} 👋
      </p>
    </div>
  )
}

export default Dashboard