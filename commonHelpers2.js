import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r="feedback-form-state",n=document.querySelector(".feedback-form"),t=document.querySelector("input"),a=document.querySelector("textarea");n.addEventListener("input",u);function u(e){e.preventDefault();const o={email:t.value.trim(),message:a.value.trim()};localStorage.setItem(r,JSON.stringify(o))}const s=localStorage.getItem(r);if(s){const e=JSON.parse(s);t.value=e.email,a.value=e.message}n.addEventListener("submit",c);function c(e){e.preventDefault();const o=t.value.trim(),m=a.value.trim();if(o===""||m==="")return;const l={email:t.value.trim(),message:a.value.trim()};console.log(l),localStorage.removeItem(r),n.reset()}
//# sourceMappingURL=commonHelpers2.js.map