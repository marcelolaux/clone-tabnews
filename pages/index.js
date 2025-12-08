function Home() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #1a365d 0%, #0a0a0a 100%)",
            }}
        >
            <h1
                style={{
                    color: "#ffffff",
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: "clamp(1.5rem, 5vw, 3.5rem)",
                    fontWeight: 700,
                    textAlign: "center",
                    letterSpacing: "-0.02em",
                    padding: "2rem",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
            >
                Si vis pacem, para bellum :)
            </h1>
        </div>
    );
}

export default Home;