export function registerEscapeHandler(outsideContainer: HTMLElement | null, cb: () => void) {
  if (!outsideContainer) return
  function click(this: HTMLElement, e: HTMLElementEventMap["click"]) {
    if (e.target !== this) return
    e.preventDefault()
    e.stopPropagation()
    cb()
  }

  function esc(e: HTMLElementEventMap["keydown"]) {
    if (!e.key.startsWith("Esc")) return
    e.preventDefault()
    cb()
  }

  outsideContainer?.addEventListener("click", click)
  window.addCleanup(() => outsideContainer?.removeEventListener("click", click))
  document.addEventListener("keydown", esc)
  window.addCleanup(() => document.removeEventListener("keydown", esc))
}

export function removeAllChildren(node: HTMLElement) {
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}

// AliasRedirect emits HTML redirects which also have the link[rel="canonical"]
// containing the URL it's redirecting to.
// Extracting it here with regex is _probably_ faster than parsing the entire HTML
// with a DOMParser effectively twice (here and later in the SPA code), even if
// way less robust - we only care about our own generated redirects after all.
const canonicalRegex = /<link rel="canonical" href="([^"]*)">/

export async function fetchCanonical(url: URL): Promise<Response> {
  const res = await fetch(`${url}`)
  if (!res.headers.get("content-type")?.startsWith("text/html")) {
    return res
  }

  // reading the body can only be done once, so we need to clone the response
  // to allow the caller to read it if it's was not a redirect
  const text = await res.clone().text()
  const [_, redirect] = text.match(canonicalRegex) ?? []
  return redirect ? fetch(`${new URL(redirect, url)}`) : res
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BELOW IS CODE WRITTEN BY CHARLES BENNINGTON
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Disclaimer: 
  The components system was complicated, and I couldn't really figure it out. All I wanted to do 
  was run a few scripts on the website so I could make my forms. I couldn't figure out how to 
  "register a script" either. So I will simply be bolting my code into this util.ts file. 
*/
// We need to check if these scripts are running already.
// var current_running_scripts = [];
var history_of_pages_we_have_been = [];

// function execute_script(oldScript) {
//   const oldScriptJson = JSON.stringify(oldScript);
//   current_running_scripts.forEach(curr_script => {
//     console.log(curr_script);
//     console.log(oldScriptJson);
//     if (oldScriptJson === curr_script) {
//       return;
//     }
//   });
//   const newScript = document.createElement("script");
//   Array.from(oldScript.attributes).forEach(attr => {
//       newScript.setAttribute(attr.name, attr.value);
//   });
//   current_running_scripts.push(JSON.stringify(oldScript));
//   newScript.appendChild(document.createTextNode(oldScript.innerHTML));
//   document.body.appendChild(newScript);
//   newScript.parentNode.removeChild(newScript);
// }
const pages_to_auto_reload = [
  "character-sheet",
  "create-a-character",
  "premade-character-sheets"
]

function run_on_page_load() {
  const currentUrl = window.location.href;
  history_of_pages_we_have_been.push(currentUrl);
  console.log(history_of_pages_we_have_been);
  if (history_of_pages_we_have_been.length > 1) {
    pages_to_auto_reload.forEach(curr_page => {
      if (currentUrl.includes(curr_page)) {
        location.reload();
      }
    })
  }
}

// Listen to both navigation events
document.addEventListener("nav", run_on_page_load);
document.addEventListener("render", run_on_page_load);