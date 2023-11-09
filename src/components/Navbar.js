import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="../images/Group.png" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item mr-5">
                                <a class="nav-link active " aria-current="page" href="\">Home</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link" href="\data">Data</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link" href="\privateparty">Private Party</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
