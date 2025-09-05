const modal = document.getElementById("videoModal");
const player = document.getElementById("youtubePlayer");
const closeBtn = document.querySelector(".close");

const movies = {
  cursor1: "https://www.youtube.com/embed/1ZVtdEMGPzc?si=LcCsoKnemnIsFuFK",
  cursor2: "https://www.youtube.com/embed/Hp6e_mPznDw?si=rgxD9G3_i9pwlyNb",
  cursor3:"https://www.youtube.com/embed/nJd0sgdC7t8?si=vibE8Zof_gZxmKHK" ,    
  cursor4:"https://www.youtube.com/embed/1LpiLNil9W4?si=xI_pV-vHv7QgY_cX",
  cursor5: "https://www.youtube.com/embed/wGeRx9Mtu3g?si=TbdvIw7XNnBHqL3U",
  cursor6:"https://www.youtube.com/embed/GwnXmFebwdU?si=TaiuFaU8oA0KiUif",
  cursor7: "https://www.youtube.com/embed/TjoNSTGf1s8?si=AP8RW8ki2Jy3kPVC", 
  cursor8: "https://www.youtube.com/embed/KX83ed0Tg6g?si=6TtJ11Ie9s9BuSx1",
  cursor9: "https://www.youtube.com/embed/GPkBPzIIsQY?si=rlxQjlcTho8MXwK8",
  cursor10:"https://www.youtube.com/embed/PnuFoFYwelg?si=0sCqQmwqXtquFbkx",
  cursor11:"https://www.youtube.com/embed/SOmDLic46p8?si=6oUxUDKZSMM02PQC",
  cursor12:"https://www.youtube.com/embed/Rvx4ZeveDHc?si=H3zrnvWtD6VEyVh_",
  cursor13:"https://www.youtube.com/embed/8DOBmcXgkJ0?si=OqThI9e3ZW2PBth3",
  cursor14: "https://www.youtube.com/embed/example9",  
  cursor15: "https://www.youtube.com/embed/example10",  
  cursor16: "https://www.youtube.com/embed/iAt_j6zEeF0?si=yQ56V_Tz1br-xe0H",
  cursor17: "https://www.youtube.com/embed/6jGM8u8TL2I?si=m3XHl5R2R50hZdEl",
  cursor18:"https://www.youtube.com/embed/Ofm-rfqv-UU?si=m_rKuMUtls8PA-5W",
  cursor19: "https://www.youtube.com/embed/Xs-M09Y-rCo?si=R3IgcPTP-zg4RuA0",
  cursor20: "https://www.youtube.com/embed/example15"   
};

Object.keys(movies).forEach(id => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener("click", () => {
      player.src = movies[id] + "?autoplay=1";
      modal.style.display = "flex"; 
    });
  }
});

closeBtn.onclick = () => {
  modal.style.display = "none";
  player.src = "";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    player.src = ""; 
  }
};

// Sign In Modal
const signInBtn = document.getElementById("one");
const signInModal = document.getElementById("signInModal");
const closeSignIn = document.querySelector(".close-signin");
const signInForm = document.getElementById("signInForm");

// Open modal on button click
signInBtn.onclick = () => {
  signInModal.style.display = "flex";
};

// Close modal when clicking ×
closeSignIn.onclick = () => {
  signInModal.style.display = "none";
};

// Close modal when clicking outside
window.onclick = (event) => {
  if (event.target === signInModal) {
    signInModal.style.display = "none";
  }
  if (event.target === modal) { // existing video modal logic
    modal.style.display = "none";
    player.src = "";
  }
};

// Handle form submission
signInForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page refresh
  alert("Signed in successfully!"); // optional message
  signInForm.reset(); // **this clears all input fields automatically**
  signInModal.style.display = "none"; // close modal
});
