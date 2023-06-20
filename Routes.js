const express=require("express")
require("dotenv").config();
const router=express.Router();
const Movie=require("./module/MovieSchema")
const upload=require("./fileuoload")
router.post("/movieadd", upload.single("poster"), async (req, res, next) => {
    const { Title, Released, Genre, imdbRating, Country } = req.body;
  
    try {
      const movieData = {
        Title: Title,
        Released: Released,
        Genre: Genre,
        imdbRating: imdbRating,
        Country: Country,
      };
  
      if (req.file) {
        movieData.Poster = `http://localhost:${process.env.PORT}/${req.file.path}`;
      }
    //   await Movie.deleteMany();
      const MovieAdd = await Movie.create(movieData);
  
      console.log(MovieAdd);
      
      res.status(201).json(MovieAdd);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });
router.get("/getall",async (req,res)=>{
    const{searchmovie}=req.query;
    console.log(req.query);
    const movieobject={};
    console.log(searchmovie);
    if(searchmovie){
        movieobject.Title={$regex:searchmovie,$options:"i"}
    }
    console.log(movieobject);
    try{
        const showall=await Movie.find(movieobject);
        res.status(201).json(showall); 
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})

    }
})

router.get("/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        const singlemovie=await Movie.findById({_id:id})
        res.status(201).json(singlemovie)
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
        
    }
})
module.exports=router;