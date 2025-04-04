// PlantUML Rendering Logic

// Use a reliable public PlantUML server
const PLANTUML_SERVER_URL = 'https://www.plantuml.com/plantuml/svg/';

document.addEventListener('DOMContentLoaded', () => {
    // Find all PlantUML script tags
    const plantUmlScripts = document.querySelectorAll('script[type="text/plantuml"]');

    plantUmlScripts.forEach(scriptTag => {
        const plantUmlCode = scriptTag.textContent || scriptTag.innerText;
        if (!plantUmlCode.trim()) {
            console.error("Empty PlantUML code found for script:", scriptTag);
            return;
        }

        // Find the preceding img tag to update its src
        // Assumes the img tag is immediately before the script tag within the same parent
        const imgTag = scriptTag.previousElementSibling;

        if (imgTag && imgTag.tagName === 'IMG') {
            try {
                // Encode the PlantUML code
                const encodedCode = plantumlEncoder.encode(plantUmlCode.trim());
                // Set the src attribute of the img tag
                imgTag.src = PLANTUML_SERVER_URL + encodedCode;
                imgTag.alt = "PlantUML Diagram"; // Update alt text
            } catch (error) {
                console.error("Error encoding PlantUML or setting img src:", error);
                if (imgTag) {
                    imgTag.alt = "Error loading diagram";
                }
            }
        } else {
            console.error("Could not find preceding img tag for PlantUML script:", scriptTag);
        }
    });

    // --- Tooltip functionality remains disabled ---
    // const tooltip = document.getElementById('tooltip');
    // if (tooltip) {
    //     // Tooltip logic would need to be adapted if re-enabled,
    //     // as PlantUML server rendering doesn't support JS interaction easily.
    //     // Might need image maps or other techniques.
    // }
});

// Note: The plantuml-encoder library must be included via CDN in the HTML files
// e.g., <script src="https://cdn.jsdelivr.net/npm/plantuml-encoder@1.4.0/dist/plantuml-encoder.min.js"></script>
