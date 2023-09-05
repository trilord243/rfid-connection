import mysql from "serverless-mysql";

export const conn = mysql({
  config: {
    host: "23.229.237.128",
    user: "jjhikyqqhl3k",
    password: "Pp2177eE2022$",
    port: "3306",
    database: "test-felipe",
  },
});
