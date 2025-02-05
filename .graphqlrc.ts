import dotenv from "dotenv";
dotenv.config();

export default {
  schema: `${process.env.CMS_URL}/graphql`,
  documents: "src/**/*.{graphql,js,ts,jsx,tsx}",
};
