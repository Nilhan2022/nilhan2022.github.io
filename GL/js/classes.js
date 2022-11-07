const template =document.createElement("template");
template.innerHTML =`
<div class="col-lg-4 col-md-6 wow fadeInUp SchoolE cod4k" data-wow-delay="0.1s">
                        <div class="classes-item">
                            <div class="cls_img bg-light rounded-circle w-75 mx-auto p-3">
                                <img  id="cls_img" class="img-fluid rounded-circle" src="" alt="">
                            </div>
                            <div class="bg-light rounded p-4 pt-5 mt-n5">
                                <!-- <span class="bg-primary text-white rounded-pill py-2 px-3" href="">Rs 500/=</span> -->
                                <a id="cls_name" class="cls_name d-block text-center h3 mt-3 mb-4" href="">Coding for Kids</a>
                                <!-- teacher and price deleted -->
                            
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div class="d-flex align-items-center">
                                        <!-- <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 45px; height: 45px;"> -->
                                        <div class="ms-3">
                                            <h6 id="cls_type" class="text-primary mb-1">School Edition</h6>
                                            <!-- <small>Teacher</small> -->
                                        </div>
                                    </div>
                                    <span id="cls_price" class="bg-primary text-white rounded-pill py-2 px-3" href=""></span>
                                </div>
                                
                           
                                <div class="row g-1">
                                    <div class="col-4">
                                        <div class="border-top border-3 border-primary pt-2">
                                            <h6 class="text-primary mb-1">Age:</h6>
                                            <small id="cls_age">6- 17 Years</small>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="border-top border-3 border-success pt-2">
                                            <h6 class="text-success mb-1">Duration:</h6>
                                            <small id"=cls_dur">6 Days</small>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="border-top border-3 border-warning pt-2">
                                            <h6 class="text-warning mb-1">Level:</h6>
                                            <small id="cls_level">Entry</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    /////////////////////////////////////
                    <div class="pet-card">
                        <div class="avatar">
                            <img />
                        </div>
                        <div class="details">
                            <h2></h2>
                            <div class="info">
                            <p>Breed: <slot name="breed" /></p>
                            <p>Age: <slot name="age" /></p>
                            </div>
                            <div class="actions">
                                <button id="greet">Say Hi!</button>
                                <button id="toggle">View Details</button>
                            </div>
                        </div>
     
            </div>
`;

// cls_img,cls_name,cls_type,cls_price,cls_age,cls_dur,cls_level
class MyClasses extends HTMLELEMENT{

constructor()
{
super();
this.attachShadow({mode:open});
this.shadowRoot.appendChild(template.content.cloneNode(true));
this.shadowRoot.appendChild(template.content.cloneNode(true));
}

static get observedAttributes() {
    return ["name", "avatar"];
  }


attributeChangedCallback(name, oldValue,newValue){
this.shadowRoot.querySelector()

}

// cls_img,cls_name,cls_type,cls_price,cls_age,cls_dur,cls_level
attributeChangedCallback(name, oldValue, newValue) {
//     this.shadowRoot.querySelector(".cls_name a").innerText =
//       this.getAttribute("name");
    this.shadowRoot.querySelector("#cls_img").src =
      this.getAttribute("avatar");
    this.shadowRoot.querySelector("#cls_img").alt =
      this.getAttribute("name");





      /////
      this.shadowRoot.querySelector(".details h2").innerText =
      this.getAttribute("name");
    this.shadowRoot.querySelector(".avatar img").src =
      this.getAttribute("avatar");
    this.shadowRoot.querySelector(".avatar img").alt =
      this.getAttribute("name");
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
customElements.define('my-class',MyClasses)