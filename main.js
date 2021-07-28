let code = document.getElementById("code");
let btn = document.getElementById("btn");
let RandPassword = () => {
  let Code = ["1234567890"
  , "!@#$%^&*~", "abcdefghijklmnopqrstuvwxyz"]
  let totalCode = Code[0].length + Code[1].length + Code[2].length
  let Password = ""
  let RandomPassword = ""
  while (true) {
    let ContainlowerCase = false,
      ContainupperCase = false,
      ContainSymbol = false,
      ContainNumber = false;
    let GeneratePassword = () => {
      Password = "";
      RandomPassword = "";
      for (i = 0; i < 10; i++) {
        let selected = Code[Math.floor(Math.random() * 3)]
        Password += selected[Math.floor(Math.random() * selected.length)]
      }
    }
    if (Password.length == 10) {
      
      for (i = 0; i < Password.length; i++) {
        for (k = 0; k < totalCode; k++) {
          if (Password[i] == Code[0][k]) {
            RandomPassword += Password[i]
            ContainNumber = true;
          }
          else if (Password[i] == Code[1][k]) {
            RandomPassword += Password[i]
            ContainSymbol = true;
          }
          else if (Password[i] == Code[2][k]) {
            if (!ContainupperCase) {
              RandomPassword += Password[i].toUpperCase()
              ContainupperCase = true;
            } else if (!ContainlowerCase) {
              RandomPassword += Password[i].toLowerCase()
              ContainlowerCase = true;
            }else{
              RandomPassword+=Password[i];
            }
          }
        }
      }
    }
    else {
      GeneratePassword();
      continue;
    };
    if (ContainNumber && ContainlowerCase && ContainSymbol && ContainupperCase) {
      code.value=RandomPassword;
    }
    
    break;
  }
}
btn.onclick=RandPassword;
