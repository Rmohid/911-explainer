// Initialize Mermaid JS
mermaid.initialize({ startOnLoad: true });

// Tooltip element (kept in case needed later)
// const tooltip = document.getElementById('tooltip');

// Function to show tooltip (called by Mermaid 'click' directive)
// window.callTooltip = function(nodeId, tooltipText) {
//     // In this setup, we'll use mouseover/mouseout instead of click
//     // The 'click' directive in Mermaid is just a way to attach the data.
//     // We'll add the actual event listeners below.
//     console.warn("callTooltip function is defined but click interaction is replaced by mouseover/mouseout for better UX.");
// };

// Add mouseover/mouseout listeners to diagram nodes for tooltips
// --- Tooltip functionality temporarily disabled to ensure diagram rendering ---
/*
document.addEventListener('DOMContentLoaded', () => {
    // Select all diagram containers
    const diagramContainers = document.querySelectorAll('.diagram-container');

    diagramContainers.forEach(container => {
        // Use MutationObserver to wait for Mermaid to render the SVG
        const observer = new MutationObserver((mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    const svgElement = container.querySelector('svg');
                    if (svgElement) {
                        // Once SVG is found, attach listeners to nodes with click handlers
                        const nodesWithTooltips = svgElement.querySelectorAll('[onclick^="callTooltip"]');

                        nodesWithTooltips.forEach(node => {
                            // Extract tooltip text from the onclick attribute
                            const onclickAttr = node.getAttribute('onclick');
                            const match = onclickAttr.match(/callTooltip\(".*?",\s*"(.*?)"\)/);
                            if (match && match[1]) {
                                const tooltipText = match[1];

                                node.addEventListener('mouseover', (event) => {
                                    tooltip.textContent = tooltipText;
                                    tooltip.style.display = 'block';
                                    positionTooltip(event, tooltip, container);
                                });

                                node.addEventListener('mousemove', (event) => {
                                    positionTooltip(event, tooltip, container);
                                });

                                node.addEventListener('mouseout', () => {
                                    tooltip.style.display = 'none';
                                });

                                // Remove the default Mermaid click behavior if desired
                                // node.removeAttribute('onclick');
                                // node.style.cursor = 'pointer'; // Keep pointer cursor
                            }
                        });
                        observer.disconnect(); // Stop observing once done
                        break; // Exit loop once SVG is found
                    }
                }
            }
        });

        // Start observing the container for changes
        observer.observe(container, { childList: true, subtree: true });
    });
});

// Function to position the tooltip near the mouse cursor within the container bounds
function positionTooltip(event, tooltipElement, container) {
    const containerRect = container.getBoundingClientRect();
    const tooltipRect = tooltipElement.getBoundingClientRect();

    // Calculate position relative to the container
    let x = event.clientX - containerRect.left + 15; // Offset from cursor
    let y = event.clientY - containerRect.top + 15;  // Offset from cursor

    // Adjust if tooltip goes out of container bounds (right/bottom)
    if (x + tooltipRect.width > container.offsetWidth) {
        x = event.clientX - containerRect.left - tooltipRect.width - 15;
    }
    if (y + tooltipRect.height > container.offsetHeight) {
        y = event.clientY - containerRect.top - tooltipRect.height - 15;
    }

    // Adjust if tooltip goes out of container bounds (left/top)
     if (x < 0) {
        x = event.clientX - containerRect.left + 15; // Reset to right of cursor if it goes left
    }
     if (y < 0) {
        y = event.clientY - containerRect.top + 15; // Reset below cursor if it goes above
    }


    tooltipElement.style.left = `${x}px`;
    tooltipElement.style.top = `${y}px`;
}
*/
// --- End of disabled tooltip code ---
