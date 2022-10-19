const template = document.createElement("template");
template.innerHTML = `
<link href="lib/animate/animate.min.css" rel="stylesheet">
<link href="./css/bootstrap.min.css" rel="stylesheet" />
<link  href="./css/styles.css" rel="stylesheet" />




                        <div class="classes-item">
                            <div class="cls_img bg-light rounded-circle w-75 mx-auto p-3">
                            <a id="cls_link" href="">
                                <img  id="cls_img" class="img-fluid rounded-circle" src="" alt="">
                             </a>
                            </div>
                            <div class="bg-light rounded p-4 pt-5 mt-n5">
                                <!-- <span class="bg-primary text-white rounded-pill py-2 px-3" href="">Rs 500/=</span> -->
                                <!--  <a id="cls_name" class="cls_name d-block text-center h3 mt-3 mb-4" href="">Coding for Kids</a>-->
                                <a id="cls_name" class="cls_name d-block text-center h3 mt-3 mb-4" href=""></a>
                                <!-- teacher and price deleted -->
                            
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div class="d-flex align-items-center">
                                        <!-- <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 45px; height: 45px;"> -->
                                        <div class="ms-3">
                                        <!--   // <h6 id="cls_type" class="text-primary mb-1">School Edition</h6> -->
                                                 <h6 id="cls_type" class="text-primary mb-1"></h6>
                                            <!-- <small>Teacher</small> -->
                                        </div>
                                    </div>
                                    <span id="cls_price" class="bg-primary text-white rounded-pill py-2 px-3" href=""></span>
                                </div>
                                
                           
                                <div class="row g-1">
                                    <div class="col-4">
                                        <div class="border-top border-3 border-primary pt-2">
                                            <h6 class="text-primary mb-1">Age:</h6>
                                            <small id="cls_age"></small>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="border-top border-3 border-success pt-2">
                                            <h6 class="text-success mb-1">Duration:</h6>
                                            <small id="cls_dur"></small>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="border-top border-3 border-warning pt-2">
                                            <h6 class="text-warning mb-1">Level:</h6>
                                            <small id="cls_level"></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
  `;
class PetCard extends HTMLElement {
  constructor() {
    super();
    this.showInfo = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  toggleInfo = () => {
    this.showInfo = !this.showInfo;
    this.shadowRoot.querySelector(".info").style.display = this.showInfo
      ? "block"
      : "none";
    this.shadowRoot.querySelector("#toggle").innerHTML = this.showInfo
      ? "Hide Details"
      : "View Details";
  };

  static get observedAttributes() {
    return ["name", "avatar","scratch"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    
      
//cls_link,cls_img,cls_name,cls_type,cls_price,cls_age,cls_dur,cls_level
      this.shadowRoot.querySelector("#cls_img").src =
      this.getAttribute("classimg");
    this.shadowRoot.querySelector("#cls_img").alt =
      this.getAttribute("classname");
      this.shadowRoot.querySelector("#cls_name").href =
      this.getAttribute("syllabuspage");
      this.shadowRoot.querySelector("#cls_link").href =
      this.getAttribute("syllabuspage");
      this.shadowRoot.querySelector("#cls_name").innerText  =
      this.getAttribute("classname");
      this.shadowRoot.querySelector("#cls_type").innerText  =
      this.getAttribute("classtyp");
      this.shadowRoot.querySelector("#cls_price").innerText  =
      this.getAttribute("classprice");
      this.shadowRoot.querySelector("#cls_age").innerText =
      this.getAttribute("age");
      this.shadowRoot.querySelector("#cls_dur").innerText =
      this.getAttribute("classdur");
      this.shadowRoot.querySelector("#cls_level").innerText =
      this.getAttribute("classlevel");
     
      // <!-- <pet-card 
      // classname="Murphy"
      //syllabuspage=""
      // classimg=
      // classtyp=
      // classprice=""
      // age=""
      // classdur=""
      // classlevel=""
      
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#toggle")
      .addEventListener("click", this.toggleInfo);
    this.shadowRoot
      .querySelector("#greet")
      .addEventListener("click", () =>
        window.alert(`Hey there! I'm ${this.getAttribute("name")}`)
      );
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("#toggle")
      .removeEventListener("click", this.toggleInfo);
    this.shadowRoot
      .querySelector("#greet")
      .removeEventListener("click", () =>
        window.alert(`Hey there! I'm ${this.getAttribute("name")}`)
      );
  }
}

export default PetCard;
