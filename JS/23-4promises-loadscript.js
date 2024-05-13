//===========loadlink function & which return promises============
const loadlink = (href) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.href = href;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    console.log(link);

    link.onload = (params) => {
      resolve(`CSS is loaded`);
    };
    link.onerror = () => {
      reject(new Error("There is a problem in loading CSS"));
    };
  });
};

//===========Calling the function loadlink===========
const link = loadlink("CSS/phone.css");

link
  .then(
    (value) => {
      console.log(value);
      return loadlink(
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      );
    },
    (error) => {
      console.log(error);
    }
  )
  .then(
    (value) => {
      console.log(value);
      return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js";
        script.type = "text/javascript";
        document.body.appendChild(script);
        console.log(script);

        script.onload = (params) => {
          resolve(`Bootstrap JS is loaded`);
        };
        script.onerror = () => {
          reject(new Error("There is a problem in loading Bootstrap JS"));
        };
      });
    },
    (error) => {
      console.log(error);
    }
  )
  .then((value) => {
    console.log(value);
  },(error) => {
    console.log(error);
  })
