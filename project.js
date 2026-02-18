const projects = [
  {
    title: "TapaTap: Temu Rumah",
    desc: "Rhythm-based Unity adventure game with timing mechanics and dynamic visuals",
    roles: ["Programmer","Designer","Artist"],
    video: "https://www.youtube.com/embed/VIDEO_ID"
  },
  {
    title: "Grid Movement System",
    desc: "Simultaneous tile movement with smart obstacle routing AI",
    roles: ["Programmer"],
    video: "https://www.youtube.com/embed/VIDEO_ID"
  },
  {
    title: "Procedural Arena Prototype",
    desc: "Spawn system with tempo-based enemies and scalable difficulty",
    roles: ["Programmer","Designer"],
    video: "https://www.youtube.com/embed/VIDEO_ID"
  }
];

const container = document.getElementById("projects");

function render(list){
  container.innerHTML="";
  list.forEach(p=>{
    const card = document.createElement("div");
    card.className="project";
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    `;
    card.onclick = ()=>openModal(p);
    container.appendChild(card);
  });
}

function filterRole(role){
  if(role==="all") render(projects);
  else render(projects.filter(p=>p.roles.includes(role)));
}

function openModal(p){
  mTitle.textContent = p.title;
  mDesc.textContent = p.desc;
  mRoles.textContent = p.roles.join(", ");
  mVideo.src = p.video;
  modal.style.display="block";
}

function closeModal(){
  modal.style.display="none";
  mVideo.src="";
}

render(projects);
