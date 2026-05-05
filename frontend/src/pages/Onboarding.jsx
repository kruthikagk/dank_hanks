import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Onboarding() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [userData, setUserData] = useState({
    name: "",
    userType: "",
    goal: "",
    skills: [],
    timePerDay: ""
  })

  const skillOptions = [
    "Python", "JavaScript", "Excel",
    "Communication", "Design", "Marketing",
    "Writing", "Data Analysis", "Leadership",
    "Project Management", "Sales", "Finance"
  ]

  const toggleSkill = (skill) => {
    if (userData.skills.includes(skill)) {
      setUserData({ ...userData, skills: userData.skills.filter(s => s !== skill) })
    } else {
      setUserData({ ...userData, skills: [...userData.skills, skill] })
    }
  }

  const handleSubmit = () => {
    localStorage.setItem("userData", JSON.stringify(userData))
    navigate("/assessment")
  }

  const cardStyle = (selected) => ({
    padding: "12px",
    backgroundColor: selected ? "#1D4ED8" : "#1F2937",
    border: selected ? "2px solid #3B82F6" : "2px solid #374151",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    textAlign: "left",
    width: "100%",
    marginBottom: "10px"
  })

  const containerStyle = {
    backgroundColor: "#111827",
    minHeight: "100vh",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "20px"
  }

  const boxStyle = {
    backgroundColor: "#1F2937",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "450px",
    border: "1px solid #374151"
  }

  const nextBtn = (disabled) => ({
    marginTop: "20px",
    padding: "12px",
    width: "100%",
    backgroundColor: disabled ? "#374151" : "#3B82F6",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: disabled ? "not-allowed" : "pointer",
    fontSize: "16px"
  })

  const backBtn = {
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    backgroundColor: "transparent",
    border: "1px solid #374151",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    fontSize: "14px"
  }

  return (
    <div style={containerStyle}>

      {/* Logo */}
      <h2 style={{ color: "#3B82F6", marginBottom: "20px" }}>
        PathfinderAI
      </h2>

      {/* Progress Bar */}
      <div style={{
        width: "100%",
        maxWidth: "450px",
        backgroundColor: "#374151",
        borderRadius: "999px",
        height: "6px",
        marginBottom: "20px"
      }}>
        <div style={{
          width: `${(step / 5) * 100}%`,
          backgroundColor: "#3B82F6",
          height: "6px",
          borderRadius: "999px",
          transition: "width 0.3s"
        }} />
      </div>

      <div style={boxStyle}>

        {/* STEP 1 - Who are you */}
        {step === 1 && (
          <div>
            <h2 style={{ marginBottom: "5px" }}>Who are you? 👋</h2>
            <p style={{ color: "#9CA3AF", marginBottom: "20px" }}>
              Select the option that best describes you.
            </p>

            {[
              { value: "Student", label: "🎓 Student", desc: "Exploring career paths" },
              { value: "Professional", label: "💼 Working Professional", desc: "Want to upskill or switch" },
              { value: "Job Seeker", label: "🔍 Job Seeker", desc: "Looking for employment" }
            ].map(option => (
              <button
                key={option.value}
                onClick={() => setUserData({ ...userData, userType: option.value })}
                style={cardStyle(userData.userType === option.value)}
              >
                <div style={{ fontWeight: "bold" }}>{option.label}</div>
                <div style={{ color: "#9CA3AF", fontSize: "13px" }}>{option.desc}</div>
              </button>
            ))}

            <button
              onClick={() => setStep(2)}
              disabled={!userData.userType}
              style={nextBtn(!userData.userType)}
            >
              Next →
            </button>
          </div>
        )}

        {/* STEP 2 - Goal */}
        {step === 2 && (
          <div>
            <h2 style={{ marginBottom: "5px" }}>What is your goal? 🎯</h2>
            <p style={{ color: "#9CA3AF", marginBottom: "20px" }}>
              What do you want to achieve?
            </p>

            {[
              "Get my first job",
              "Switch to a new career",
              "Learn a new skill",
              "Start a business",
              "Get a promotion",
              "Freelance work"
            ].map(goal => (
              <button
                key={goal}
                onClick={() => setUserData({ ...userData, goal })}
                style={cardStyle(userData.goal === goal)}
              >
                {goal}
              </button>
            ))}

            <button
              onClick={() => setStep(3)}
              disabled={!userData.goal}
              style={nextBtn(!userData.goal)}
            >
              Next →
            </button>
            <button onClick={() => setStep(1)} style={backBtn}>← Back</button>
          </div>
        )}

        {/* STEP 3 - Skills */}
        {step === 3 && (
          <div>
            <h2 style={{ marginBottom: "5px" }}>Your current skills? 💪</h2>
            <p style={{ color: "#9CA3AF", marginBottom: "20px" }}>
              Select all that apply. OK if none.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {skillOptions.map(skill => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: userData.skills.includes(skill) ? "#1D4ED8" : "#1F2937",
                    border: userData.skills.includes(skill) ? "2px solid #3B82F6" : "2px solid #374151",
                    borderRadius: "999px",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "13px"
                  }}
                >
                  {skill}
                </button>
              ))}
            </div>

            <button onClick={() => setStep(4)} style={nextBtn(false)}>
              Next →
            </button>
            <button onClick={() => setStep(2)} style={backBtn}>← Back</button>
          </div>
        )}

        {/* STEP 4 - Time Per Day */}
        {step === 4 && (
          <div>
            <h2 style={{ marginBottom: "5px" }}>Time available daily? ⏱️</h2>
            <p style={{ color: "#9CA3AF", marginBottom: "20px" }}>
              Be realistic. Consistency beats intensity.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {[
                { value: "30 mins", desc: "Busy schedule" },
                { value: "1 hour", desc: "Balanced pace" },
                { value: "2 hours", desc: "Focused learner" },
                { value: "3+ hours", desc: "Full dedication" }
              ].map(time => (
                <button
                  key={time.value}
                  onClick={() => setUserData({ ...userData, timePerDay: time.value })}
                  style={cardStyle(userData.timePerDay === time.value)}
                >
                  <div style={{ fontWeight: "bold" }}>{time.value}</div>
                  <div style={{ color: "#9CA3AF", fontSize: "12px" }}>{time.desc}</div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(5)}
              disabled={!userData.timePerDay}
              style={nextBtn(!userData.timePerDay)}
            >
              Next →
            </button>
            <button onClick={() => setStep(3)} style={backBtn}>← Back</button>
          </div>
        )}

        {/* STEP 5 - Name */}
        {step === 5 && (
          <div>
            <h2 style={{ marginBottom: "5px" }}>What is your name? 😊</h2>
            <p style={{ color: "#9CA3AF", marginBottom: "20px" }}>
              So we can personalize your experience.
            </p>

            <input
              type="text"
              placeholder="Enter your name"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#111827",
                border: "1px solid #374151",
                borderRadius: "8px",
                color: "white",
                fontSize: "16px",
                boxSizing: "border-box"
              }}
            />

            <button
              onClick={handleSubmit}
              disabled={!userData.name}
              style={nextBtn(!userData.name)}
            >
              Generate My Path 🚀
            </button>
            <button onClick={() => setStep(4)} style={backBtn}>← Back</button>
          </div>
        )}

      </div>

      {/* Step Counter */}
      <p style={{ color: "#6B7280", marginTop: "15px", fontSize: "13px" }}>
        Step {step} of 5
      </p>

    </div>
  )
}

export default Onboarding