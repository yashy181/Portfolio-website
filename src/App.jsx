function App() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #000000, #111827)",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >

      {/* HERO SECTION */}
      <div
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >

        <h1
          style={{
            fontSize: "70px",
            color: "#60a5fa",
            marginBottom: "10px",
          }}
        >
          Yash Yadav
        </h1>

        <h2
          style={{
            color: "#d1d5db",
            fontSize: "30px",
          }}
        >
          Full Stack Developer & AI Enthusiast
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "30px auto",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#9ca3af",
          }}
        >
          Passionate Computer Science student focused on building
          AI-powered applications, modern web platforms, and
          developer tools using React, JavaScript, and AI APIs.
        </p>

      </div>

      {/* SKILLS SECTION */}
      <div
        style={{
          padding: "40px",
          textAlign: "center",
        }}
      >

        <h1
          style={{
            fontSize: "45px",
            color: "#22c55e",
          }}
        >
          Skills
        </h1>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >

          {[
            "React",
            "JavaScript",
            "Python",
            "Node.js",
            "MongoDB",
            "AI APIs",
            "GitHub",
            "DBMS",
          ].map((skill) => (
            <div
              key={skill}
              style={{
                background: "#1f2937",
                padding: "15px 25px",
                borderRadius: "10px",
                fontSize: "18px",
              }}
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

      {/* PROJECTS SECTION */}
      <div
        style={{
          padding: "50px 20px",
          textAlign: "center",
        }}
      >

        <h1
          style={{
            fontSize: "45px",
            color: "#a855f7",
          }}
        >
          Projects
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
            marginTop: "40px",
            padding: "20px",
          }}
        >

          {[
            "AI Interview Preparation Platform",
            "AI Resume Analyzer",
            "AI Code Reviewer",
            "AI Career Advisor",
          ].map((project) => (
            <div
              key={project}
              style={{
                background: "#111827",
                padding: "30px",
                borderRadius: "15px",
              }}
            >
              <h2>{project}</h2>

              <p
                style={{
                  color: "#9ca3af",
                  marginTop: "15px",
                }}
              >
                AI-powered modern web application built using React and APIs.
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* CONTACT SECTION */}
      <div
        style={{
          padding: "50px 20px",
          textAlign: "center",
        }}
      >

        <h1
          style={{
            fontSize: "45px",
            color: "#f59e0b",
          }}
        >
          Contact
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            color: "#d1d5db",
          }}
        >
          Email: yash@gmail.com
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#d1d5db",
          }}
        >
          GitHub: github.com/yashy181
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#d1d5db",
          }}
        >
          LinkedIn: linkedin.com/in/yash-yadav-348a4a329
        </p>

      </div>

    </div>
  );
}

export default App;