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

function run_on_page_load() {
  const currentUrl = window.location.href;
  if (currentUrl.includes("character-sheet")) {
    //
    console.log("Hello + ");
    console.log(document.scripts);
    const scripts = document.scripts;
    const my_scripts = document.querySelectorAll(".on-load-run-script-charlesbennington");
    my_scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        Array.from(oldScript.attributes).forEach(attr => {
            newScript.setAttribute(attr.name, attr.value);
        });
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        document.body.appendChild(newScript);
        newScript.parentNode.removeChild(newScript);
    });

  }
}

// Listen to both navigation events
document.addEventListener("nav", run_on_page_load);
// document.addEventListener("render", run_on_page_load);