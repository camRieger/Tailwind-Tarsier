
export default function TemplateBlock(code){
    function formatJSX(flatCode) {
        const lines = flatCode.split("\n");
        let indent = 0;
        const indentSize = 2;

        return lines
        .map((line) => {
            const trimmed = line.trim();

            // Decrease indent for closing tags
            if (trimmed.startsWith("</")) {
            indent -= 1;
            }

            const formatted =
            " ".repeat(indent * indentSize) + trimmed;

            // Increase indent for opening tags (not self-closing)
            if (
            trimmed.startsWith("<") &&
            !trimmed.startsWith("</") &&
            !trimmed.endsWith("/>")
            ) {
            indent += 1;
            }

            return formatted;
        })
        .join("\n");
    }
    return formatJSX(code.replace(/space/g, "\n"))
}