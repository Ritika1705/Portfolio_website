import '../src/App.css'

function Navbar()
{
    return (
        <>
            <head>
                <link rel="stylesheet" href="App.css"></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&family=Share+Tech+Mono&display=swap" rel="stylesheet"></link>
            </head>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link zoom" href="/">Home</a>
                        <a class="nav-item nav-link zoom" href="/about">About</a>
                        <a class="nav-item nav-link zoom" href="/contact">Contact</a>
                        </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;