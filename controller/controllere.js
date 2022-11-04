const addingNumber=(req,res )=>{ 
 const{number1,number2}=req.body   
 let data=number1+number2
 try {
    res.json({
         result:data,
         messsage:"hello"
    })
 } catch (error) {
    message:error.message
 }
}
module.exports={addingNumber}