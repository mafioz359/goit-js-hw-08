!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a,r,o="feedback-form-state",n=document.querySelector(".feedback-form");n.addEventListener("submit",(function(e){e.preventDefault();var t=e.target,a=t.elements,r=a.email,n=a.message,l=r.value,u=n.value;console.log({userEmail:l,userMessage:u}),t.reset(),localStorage.removeItem(o)})),n.addEventListener("change",(function(e){var t=e.target,a=t.value,r=t.name,n=JSON.parse(localStorage.getItem(o))||{};n[r]=a,localStorage.setItem(o,JSON.stringify(n))})),a=n.elements,(r=JSON.parse(localStorage.getItem(o)))&&Object.keys(a).filter((function(a){return e(t)(Number.isNaN(a))})).forEach((function(e){a[e].value=r[e]||""}))}();
//# sourceMappingURL=03-feedback.5d62a8c5.js.map
