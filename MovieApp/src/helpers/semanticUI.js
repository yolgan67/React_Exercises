{/* <link
async
rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script> */}

export const semanticUICSS = document.createElement("link")
semanticUICSS.rel="stylesheet"
semanticUICSS.href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
document.head.appendChild(semanticUICSS)

export const semanticUIJS = document.createElement("script")
semanticUIJS.src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"
document.head.appendChild(semanticUIJS)