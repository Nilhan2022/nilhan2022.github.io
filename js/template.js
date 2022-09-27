class MyHeader extends HTMLElement {
connectedCallback(){
this.innerHTML = `
<header>
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <a href="index.html" class="navbar-brand">
                <h2 class="m-0 text-primary">
                    <!-- <i class="fa fa-book-reader me-3"></i> -->
                    <!-- <img src="img/+tech logo png2.png" alt="logo" class="responsive" > -->
                    <img src="img/logo2.png" alt="logo" class="responsive" >
                    <img src="img/mob-logo.png" alt="logo" class="mobile" >
                </h2>
            </a>
        
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- ///hello nav bar// -->
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <!-- <a href="index.html" class="nav-item nav-link active">Home</a> -->
                    <a href="index.html" class="nav-item nav-link">Home</a>
                    <a href="classes.html" class="nav-item nav-link">Classes</a>
                    <!-- <a href="about.html" class="nav-item nav-link">About Us</a> -->
                    <!-- <a href="classes.html" class="nav-item nav-link">Classes</a> -->
                    <div class="nav-item dropdown">
                        <a href="about.html" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">About Us</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a href="facility.html" class="dropdown-item">Our Academy</a>
                            <a href="appointment.html" class="dropdown-item">Student Guidance</a>
                            <a href="call-to-action.html" class="dropdown-item">Become A Teacher</a>
                            <a href="call-to-action.html" class="dropdown-item">Become A Mentor</a>
                            <a href="call-to-action.html" class="dropdown-item">Become A Entrepreneur</a>
                            <a href="call-to-action.html" class="dropdown-item">Partner With Us</a>
                            <!-- <a href="team.html" class="dropdown-item">Popular Teachers</a> -->
                            <!-- <a href="call-to-action.html" class="dropdown-item">Become A Teachers</a> -->
                            <a href="call-to-action.html" class="dropdown-item">Other Careers</a>

                            
                            <!-- <a href="testimonial.html" class="dropdown-item">Testimonial</a> -->
                            <!-- <a href="404.html" class="dropdown-item">404 Error</a> -->
                            <!-- <a href="FAQ.html" class="dropdown-item">FAQ</a> -->
                        </div>
                    </div>
                    <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                </div>
                <a href="" class="btn btn-primary rounded-pill px-3 d-none d-lg-block">Register<i class="fa fa-arrow-right ms-3"></i></a>
            </div>
        </nav>
        <!-- Navbar End -->
    </header>


`

    }
}
customElements.define('my-header',MyHeader)



document.querySelectorAll('.nav-link').forEach
(link=>{
    if(link.href=== window.location.href){
    //  link.setAttribute('class','nav-item nav-link active')
        link.classList.add('active');
        }
    else {
    // {e.preventDefault();
        link.classList.remove('active')
        }

})