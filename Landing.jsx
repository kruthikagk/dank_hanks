import { useNavigate } from "react-router-dom"

function Landing() {
  const navigate = useNavigate()

  return (
    <div style={{
      backgroundColor: "#0F172A",
      minHeight: "100vh",
      color: "white",
      fontFamily: "'Segoe UI', sans-serif"
    }}>

      {/* Navbar */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #1E293B"
      }}>
        <h1 style={{
          color: "#60A5FA",
          fontSize: "24px",
          margin: 0
        }}>
          PathfinderAI
        </h1>

        <button
          onClick={() => navigate("/onboarding")}
          style={{
            backgroundColor: "#3B82F6",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 20px"
      }}>

        {/* Badge */}
        <div style={{
          backgroundColor: "#1E3A5F",
          color: "#60A5FA",
          padding: "6px 16px",
          borderRadius: "999px",
          fontSize: "13px",
          marginBottom: "24px",
          border: "1px solid #3B82F6"
        }}>
          🚀 AI for Personalized Learning
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: "52px",
          fontWeight: "bold",
          lineHeight: "1.2",
          marginBottom: "20px",
          maxWidth: "700px"
        }}>
          Your Personal
          <span style={{ color: "#3B82F6" }}> AI Navigator</span>
        </h1>

        {/* Subheading */}
        <p style={{
          color: "#94A3B8",
          fontSize: "18px",
          maxWidth: "550px",
          lineHeight: "1.7",
          marginBottom: "16px"
        }}>
          Whether you are a student, professional, or job seeker —
          we find your path, suggest free resources, and track your real growth.
        </p>

        <p style={{
          color: "#60A5FA",
          fontSize: "16px",
          marginBottom: "36px",
          fontWeight: "500"
        }}>
          People don't lack resources. They lack direction.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/onboarding")}
          style={{
            backgroundColor: "#3B82F6",
            color: "white",
            border: "none",
            padding: "16px 36px",
            borderRadius: "999px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 0 30px rgba(59,130,246,0.4)"
          }}
        >
          Find My Path →
        </button>

        <p style={{
          color: "#475569",
          fontSize: "13px",
          marginTop: "12px"
        }}>
          Free forever. No courses to buy.
        </p>
      </div>

      {/* 3 User Type Cards */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        padding: "0 40px 80px"
      }}>

        {[
          {
            icon: "🎓",
            title: "Students",
            desc: "Confused about career? We build your personalized path from where you are to where you want to be."
          },
          {
            icon: "💼",
            title: "Professionals",
            desc: "Want to upskill or switch careers? Get a roadmap tailored to your experience and goals.",
          },
          {
            icon: "🔍",
            title: "Job Seekers",
            desc: "No direction? We assess your skills and guide you to the fastest path to employment."
          }
        ].map((card, i) => (
          <div key={i} style={{
            backgroundColor: "#1E293B",
            border: card.highlight
              ? "2px solid #3B82F6"
              : "1px solid #334155",
            borderRadius: "16px",
            padding: "28px",
            maxWidth: "260px",
            textAlign: "center",
            flex: "1 1 220px"
          }}>
            <div style={{ fontSize: "36px", marginBottom: "12px" }}>
              {card.icon}
            </div>
            <h3 style={{
              fontSize: "18px",
              marginBottom: "10px",
              color: card.highlight ? "#60A5FA" : "white"
            }}>
              {card.title}
            </h3>
            <p style={{
              color: "#94A3B8",
              fontSize: "14px",
              lineHeight: "1.6"
            }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <div style={{
        backgroundColor: "#1E293B",
        padding: "60px 40px",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "32px",
          marginBottom: "10px"
        }}>
          How It Works
        </h2>
        <p style={{
          color: "#94A3B8",
          marginBottom: "40px"
        }}>
          Simple. Personalized. Effective.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}>
          {[
            { step: "01", title: "Assess", desc: "Tell us who you are and answer 10 quick questions." },
            { step: "02", title: "Guide", desc: "AI generates your unique personalized learning roadmap." },
            { step: "03", title: "Track", desc: "Complete daily tasks and watch your growth every week." }
          ].map((item, i) => (
            <div key={i} style={{
              backgroundColor: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "16px",
              padding: "28px",
              maxWidth: "220px",
              flex: "1 1 180px"
            }}>
              <div style={{
                color: "#3B82F6",
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "10px"
              }}>
                {item.step}
              </div>
              <h3 style={{ marginBottom: "8px" }}>{item.title}</h3>
              <p style={{
                color: "#94A3B8",
                fontSize: "14px",
                lineHeight: "1.6"
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{
        textAlign: "center",
        padding: "60px 20px"
      }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
          Ready to find your path?
        </h2>
        <button
          onClick={() => navigate("/onboarding")}
          style={{
            backgroundColor: "#3B82F6",
            color: "white",
            border: "none",
            padding: "14px 32px",
            borderRadius: "999px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Start For Free →
        </button>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid #1E293B",
        textAlign: "center",
        padding: "20px",
        color: "#475569",
        fontSize: "13px"
      }}>
        PathfinderAI — Built for Everyone 💙
      </div>

    </div>
  )
}

export default Landing