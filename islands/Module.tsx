import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

type ModuleProps = {
  title: string;
  content: string; 
};

const Module: FunctionComponent<ModuleProps> = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [fullContent, setFullContent] = useState(content); 

  // Maneja el cambio en el campo de texto
  const handleInputChange = (event: Event) => {
    const input = (event.target as HTMLInputElement).value;
    setUserInput(input); // Actualiza el valor del input

    // Si el usuario escribe, agregamos lo que escribió al módulo
    setFullContent(content + " " + input);
  };

  return (
    <div
      class="module-container"
      style={{
        height: expanded ? "auto" : "60px", 
        transition: "height 0.3s ease-in-out",
        overflow: "hidden", 
        display: "flex",
        flexDirection: "column", 
        padding: "16px",
      }}
    >
      {/* título y botón */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", 
          alignItems: "center",
          width: "100%", 
        }}
      >
        <span class="module-title">{title}</span>
        <button class="module-button" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Mostrar menos" : "Mostrar más"}
        </button>
      </div>

      {/* texto */}
      {expanded && (
        <div style={{ marginTop: "16px" }}>
          <p>{fullContent}</p> 
          
          {/* Campo de texto para agregar contenido */}
          <div style={{ marginTop: "16px" }}>
            <input
              type="text"
              value={userInput}
              onInput={handleInputChange}
              placeholder="Escribe algo aquí..."
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "1rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Module;
