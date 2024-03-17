/**
 * Write the logic to create the controllers for idea resources
 */
const ideas = require('../models/ideas.model');
let id = 3;  // initially there are three ideas


/**
 * create the controller for fetching all the ideas
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 * 
 * return list of all the ideas
 */
exports.getAllIdeas = (req, res)=>{
  // first read all the ideas from idea models

  // return all those ideas
  res.status(200).send(ideas);
}

/**
 *  get ideas based on id
 */
exports.getIdeaBasedOnId = (req, res) =>{
  // read the idea from the req path param
  idea_id = req.params.id;

  // using id, check if it is present or not
  if(ideas[idea_id]){
    res.status(200).send(ideas[idea_id]);
  }
  else{
    res.status(404).send({
      message : "Idea with given id is not found"
    })
  }

  // return the response
}


/**
 * Controller to create a new idea
 */
exports.createIdea = (req, res)=>{
  // read the body
  idea_object = req.body;
  id++;
  idea_object['id'] = id; // setting the id in the newly created idea object
  ideas[id] = idea_object;

  // add the new body provided in the ideas object
  //return the response
  res.status(201).send(idea_object);
}

/**
 * Controller to update the idea 
 */
exports.updateIdea= (req, res) =>{
  idea_id = req.params.id;

  if(ideas[idea_id]){
    ideas[idea_id] = req.body;
    res.status(200).send(ideas[idea_id]);
  }
  else{
    res.status(404).send({
      message : "Idea with given id is not found"
    });
  }
}


/**
 * Contoller to delete an idea
 */
exports.deleteIdea = (req, res) => {
  idea_id = req.params.id;

  if(ideas[idea_id]){
    delete ideas[idea_id];
    res.status(200).send({
      message : "idea deleted successfully"
    });
  }
  else{
    res.status(404).send({
      message : "Idea with given id is not found"
    });
  }
}