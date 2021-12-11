// # KogeFarm Vaults Asset (LP) + Website (Platform) Scraper
// # lb 12/10/21

// ## Asset Selector

// /html/body/div[1]/div[1]/div/div[2]/div/div[4]/div/div[1]/table/tbody/tr[1]/td[2]/div/div/div/div[1]/div[2]/div

//*[@id=“root”]/div[1]/div/div[2]/div/div[4]/div/div[1]/table/tbody/tr[1]/td[2]/div/div/div/div[1]/div[2]/div

// document.querySelector(“#root > div.Menu__Wrapper-sc-16lwz1j-0.fPrHlA > div > div.Menu__Inner-sc-16lwz1j-6.eKtHTJ > div > div.FarmTable__Container-sc-m77kcj-1.cDnLqI > div > div.FarmTable__TableWrapper-sc-m77kcj-2.ea-DDvC > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > div > div > div.Farm__FarmContainer-sc-1j28ev8-2.dUvgxt > div:nth-child(2) > div”)

// #root > div.Menu__Wrapper-sc-16lwz1j-0.fPrHlA > div > div.Menu__Inner-sc-16lwz1j-6.eKtHTJ > div > div.FarmTable__Container-sc-m77kcj-1.cDnLqI > div > div.FarmTable__TableWrapper-sc-m77kcj-2.ea-DDvC > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > div > div > div.Farm__FarmContainer-sc-1j28ev8-2.dUvgxt > div:nth-child(2) > div

// <div color=“text” class=“Text-sc-1ih1y3x-0 ipqjUy”>KOGECOIN</div>

// ## Website (Platform)

// /html/body/div[1]/div[1]/div/div[2]/div/div[4]/div/div[1]/table/tbody/tr[2]/td/div/div/div[1]/div[2]/a[2]

//*[@id="root"]/div[1]/div/div[2]/div/div[4]/div/div[1]/table/tbody/tr[2]/td/div/div/div[1]/div[2]/a[2]

// document.querySelector("#root > div.Menu__Wrapper-sc-16lwz1j-0.fPrHlA > div > div.Menu__Inner-sc-16lwz1j-6.eKtHTJ > div > div.FarmTable__Container-sc-m77kcj-1.cDnLqI > div > div.FarmTable__TableWrapper-sc-m77kcj-2.ea-DDvC > table > tbody > tr:nth-child(2) > td > div > div > div:nth-child(1) > div.ActionPanel__InfoContainer-sc-1niyqu7-6.dfsPwc > a:nth-child(4)")

// #root > div.Menu__Wrapper-sc-16lwz1j-0.fPrHlA > div > div.Menu__Inner-sc-16lwz1j-6.eKtHTJ > div > div.FarmTable__Container-sc-m77kcj-1.cDnLqI > div > div.FarmTable__TableWrapper-sc-m77kcj-2.ea-DDvC > table > tbody > tr:nth-child(2) > td > div > div > div:nth-child(1) > div.ActionPanel__InfoContainer-sc-1niyqu7-6.dfsPwc > a:nth-child(4)

// <a target="_blank" rel="noreferrer noopener" href="https://kogecoin.io" color="#171717" class="Text-sc-1ih1y3x-0 Link__StyledLink-sc-66drct-0 dJsGDh iZzRB ActionPanel__StyledLinkExternal-sc-1niyqu7-3 kKWscP" data-darkreader-inline-color="" style="--darkreader-inline-color:#d9d6d1;"><svg width="18" height="18" fill="none" color="#171717" xmlns="http://www.w3.org/2000/svg" class="Svg-sc-1klc0d0-0 bqCmUt" data-darkreader-inline-color="" style="--darkreader-inline-color:#d9d6d1;"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.917 10.972a.5.5 0 01.008-.706l5.73-5.595h-1.11a.5.5 0 010-1h2.282a.499.499 0 01.415.148l.004.004a.5.5 0 01.142.348v2.441a.5.5 0 01-1 0v-1.26L7.623 10.98a.5.5 0 01-.706-.009zM4.892 5.048a.5.5 0 00-.5.5V13a.5.5 0 00.5.5h7.452a.5.5 0 00.5-.5V8.742a.5.5 0 00-1 0V12.5H5.393V6.048h4.024a.5.5 0 100-1H4.892z"></path></svg>Platform</a>

// ——
// ```
// get collection of vault attributes ( lp | platform )
// TODO expand for fantom + moonriver

//TODO scroll to bottom so all dom elements present
// function scrollTo(element, to, duration) {
//     if (duration <= 0) return;
//     var difference = to - element.scrollTop;
//     var perTick = difference / duration * 10;

//     setTimeout(function() {
//         element.scrollTop = element.scrollTop + perTick;
//         if (element.scrollTop === to) return;
//         scrollTo(element, to, duration - 10);
//     }, 10);
// }

// function runScroll() {
//   scrollTo(document.body, 0, 600);
// }
// var scrollme;
// scrollme = document.querySelector("#scrollme");
// scrollme.addEventListener("click",runScroll,false)

// function scrollTo(element, to, duration) {
//   if (duration <= 0) return;
//   var difference = to - element.scrollTop;
//   var perTick = difference / duration * 10;

//   setTimeout(function() {
//     element.scrollTop = element.scrollTop + perTick;
//     if (element.scrollTop == to) return;
//     scrollTo(element, to, duration - 10);
//   }, 10);
// }

// window.scrollTo(0,document.querySelector(".scrollingContainer").scrollHeight);

// window.scrollTo(0,document.body.scrollHeight);

const lps = document.querySelectorAll('[class^="Farm__Container"] > div:nth-child(2) > div');
const platforms = document.querySelectorAll('[class^="ActionPanel__InfoContainer"] > a:nth-child(4)');

console.log("lps", lps);
console.log("platforms", platforms);

// const lpsArray = lps.toArray(); 
// const platformsArray = platforms.toArray();

// console.log("lpsArray", lpsArray);
// console.log("platformsArray", platformsArray);

// lpsArray.forEach(vault) => {
// 	console.log(lpsArray[vault] + “ | “ + platformsArray[vault] + “\n”);
// }
 

