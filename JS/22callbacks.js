//================adding bootstrap style===========
function loadstyle2(href, callback) {
  const link = document.createElement("link");
  link.href = href;
  link.rel = rel = "stylesheet";
  document.head.appendChild(link);

  link.onload = () => {
    callback(null, "success",href);
  };
  link.onerror = () =>{
    // console.log("E","error",href)
    callback(new Error,"failed",href)
  }
}

const msg2 = (paramError,param1,param2) => {
  if (paramError) {
    console.log("Bootstrap Status:", paramError);
  } else {
    console.log("Bootstrap Status:", param1,param2);
  }
};

loadstyle2(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css",
  msg2
);

//====================================
//==============PRACTICE===============
//==============adding bootstrap js===========
function loadscript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);

  script.onload = () => {
    // console.log("Success Src: ", src);
    callback(src);
  };
}

function successMessage(params) {
  console.log("Success Src: ", params);
}

loadscript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",
  successMessage
);

//================Overriding bootstrap css using own style===========
function loadstyle(href, callback) {
  const link = document.createElement("link");
  link.href = href;
  link.rel = rel = "stylesheet";
  document.head.appendChild(link);

  link.onload = () => {
    callback("success");
  };
}

const msg = (params) => {
  console.log("Style Status:", params);
};

loadstyle("CSS/style.css", msg);
