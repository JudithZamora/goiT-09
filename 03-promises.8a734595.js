function e(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),i=document.querySelector('input[name="amount"]'),u=(parseInt(n.value),parseInt(o.value),parseInt(i.value));for(let t=0;t<u;t++){e(2,1500).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.8a734595.js.map
