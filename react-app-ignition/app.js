import React from "react"
import { createRoot } from "react-dom/client"

const heading = React.createElement("h1",{id:"heading"},"React is here")
const root =createRoot(document.getElementById("root"))

root.render(heading)