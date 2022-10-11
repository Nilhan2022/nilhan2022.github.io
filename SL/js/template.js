class MyHeader extends HTMLElement {
connectedCallback(){
this.innerHTML = `

<!-- Navbar Start -->
<nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
    <a href="index.html" class="navbar-brand">
        <h2 class="m-0 text-primary">
            <img src="img/logo2.png" alt="logo" class="responsive" >
            <img src="img/mob-logo.png" alt="logo" class="mobile" >
        </h2>
    </a>

    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <!-- ///hello nav bar// -->
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav mx-auto" id="allnav">
            <!-- <a href="index.html" class="nav-item nav-link active">Home</a> -->
            <a href="index.html" class="nav-item nav-link nav-link_c">Home</a>
            <div class="nav-item dropdown">
             <a href="courses_main.html" class="nav-item nav-link nav-link_c dropdown-toggle" >Courses</a>
                <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                     <a href="coding_classes.html" class="dropdown-item nav-link_c">Coding Classes</a>
                     <a href="computerbasics.html" class="dropdown-item nav-link_c">Computer Basics</a>
                     <a href="entrepreneurship.html" class="dropdown-item nav-link_c"> Entrepreneurship</a>
                 </div>
            </div>
            <!-- <a href="about.html" class="nav-item nav-link">About Us</a> -->
            <!-- <a href="classes.html" class="nav-item nav-link">Classes</a> -->
            <div class="nav-item dropdown">
                <a href="about.html" class="nav-link nav-link_c dropdown-toggle" data-bs-toggle="dropdown">About Us</a>
                <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                    <a href="academy.html" class="dropdown-item nav-link_c">Our Academy</a>
                    <!-- <a href="Student_Guidance_Appointment.html" class="dropdown-item nav-link_c">Student Guidance</a> -->
                    <a href="guidance.html" class="dropdown-item nav-link_c">Guidance</a>
                    <a href="careers.html" class="dropdown-item nav-link_c">Careers</a>
                    <a href="collaborate.html" class="dropdown-item nav-link_c">Collaborate</a>
                    <!-- <a href="become_mentor.html" class="dropdown-item nav-link_c">Become A Mentor</a>
                    <a href="become_entrepreneuer.html" class="dropdown-item nav-link_c">Become A Entrepreneur</a>
                    <a href="Partner_with_us.html" class="dropdown-item nav-link_c">Partner With Us</a> -->
                    <!-- <a href="become_teacher.html" class="dropdown-item nav-link_c">Become A Teacher</a> -->
                    <!-- <a href="team.html" class="dropdown-item nav-link_c">Popular Teachers</a> -->
                    <!-- <a href="call-to-action.html" class="dropdown-item nav-link_c">Become A Teachers</a> -->
                    <!-- <a href="other_careers.html" class="dropdown-item nav-link_c">Other Careers</a> -->
                    
                    
                    <!-- <a href="testimonial.html" class="dropdown-item">Testimonial</a> -->
                    <!-- <a href="404.html" class="dropdown-item">404 Error</a> -->
                     <!-- <a href="FAQ.html" class="dropdown-item">FAQ</a> -->
                </div>
            </div>
            <a href="contact.html" class="nav-item nav-link nav-link_c">Contact Us</a>
        </div>
        <a href="courses_main.html" class="btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i class="fa fa-arrow-right ms-3"></i></a>
    </div>
</nav>
    <!-- Navbar End -->




`

    }
}
customElements.define('my-header',MyHeader)


// set active class for link
var url=window.location.href;
var lastIndex = url.lastIndexOf("/");
url = url.substring(0, lastIndex);


document.querySelectorAll('.nav-link_c').forEach
(link=>{
    // console.log(link.href); 
    // nav-link_c = nav link common
    if(link.href=== window.location.href){
    //  link.setAttribute('class','nav-item nav-link active')

         if(link.classList.contains('nav-link')){
            link.classList.add('active');
            
                  }
             
             
                  else { 

          
                        const dropdiv= link.parentElement;
                        const navdrop=dropdiv.parentElement;
                        const whatthis=navdrop.innerText;
                       
                    document.querySelectorAll('.nav-link').forEach
                    (link=>{
                        if(link.innerHTML.includes(whatthis)){
                            console.log(whatthis);
                            link.classList.add('active');
                        }
                        else{
                            console.log(link.href);
                        }

                    })

                
                }


     }

    else {
    // {e.preventDefault();
           link.classList.remove('active');
       
        }

})

/////////////////



class MyCourses extends HTMLElement {
    connectedCallback(){
    this.innerHTML = `
    <div class="container-xxl py-5">
    <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
            <h2 class="mb-3">+Tech Courses</h2>
            <p>“Computer science helped shape the way I think about the world” - Bill Gates</p>
        </div>
        <div class="row g-4">

            <!-- ////class1 -->
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="classes-item">
                    <div class="bg-light rounded-circle w-75 mx-auto p-3">
                        <img class="img-fluid rounded-circle" src="../img/coding.jpeg" alt="">
                    </div>
                    <div class="bg-light rounded p-4 pt-5 mt-n5">
                        <a class="d-block text-center h3 mt-3 mb-4" href="codingkids1d.html">Coding Classes</a>
                        <!-- teacher and price deleted -->
                        
                    </div>
                        <div class="row g-1">
                            <div class="col-4">
                                <div class="border-top border-3 border-primary pt-2">
                                    <h6 class="text-primary mb-1">Age:</h6>
                                    <small>7- 16 Years</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border-top border-3 border-success pt-2">
                                    <h6 class="text-success mb-1">Language:</h6>
                                    <small>English / Sinhala</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border-top border-3 border-warning pt-2">
                                    <h6 class="text-warning mb-1">Level:</h6>
                                    <small>Beginner</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            

            <!-- ////class2 -->
            <div class="col-lg-4 col-md-6 wow fadeInUp " data-wow-delay="0.3s">
                <div class="classes-item">
                    <div class="bg-light rounded-circle w-75 mx-auto p-3">
                        <img class="img-fluid rounded-circle" src="../img/cbasic.jpeg" alt="">
                    </div>
                    <div class="bg-light rounded p-4 pt-5 mt-n5">
                        <a class="d-block text-center h3 mt-3 mb-4" href="codingkids6d.html">Computer Basics</a>
                          <!-- teacher and price deleted -->
                         
                          </div>
                        <div class="row g-1">
                            <div class="col-4">
                                <div class="border-top border-3 border-primary pt-2">
                                    <h6 class="text-primary mb-1">Age:</h6>
                                    <small>6-60 Years</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border-top border-3 border-success pt-2">
                                    <h6 class="text-success mb-1">Language:</h6>
                                    <small>English / Sinhala</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border-top border-3 border-warning pt-2">
                                    <h6 class="text-warning mb-1">Level:</h6>
                                    <small>Entry</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            

            <!-- ////class3 -->
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="classes-item">
                    <div class="bg-light rounded-circle w-75 mx-auto p-3">
                        <img class="img-fluid rounded-circle" src="../img/entrep.jpeg" alt="">
                    </div>
                    <div class="bg-light rounded p-4 pt-5 mt-n5">
                        <a class="d-block text-center h3 mt-3 mb-4" href="TechKids(SLASSCOM).html">Entrepreneurship</a>
                          <!-- teacher and price deleted -->
                         
                          </div>

                        <div class="row g-1">
                            <div class="col-4">
                                <div class="border-top border-3 border-primary pt-2">
                                    <h6 class="text-primary mb-1">Age:</h6>
                                    <small>10-50 Years</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border-top border-3 border-success pt-2">
                                    <h6 class="text-success mb-1">Language:</h6>
                                    <small>English / Sinhala</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border-top border-3 border-warning pt-2">
                                    <h6 class="text-warning mb-1">Level:</h6>
                                    <small>Foundation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          

            <!-- ////class 4 -->
            <div class="col-lg-4 col-md-6 wow fadeInUp nohome" data-wow-delay="0.1s">
                <div class="classes-item">
                    <div class="bg-light rounded-circle w-75 mx-auto p-3">
                        <img class="img-fluid rounded-circle" src="img/classes-4.jpg" alt="">
                    </div>
                    <div class="bg-light rounded p-4 pt-5 mt-n5">
                        <a class="d-block text-center h3 mt-3 mb-4" href="">Computer Basics for Youth</a>
                          <!-- teacher and price deleted -->

                        <div class="row g-1">
                            <div class="col-4">
                                <div class="border-top border-3 border-primary pt-2">
                                    <h6 class="text-primary mb-1">Age:</h6>
                                    <small>3-5 Years</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border-top border-3 border-success pt-2">
                                    <h6 class="text-success mb-1">Duration:</h6>
                                    <small>4 Months </small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border-top border-3 border-warning pt-2">
                                    <h6 class="text-warning mb-1">Level:</h6>
                                    <small>Advanced</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ////class 5 -->
            <div class="col-lg-4 col-md-6 wow fadeInUp nohome" data-wow-delay="0.3s">
                <div class="classes-item">
                    <div class="bg-light rounded-circle w-75 mx-auto p-3">
                        <img class="img-fluid rounded-circle" src="img/classes-5.jpg" alt="">
                    </div>
                    <div class="bg-light rounded p-4 pt-5 mt-n5">
                        <a class="d-block text-center h3 mt-3 mb-4" href="">Computer Basics for Adults</a>
                          <!-- teacher and price deleted -->

                        <div class="row g-1">
                            <div class="col-4">
                                <div class="border-top border-3 border-primary pt-2">
                                    <h6 class="text-primary mb-1">Age:</h6>
                                    <small>15-35 Years</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border-top border-3 border-success pt-2">
                                    <h6 class="text-success mb-1">Duration</h6>
                                    <small>4 Months</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border-top border-3 border-warning pt-2">
                                    <h6 class="text-warning mb-1">Level:</h6>
                                    <small>Advanced</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ////class 6 -->
            <div class="col-lg-4 col-md-6 wow fadeInUp nohome" data-wow-delay="0.5s">
                <div class="classes-item">
                    <div class="bg-light rounded-circle w-75 mx-auto p-3">
                        <img class="img-fluid rounded-circle" src="img/classes-6.jpg" alt="">
                    </div>
                    <div class="bg-light rounded p-4 pt-5 mt-n5">
                        <a class="d-block text-center h3 mt-3 mb-4" href="">Technovation</a>
                          <!-- teacher and price deleted -->

                        <div class="row g-1">
                            <div class="col-4">
                                <div class="border-top border-3 border-primary pt-2">
                                    <h6 class="text-primary mb-1">Age:</h6>
                                    <small>12-17 Years</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border-top border-3 border-success pt-2">
                                    <h6 class="text-success mb-1">Duration:</h6>
                                    <small>5 Months</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border-top border-3 border-warning pt-2">
                                    <h6 class="text-warning mb-1">Level:</h6>
                                    <small>Intermediate</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <!-- ////class 7 -->
            <div class="col-lg-4 col-md-6 wow fadeInUp nohome" data-wow-delay="0.3s">
                <div class="classes-item">
                    <div class="bg-light rounded-circle w-75 mx-auto p-3">
                        <img class="img-fluid rounded-circle" src="img/classes-5.jpg" alt="">
                    </div>
                    <div class="bg-light rounded p-4 pt-5 mt-n5">
                        <a class="d-block text-center h3 mt-3 mb-4" href="">Technopreneurship</a>
                          <!-- teacher and price deleted -->

                        <div class="row g-1">
                            <div class="col-4">
                                <div class="border-top border-3 border-primary pt-2">
                                    <h6 class="text-primary mb-1">Age:</h6>
                                    <small>15-35 Years</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border-top border-3 border-success pt-2">
                                    <h6 class="text-success mb-1">Duration</h6>
                                    <small>4 Months</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border-top border-3 border-warning pt-2">
                                    <h6 class="text-warning mb-1">Level:</h6>
                                    <small>Advanced</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                    <!-- ////class 8 -->
                    <div class="col-lg-4 col-md-6 wow fadeInUp nohome nocourse" data-wow-delay="0.3s">
                        <div class="classes-item">
                            <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                <img class="img-fluid rounded-circle" src="img/classes-5.jpg" alt="">
                            </div>
                            <div class="bg-light rounded p-4 pt-5 mt-n5">
                                <a class="d-block text-center h3 mt-3 mb-4" href="">Computer Basics for Adults|Youth|Teens</a>
                                <!-- teacher and price deleted -->

                                <div class="row g-1">
                                    <div class="col-4">
                                        <div class="border-top border-3 border-primary pt-2">
                                            <h6 class="text-primary mb-1">Age:</h6>
                                            <small>15-35 Years</small>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="border-top border-3 border-success pt-2">
                                            <h6 class="text-success mb-1">Duration</h6>
                                            <small>4 Months</small>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="border-top border-3 border-warning pt-2">
                                            <h6 class="text-warning mb-1">Level:</h6>
                                            <small>Advanced</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




        </div>
    </div>
</div>
    `
}
}
customElements.define('my-courses',MyCourses)


class MyFooter extends HTMLElement {
    connectedCallback(){
    this.innerHTML = `
    <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-4 col-md-6">
                <h3 class="text-white mb-4">Get In Touch</h3>
                <p class="mb-2"><i class="fa fa-brands fa-whatsapp me-3"></i><a href="https://wa.me/+94742833337" target="_blank">(+94) 074 283 3337</a></p>
                <p class="mb-2"><i class="fa fa-phone-alt me-3"></i><a href = "tel:+94742833337">(+94) 074 283 3337</a></p>
                <p class="mb-2"><i class="fa fa-envelope me-3"></i>canacademysl@gmail.com </p>
                <div class="d-flex pt-2">
                    <!-- <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a> -->
                    <!-- <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a> -->
                    <!-- // <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>-->
                    <!-- <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>-->
                    <!--  <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>-->
                    <!-- <i class="fa-brands fa-instagram"></i> -->
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <h3 class="text-white mb-4">Quick Links</h3>
                <a class="btn btn-link text-white-50" href="academy.html">About Us</a>
                <a class="btn btn-link text-white-50" href="contact.html">Contact Us</a>
                <a class="btn btn-link text-white-50" href="courses_main.html">Become a Learner</a>
                <a class="btn btn-link text-white-50" href="careers.html">Become a Teacher</a>
                <a class="btn btn-link text-white-50" href="faq.html">FAQ</a>
            </div>
            <div class="col-lg-4 col-md-6">
                <h3 class="text-white mb-4">PlusTech Academy</h3>
                <div class="row g-2 pt-2">
                <p>At +Tech Academy, our goal is to help children and everyone else fall in love with computer science and learn the value of learning coding at a young age. Not only is programming vital to success in the technology-driven 21st century, but it can teach kids & teens a broad range of skills that will help them in countless other areas as well.</p>
                <!--<div class="col-4">
                    
                        <img class="img-fluid rounded bg-light p-1" src="img/classes-1.jpg" alt="">
                    </div>
                    <div class="col-4">
                     <img class="img-fluid rounded bg-light p-1" src="img/classes-2.jpg" alt="">
                    </div>
                    <div class="col-4">
                       <img class="img-fluid rounded bg-light p-1" src="img/classes-3.jpg" alt="">
                    </div>
                    <div class="col-4">
                       <img class="img-fluid rounded bg-light p-1" src="img/classes-4.jpg" alt="">
                    </div>
                    <div class="col-4">
                      <img class="img-fluid rounded bg-light p-1" src="img/classes-5.jpg" alt="">
                    </div>
                    <div class="col-4">
                      <img class="img-fluid rounded bg-light p-1" src="img/classes-6.jpg" alt="">
                    </div>
                </div>-->
            </div>
            <!-- <div class="col-lg-3 col-md-6">
                <h3 class="text-white mb-4">Newsletter</h3>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div class="position-relative mx-auto" style="max-width: 400px;">
                    <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                    <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
            </div> -->
        </div>
    </div>
    <div class="container">
        <div class="copyright">
            <div class="row">
                <!-- <div class="col-md-2 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a class="border-bottom" href="#">canacademysl@gmail.com </a>, All Right Reserved. 
                    
                    /*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                    <!-- Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a> 
                </div> -->

                <div class="col-md-2 text-center">
                    <a class="border-bottom" href="#">Can Academy (Pvt) Ltd.</a>
                    
                    <!-- Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>  -->
                </div>
                <div class="col-md-10 text-center text-md-end">
                    <div class="footer-menu">
                        <!-- SCHOOLS   | INSTITUE  | CORPORATE | COMMUNITY ORGANIZATION | VOLUNTEER -->
                        <!-- <a href="">Home</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a> -->
                        <a href="">SCHOOLS</a>
                        <a href="">INSTITUTES</a>
                        <a href="">CORPORATE</a>
                        <a href="">COMMUNITY ORGANIZATION</a>
                        <a href="">VOLUNTEER</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



    `
}
}
customElements.define('my-footer',MyFooter)