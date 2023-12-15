import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async (request) => {
    try{
        await connectToDB();
        
        const prompts = await Prompt.find({}).populate('creator');

        // console.log(prompts);
        return new Response(JSON.stringify(prompts), { status: 200 })
        
    }catch(error){
        console.log("FAILED TO FETCH PROMPTS", error)
        return new Response("Failed to fetch all Prompts", {status:500})
    }

}