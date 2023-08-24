module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
  },
  config: {
    deployHook:
      "https://api.vercel.com/v1/integrations/deploy/prj_sXlUOjgqNRDasOkqMAYxDEF8niUP/c6JjUpRHZu",
    apiToken: "aru5BlkVKNSd3ZJsdXe1B4SH",
    appFilter: "my-project",
    teamFilter: "prj_sXlUOjgqNRDasOkqMAYxDEF8niUP",
    roles: ["strapi-super-admin"],
  },
});
