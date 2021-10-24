// build your `Project` model here
const db = require('../../data/dbConfig.js');

function getProject() {
  return db('projects');
}

async function createProject(project) {
  const [project_id] = await db('projects').insert(project)
  return getProject().where({project_id}).first();
}

module.exports = {
  getProject,
  createProject,
}