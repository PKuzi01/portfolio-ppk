import React from "react";

function About() {
    return (
        <div className="about">
            <h2>Here's a little about myself?</h2>
            <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <strong>You have a nickname?</strong>
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          Yeah. It's Phila, pronounced Pee Lah. You can use this instead of the full one.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <strong>How'd you get into building stuff for the net?</strong>
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          In my teens, my mother left me in charge of taking care of the house computer, seeing how I did well with fixing the other technological appliances like the dvd player. I was also exposed to PC gaming a during high school, meaning that I learned to monitor and take care of the machine I would play games on as well. Those two things exposed me to a lot about computers, which then led to my interest in software and the web. And here we are.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <strong>What do you love most about software development?</strong>
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          That it's an artistic medium, if you choose to see that way. In short, you can craft and shape anything into whatever you hold in your mind's eye, tthe same way a sculptor would. More so, that when you create these things, be it apps or websites, you can create for the users, as well for others that create just like you do. It's expansive, yet it has a strong sense of community. There's a subtly wonderful understanding that we're all creators. I enjoy that a lot. I also enjoy observing the philosophical, societal and psychological effects, benefits and upbringings of it all. Being a literary theory and philosophy major in university, especially a university that takes place online, I find it difficult to not ponder on the effects on the workings of institutions such as social media and owning a website and/or app as a business, for instance. It tends to open up perspective for me, and gives me something to think about daily. Software development is a side of the narrative I haven't heard yet, at least not fully. So I intend to place myself in its shoes, and hopefully I can learn more about it.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          <strong>Are they any other places within the software development space that you're interested in?</strong>
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          I'm very interested in the UI space. I enjoy painting, so the idea of making sketches of the projects, and the idea of protyping and the various ways you can do it seem wonderful to me! I love styling the websites I build that I often cut out an great amount of time to do so. I find researching for colour palettes and fonts, putting the things together on a css stylesheet, and all the other fun and artsy stuff very entertaining. I'm very much visual in that way, so I wish to one day learn about it and become proficient in that regard.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          <strong>What do you do in your free time?</strong>
                        </button>
                      </h2>
                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          If I'm not finishing off my undergrad or working on my front-end development skills, I am reading, doing yoga, painting, baking, watching anime, spending time with my doggo Jazz, and spending time with all my loved ones.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                          <strong>What's your favourite colour, anime, fruit, flower, car, number and angel number?</strong>
                        </button>
                      </h2>
                      <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          My favourite colour is green, I love green, I want a green everything. My favourite anime? There's ten. In this order: Darling in the Franxx, Attack on Titan, Hunter x Hunter, Banana Fish, Assassination Classroom, Sk8 to Infinity, the Promised Neverland (although this might change, because season 2 was looking iffy), Kakegurui, No Game No Life, and Death Parade. My favourite fruit are (yeah there's multiple for a lot of these) dragonfruit, mango and blood orange. My favourite flowers are tulips, sunflowers and wisteria. My favourite cars are the 2021 Ford Mustang GT500 and the 2020 BMW M4 Competition. My favourite number is 9. My favourite angel numbers are 222 and 888.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                          <strong>Last one: Is water wet?</strong>
                        </button>
                      </h2>
                      <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          I can neither confirm nor deny any answer, thank you for your time. *walks off the stage*
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
    )
}

export default About