const Joueur = require("../models/Joueur");
async function addjoueur(req,res) {
    const joueur = new Joueur({
        pseudo: req.body.pseudo,
        sante: 100,
        score: 0});
        await joueur.save();
        res.json({message: "Joueur ajouté avec succès:"+joueur.pseudo});

        
    
}
module.exports = addjoueur;