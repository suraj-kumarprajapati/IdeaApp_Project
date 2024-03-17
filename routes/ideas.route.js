/**
 * Route for :
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 */

const idea_controller = require('../controllers/ideas.controller');

module.exports = (app)=>{
  app.get('/ideaApp/api/v1/ideas', idea_controller.getAllIdeas);
  app.get('/ideaApp/api/v1/ideas/:id', idea_controller.getIdeaBasedOnId);
  app.post('/ideaApp/api/v1/ideas', idea_controller.createIdea);
  app.put('/ideaApp/api/v1/ideas/:id', idea_controller.updateIdea);
  app.delete('/ideaApp/api/v1/ideas/:id', idea_controller.deleteIdea);
}