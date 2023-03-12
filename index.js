let entry = 0;
let attackerId = document.getElementById("attack");
let targetId = document.getElementById("target");
let code = document.getElementsByClassName("span-list");
let status1 = document.getElementById("status1");
let status2 = document.getElementById("status2");

let func = async () => {
  await new Promise((resolve) => {
    document.getElementById("codeX").classList.add("wide");
    resolve(51);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      code[0].innerText = ">> Start Attacking...";
      resolve(45);
    }, 2000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      status1.innerHTML = "Running...";
      resolve(true);
    }, 1000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      code[1].innerText = ">> Connecting to the root server....";
      resolve(54);
    }, 1000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      code[2].innerText = ">> Root server connection established!";
      resolve(66);
    }, 4000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      code[3].innerText = ">> Getting temparary accses of Meta Database";
      resolve(96);
    }, 2000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      code[4].innerText = ">> Access Granted!!";
      resolve(96);
    }, 3000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      code[5].innerText = `>> Finding the userId ${targetId.value}`;
      resolve(76);
    }, 1000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      code[6].innerText = ">> UserId is founded";
      resolve(78);
    }, 5000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      code[7].innerText = ">> Starting Man-in-the-Middle Attack";
      resolve(6);
    }, 1000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      code[8].innerText = ">> Man-in-the-Middle Attack is failed";
      resolve(64);
    }, 5000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      code[9].innerText = ">> Starting Brute Force Attack";
      resolve(6446);
    }, 1000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      code[10].innerText = ">> 200k combinations are trying.....";
      resolve(78);
    }, 1500);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      code[11].innerText = ">> Please wait it will take some time:)";
      resolve(699);
    }, 1000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      code[12].innerText = ">> Passward Is Founded";
      resolve(90);
    }, 4000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      code[13].innerText = ` Download the file to get password of "${targetId.value}"`;
      resolve(687);
    }, 1000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      status1.innerText = "Finished";
      status2.innerHTML = '<a href="">Download</a>';
      resolve(true);
    }, 1000);
  });
};

let main1 = async () => {
  await new Promise((resolve, reject) => {
    if (entry === 2) {
      func();
    }
    resolve(90);
  });
};
let scrollPage = async (e) => {
  console.log("scrollpage Is Started");
  let p1 = await new Promise((resolve, reject) => {
    if (
      attackerId.value.length >= 2 &&
      document.documentElement.scrollTop >= 0 &&
      document.documentElement.scrollTop <= 461 &&
      e.keyCode == 13
    ) {
      window.scrollTo(0, 570);
      entry = 1;
    }
    resolve(38);
  });
  let p2 = await new Promise((resolve, reject) => {
    if (
      targetId.value.length >= 2 &&
      document.documentElement.scrollTop >= 547 &&
      document.documentElement.scrollTop <= 897 &&
      e.keyCode == 13
    ) {
      window.scrollTo(0, 1156);
      entry += 1;
    }
    resolve(37);
  });
  let p0 = await Promise.all([p1, p2]);
  await main1();
};

document.addEventListener("keydown", scrollPage);
