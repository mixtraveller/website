async function getMemlist() {
  let memListFetch = await fetch("https://api.imgflip.com/get_memes");
  const memList = await memListFetch.json();

  console.log(memList.data.memes);
}

getMemlist();
