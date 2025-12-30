#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get component name from command line arguments
const componentName = process.argv[2];

if (!componentName) {
  console.error("Error: Please provide a component name");
  console.error("Usage: node newComp.js componentName");
  process.exit(1);
}

// Validate component name (alphanumeric)
if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error(
    "Error: Component name must start with a letter and contain only alphanumeric characters",
  );
  process.exit(1);
}

// Convert names
const folderName = componentName; // camelCase folder
const titleCaseName =
  componentName.charAt(0).toUpperCase() + componentName.slice(1); // TitleCase

const srcPath = path.join(__dirname, "../src");
const componentsPath = path.join(srcPath, "components");
const componentPath = path.join(componentsPath, folderName);
const storiesPath = path.join(srcPath, "stories");

// Check if component already exists
if (fs.existsSync(componentPath)) {
  console.error(`Error: Component "${folderName}" already exists`);
  process.exit(1);
}

try {
  // Create component folder
  fs.mkdirSync(componentPath, { recursive: true });

  // Create TSX file
  const tsxContent = `import styles from "./${titleCaseName}.module.css";

function ${titleCaseName}() {
  return <div className={styles.${titleCaseName}}>${titleCaseName}</div>;
}

export { ${titleCaseName} };
`;

  fs.writeFileSync(
    path.join(componentPath, `${titleCaseName}.tsx`),
    tsxContent,
  );

  // Create CSS Module file
  const cssContent = `.${titleCaseName} {
}
`;

  fs.writeFileSync(
    path.join(componentPath, `${titleCaseName}.module.css`),
    cssContent,
  );

  // Create story file
  const storyContent = `import type { Meta, StoryObj } from "@storybook/react-vite";
import { ${titleCaseName} } from "../components/${folderName}/${titleCaseName}";

const meta = {
  title: "${titleCaseName}",
  component: ${titleCaseName},
} satisfies Meta<typeof ${titleCaseName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
`;

  fs.writeFileSync(
    path.join(storiesPath, `${titleCaseName}.stories.tsx`),
    storyContent,
  );

  console.log(`✅ Component "${folderName}" created successfully!`);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
