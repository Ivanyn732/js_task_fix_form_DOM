document.querySelectorAll("form input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id);var l=e.name.charAt(0).toUpperCase()+e.name.slice(1);t.textContent=l,e.setAttribute("placeholder",l),e.closest(".field").appendChild(t)});
//# sourceMappingURL=index.55a7967c.js.map
