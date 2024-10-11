
const Home = () => {

    const socialLogin = (variant) => {
        window.location.href = `http://localhost:8080/oauth2/authorization/${variant}`
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
            }}
        >
            <h2>Welcome to the OAuth2 Demo</h2>
            <button
                onClick={() => socialLogin('google')}
                style={{
                    backgroundColor: 'burlywood',
                    color: 'white'
                }}
            >
                Login with Google
            </button>
            <button
                onClick={() => socialLogin('github')}
                style={{
                    backgroundColor: 'black',
                    color: 'white'
                }}
            >
                Login with Github
            </button>
        </div>
    )
}

export default Home